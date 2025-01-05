import React from "react";

import { experience } from "./utils";
import { TimelineComponent } from "./ui/TimelineComponent";

const Experience = () => {
  const data = experience.map((ex, i) => ({
    title: ex.exp,
    content: (
      <div className="">
        <ExperienceCard {...ex} />
      </div>
    ),
  }));

  return <TimelineComponent data={data} />;
};

export default Experience;

const ExperienceCard = (props: any) => {
  const { title, company, description, skills, link = "" } = props;
  return (
    <div className="flex items-start   rounded-md ">
      <div className=" flex flex-col gap-3">
        <h2 className="text-white text-lg flex items-center gap-1">
          <span>{title} </span>
          <a
            href={link}
            target="_blank"
            className="text-yellow-300 text-xl hover:underline"
          >
            @ {company}
          </a>
        </h2>
        <ul>
          {description.map((d: string) => (
            <li key={d} className="text-neutral-400 p-2">
              <span>-</span> {d}
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3 flex-wrap">
          {skills.map((skill: string, index: number) => (
            <li
              key={`${index}-${skill}`}
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
