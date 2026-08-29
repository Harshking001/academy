import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable);

const View = () => {
  const viewRef = useRef(null);

  useGSAP(() => {
    // Select everything specifically inside #view
    const view = document.querySelector("#view");

    if (!view) return;

    const cards = gsap.utils.toArray("#view ol li");

    if (!cards.length) return;

    // --------------------------------
    // Initial card position
    // --------------------------------

    gsap.set("#view ol li", {
      xPercent: 400,
      opacity: 0,
      scale: 0,
    });

    // --------------------------------
    // Settings
    // --------------------------------

    const spacing = 0.1;

    const animateFunc = (element) => {
      const tl = gsap.timeline();

      tl.fromTo(
        element,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        {
          xPercent: 400,
        },
        {
          xPercent: -400,
          duration: 1,
          ease: "none",
          immediateRender: false,
        },
        0
      );

      return tl;
    };

    // --------------------------------
    // Build seamless loop
    // --------------------------------

    const buildSeamlessLoop = (items, spacing, animateFunc) => {
      const overlap = Math.ceil(1 / spacing);

      const startTime = items.length * spacing + 0.5;

      const loopTime = (items.length + overlap) * spacing + 1;

      const rawSequence = gsap.timeline({
        paused: true,
      });

      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,

        onRepeat() {
          if (this._time === this._dur) {
            this._tTime += this._dur - 0.01;
          }
        },
      });

      const l = items.length + overlap * 2;

      let time;
      let index;

      for (let i = 0; i < l; i++) {
        index = i % items.length;

        time = i * spacing;

        rawSequence.add(
          animateFunc(items[index]),
          time
        );

        if (i <= items.length) {
          seamlessLoop.add(
            `label${i}`,
            time
          );
        }
      }

      rawSequence.time(startTime);

      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none",
        })
        .fromTo(
          rawSequence,
          {
            time: overlap * spacing + 1,
          },
          {
            time: startTime,
            duration:
              startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none",
          }
        );

      return seamlessLoop;
    };

    const seamlessLoop = buildSeamlessLoop(
      cards,
      spacing,
      animateFunc
    );

    // --------------------------------
    // Playhead
    // --------------------------------

    const playhead = {
      offset: 0,
    };

    const wrapTime = gsap.utils.wrap(
      0,
      seamlessLoop.duration()
    );

    const scrub = gsap.to(playhead, {
      offset: 0,

      onUpdate() {
        seamlessLoop.time(
          wrapTime(playhead.offset)
        );
      },

      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    // --------------------------------
    // ScrollTrigger
    // IMPORTANT:
    // We DON'T change the document scroll.
    // --------------------------------

    const trigger = ScrollTrigger.create({
      trigger: "#view",

      start: "top top",

      end: "bottom top",

      scrub: false,

      pin: true,

      onUpdate(self) {
        scrub.vars.offset =
          self.progress * seamlessLoop.duration();

        scrub.invalidate().restart();
      },
    });

    // --------------------------------
    // Draggable
    // --------------------------------

    const dragProxy = document.querySelector(
      "#view .drag-proxy"
    );

    const cardsContainer = document.querySelector(
      "#view ol"
    );

    let draggable;

    if (dragProxy && cardsContainer) {
      draggable = Draggable.create(
        dragProxy,
        {
          type: "x",

          trigger: cardsContainer,

          onPress() {
            this.startOffset = scrub.vars.offset;
          },

          onDrag() {
            scrub.vars.offset =
              this.startOffset +
              (this.startX - this.x) * 0.001;

            scrub.invalidate().restart();
          },

          onDragEnd() {
            scrub.vars.offset =
              Math.round(
                scrub.vars.offset / spacing
              ) * spacing;

            scrub.invalidate().restart();
          },
        }
      );
    }

    // --------------------------------
    // Next / Previous
    // --------------------------------

    const nextButton = document.querySelector(
      "#view .next"
    );

    const prevButton = document.querySelector(
      "#view .prev"
    );

    const next = () => {
      scrub.vars.offset += spacing;
      scrub.invalidate().restart();
    };

    const prev = () => {
      scrub.vars.offset -= spacing;
      scrub.invalidate().restart();
    };

    if (nextButton) {
      nextButton.addEventListener("click", next);
    }

    if (prevButton) {
      prevButton.addEventListener("click", prev);
    }

    // --------------------------------
    // Cleanup
    // --------------------------------

    return () => {
      if (nextButton) {
        nextButton.removeEventListener(
          "click",
          next
        );
      }

      if (prevButton) {
        prevButton.removeEventListener(
          "click",
          prev
        );
      }

      if (draggable) {
        draggable.forEach((instance) =>
          instance.kill()
        );
      }

      scrub.kill();
      seamlessLoop.kill();
      trigger.kill();
    };
  }, []);

  return (
    <section id="view" ref={viewRef}>
      <ol>
        <li>
          <img
            src="/academy/images/pic (2).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (1).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (3).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (4).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (5).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (1).jpg"
            alt="view"
          />
        </li>

        <li>
          <img
            src="/academy/images/pic (1).webp"
            alt="view"
          />
        </li>
      </ol>
    </section>
  );
};

export default View;