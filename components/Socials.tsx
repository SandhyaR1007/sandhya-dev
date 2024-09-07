import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li className="text-3xl text-neutral-400">
        {" "}
        <a href="https://github.com/SandhyaR1007">
          <FaGithub />
        </a>
      </li>
      <li className="text-3xl text-neutral-400">
        <a href="https://www.linkedin.com/in/sandhyarajwanshi/">
          <FaLinkedin />
        </a>
      </li>
      <li className="text-3xl text-neutral-400">
        <a href="https://x.com/SandhyaR1007">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
