import { MdArrowOutward } from "react-icons/md";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Resume from "./Resume";

const MainComponent = () => {
  return (
    <main className="md:w-[50%] relative md:left-[300px] flex flex-col gap-16">
      <About />

      <Experience />
      <Resume />

      <Projects />
      <Footer />
    </main>
  );
};

export default MainComponent;
