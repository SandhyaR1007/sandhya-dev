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
    link: "https://res.cloudinary.com/dwdcib0hv/image/upload/v1725788322/projects/eyesomess_b9e3na.png",
  },
  {
    title: "Webuzz",
    description:
      "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "React", "Redux", "Tailwind CSS"],
    link: "https://res.cloudinary.com/dwdcib0hv/image/upload/v1725788322/projects/webuzzss_k7ouva.png",
  },
];
