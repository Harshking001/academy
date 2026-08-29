import React from "react";

const highlights = [
  {
    video: "/academy/videos/vid.mp4",
    title: "Fan Experience.",
    description: "We don't just play football we have fun too...",
  },
  {
    video: "/academy/videos/vid2.mp4",
    title: "Beyond Training, Building Tomorrow's Legends",
    description: "We are back in session. Training from U7 to U17 every Saturday and Sunday from 2PM at Wendani Astro Turf. SFA home of future champions",
  },
  {
    video: "/academy/videos/vid1.mp4",
    title: "Creating Lasting Memories",
    description: "4 categories, 4 trophies. Stars game ni Moto... highlights of the concluded Rising Stars Football Tournament",
  },
];

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="highlights">
        {highlights.map((item, index) => (
          <div className="video-container" key={index}>
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />

            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;