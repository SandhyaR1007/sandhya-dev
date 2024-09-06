import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Card } from "./Card";

const Experience = () => {
  return (
    <div>
      {exps.map((ex) => (
        <Card {...ex} />
      ))}
    </div>
  );
};

export default Experience;

const exps = [
  {
    exp: "2023-PRESENT",
    title: "Frontend Engineer- Businessnext",
    description:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "TypeScript", "React"],
    link: "",
  },
  {
    exp: "2021-2023",
    title: "Senior IT Associate - vDoIT Technologies",
    description:
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
