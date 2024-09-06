import { MdArrowOutward } from "react-icons/md";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

const MainComponent = () => {
  return (
    <main className="w-[50%] relative left-[300px] flex flex-col gap-16">
      <About />

      <Experience />
      <a
        href={
          "https://drive.google.com/file/d/1Fk2HBPrkhg5um22zMfCRPnS-Bg39XXlQ/view?usp=drive_link"
        }
        target="_blank"
        className="flex items-center gap-1 text-xl p-5"
      >
        <span>View Full Resume</span>
        <span>
          <MdArrowOutward className="arrow-upward" />
        </span>
      </a>

      <Projects />
    </main>
  );
};

export default MainComponent;
