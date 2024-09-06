import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  return (
    <div>
      <ExperienceCard />
      <ExperienceCard />
    </div>
  );
};

export default Experience;

const ExperienceCard = () => {
  return (
    <div className="flex p-5 rounded-md hover:bg-[rgba(253,224,71,0.05)]   transition-[0.5s] exp-card">
      <div className="text-neutral-400 text-sm  w-1/4">2023-PRESENT</div>
      <div className="w-3/4 flex flex-col gap-3">
        <h2 className="text-white text-xl flex items-center gap-1">
          <span>Frontend Engineer</span> - <span>Businessnext</span>{" "}
          <span>
            <MdArrowOutward className="arrow-upward" />
          </span>
        </h2>
        <p className="text-neutral-400">
          Build and maintain critical components used to construct frontend,
          across the whole product. Work closely with cross-functional teams,
          including developers, designers, and product managers, to implement
          and advocate for best practices in web accessibility.
        </p>
        <ul className="flex items-center gap-3">
          <li className="text-yellow-300 bg-[rgba(255,241,38,0.2)] px-4 py-1.5 rounded-full text-sm">
            JavaScript
          </li>
          <li className="text-yellow-300 bg-[rgba(255,241,38,0.2)] px-4 py-1.5 rounded-full text-sm">
            TypeScript
          </li>
          <li className="text-yellow-300 bg-[rgba(255,241,38,0.2)] px-4 py-1.5 rounded-full text-sm">
            React
          </li>
        </ul>
      </div>
    </div>
  );
};
