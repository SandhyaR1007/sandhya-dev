import React from "react";

import { Card } from "./ui/Card";
import { experience } from "./utils";

const Experience = () => {
  return (
    <div id="experience">
      <p className=" lg:hidden text-lg font-semibold text-slate-400 tracking-[0.15rem] py-2 ps-5">
        EXPERIENCE
      </p>
      {experience.map((ex, i) => (
        <Card {...ex} key={i} />
      ))}
    </div>
  );
};

export default Experience;
