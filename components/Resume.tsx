import { MdArrowOutward } from "react-icons/md";
import { resumeLink } from "./utils";

const Resume = () => {
  return (
    <a
      href={resumeLink}
      target="_blank"
      className="flex items-center gap-1 text-xl p-5 exp-card"
    >
      <span>View Full Resume</span>
      <span>
        <MdArrowOutward className="arrow-upward" />
      </span>
    </a>
  );
};

export default Resume;
