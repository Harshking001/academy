import React from "react";

const coaches = [
  {
    image: "/academy/trophy.png",
    name: "Coach Starcus Matiku",
    description:
      "A passionate football coach dedicated to developing players, promoting teamwork, discipline, and continuous improvement both on and off the field.",
    role: "Head Coach",
  },
  {
    image: "/academy/ball4.png",
    name: "Coach Francine Odoi",
    description:
      "An organized and dedicated team manager responsible for supporting players and coaches, coordinating team operations, and ensuring everything runs smoothly on and off the field.",
    role: "Team Manager",
  },
  {
    image: "/academy/ball1.png",
    name: "Coach Njinu",
    description:
      "Committed to nurturing young talent by building strong football fundamentals, confidence, teamwork, and a love for the game.",
    role: "U13",
  },
  {
    image: "/academy/trophy-hold.png",
    name: "Coach Sam",
    description:
      "Focused on introducing young players to football through fun, skill development, discipline, and positive sportsmanship.",
    role: "U09",
  },
  {
    image: "/academy/trophy-hold.png",
    name: "Coach Zacky",
    description:
      "Dedicated to helping young athletes develop their technical skills, teamwork, and confidence while enjoying the game.",
    role: "U11",
  },
];

const Coaches = () => {
  return (
    <section id="coaches">
      <div className="coaches-header">
        <h1>Meet Our Coaches</h1>
        <p>
          Meet the people dedicated to developing our players both on and off
          the field.
        </p>
      </div>

      <div className="coaches">
        {coaches.map((coach, index) => (
          <article className="coach" key={index}>
            <img
              className="coach-img"
              src={coach.image}
              alt={coach.name}
            />

            <div className="coach-content">
              <h2>{coach.name}</h2>

              <p>{coach.description}</p>

              <h3>{coach.role}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Coaches;