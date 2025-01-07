import { Card } from "./ui/Card";
import { projects } from "./utils";

const Projects = () => {
  return (
    <div id="projects">
      <p className="lg:hidden text-lg font-semibold text-slate-400 tracking-[0.15rem] py-2 ps-6">
        PROJECTS
      </p>
      <>
        {projects.map((ex, i) => (
          <Card {...ex} key={i} />
        ))}
      </>
    </div>
  );
};

export default Projects;
