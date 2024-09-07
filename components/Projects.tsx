import { Card } from "./ui/Card";

const Projects = () => {
  return (
    <div id="projects">
      <div>
        {projects.map((ex) => (
          <Card {...ex} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    title: "Eyesome",
    description:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "React", "Context API", "Tailwind CSS"],
    link: "",
  },
  {
    title: "Webuzz",
    description:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "React", "Redux", "Tailwind CSS"],
    link: "",
  },
];
