import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  return (
    <div>
      {exps.map((ex) => (
        <ExperienceCard {...ex} />
      ))}
    </div>
  );
};

export default Experience;

const exps = [
  {
    exp: "2023-PRESENT",
    role: "Frontend Engineer",
    company: "Businessnext",
    responsibility:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "TypeScript", "React"],
    link: "",
  },
  {
    exp: "2021-2023",
    role: "Senior IT Associate",
    company: "vDoIT Technologies",
    responsibility:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "React Native",
      "Electron.js",
    ],
    link: "",
  },
];

const ExperienceCard = (props: any) => {
  const { exp, role, company, responsibility, skills } = props;
  return (
    <div className="flex p-5 rounded-md hover:bg-[rgba(253,224,71,0.05)]   transition-[0.5s] exp-card">
      <div className="text-neutral-400 text-sm  w-1/4">{exp}</div>
      <div className="w-3/4 flex flex-col gap-3">
        <h2 className="text-white text-xl flex items-center gap-1">
          <span>{role}</span> - <span>{company}</span>{" "}
          <span>
            <MdArrowOutward className="arrow-upward" />
          </span>
        </h2>
        <p className="text-neutral-400">{responsibility}</p>
        <ul className="flex items-center gap-3 flex-wrap">
          {skills.map((skill: string, index: number) => (
            <li
              key={index}
              className="text-yellow-300 bg-[rgba(255,241,38,0.2)] px-4 py-1.5 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
