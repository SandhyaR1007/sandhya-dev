import { MdArrowOutward } from "react-icons/md";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

const MainComponent = () => {
  return (
    <main className="md:w-[50%] relative md:left-[300px] flex flex-col gap-16">
      <About />

      <Experience />
      <a
        href={
          "https://drive.google.com/file/d/1Fk2HBPrkhg5um22zMfCRPnS-Bg39XXlQ/view?usp=drive_link"
        }
        target="_blank"
        className="flex items-center gap-1 text-xl p-5 exp-card"
      >
        <span>View Full Resume</span>
        <span>
          <MdArrowOutward className="arrow-upward" />
        </span>
      </a>

      <Projects />
      <Footer />
    </main>
  );
};

export default MainComponent;
