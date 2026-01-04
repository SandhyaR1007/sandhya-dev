"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Resume from "./Resume";
import Link from "next/link";
import { socials } from "./utils";

type MainProps = {
  currentTab: string;
};

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const MainComponent: React.FC<MainProps> = ({ currentTab }) => {
  return (
    <main className="flex flex-col gap-8">
      <AnimatePresence mode="wait">
        {currentTab === "about" && (
          <motion.section
            key="about"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.28 }}
          >
            <About />
          </motion.section>
        )}

        {currentTab === "experience" && (
          <motion.section
            key="experience"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.28 }}
          >
            <Experience />
            <Resume />
          </motion.section>
        )}

        {currentTab === "projects" && (
          <motion.section
            key="projects"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.28 }}
          >
            <Projects />

            <a
              href={socials.github}
              target="_blank"
              className="flex items-center gap-1 text-xl p-5 exp-card glass rounded-lg w-max mt-6"
            >
              <span>View All Projects</span>
              <span>
                <MdArrowOutward className="arrow-upward" />
              </span>
            </a>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MainComponent;
