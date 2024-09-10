import { MdArrowOutward } from "react-icons/md";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Resume from "./Resume";
import Link from "next/link";

const MainComponent = () => {
  return (
    <main className="lg:w-[50%] relative lg:left-[250px] flex flex-col gap-16">
      <About />

      <Experience />
      <Resume />

      <Projects />
      <Link
        href="/projects"
        className="flex items-center gap-1 text-xl p-5 exp-card"
      >
        <span>View All Projects</span>
        <span>
          <MdArrowOutward className="arrow-upward" />
        </span>
      </Link>
      <Footer />
    </main>
  );
};

export default MainComponent;
