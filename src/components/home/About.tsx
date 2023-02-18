import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { socialMedias } from "../../constants/Constant";
import SocialButton from "../ui/SocialButton";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-bold select-none">
          Hello, I'm <br />{" "}
          <Link to="about" className="hover:text-primary transition duration-150 cursor-pointer">
            Paul Javier
          </Link>
        </h1>
        <p>
          Do exercitation qui labore enim. Occaecat consectetur mollit minim non
          velit nulla nisi non. Pariatur deserunt mollit ullamco ullamco culpa
          pariatur deserunt sunt anim ipsum. Officia proident tempor et ea
          cupidatat proident aute anim. Ea sunt anim consequat voluptate
          consectetur minim sint proident magna exercitation ullamco occaecat.
        </p>
      </div>
      <div className="flex flex-col gap-10 select-none">
        <div className="flex flex-col gap-4">
          <Link to="/skills" className="flex items-center gap-2">
            <span>01</span>
            <div className="border w-[30px]"></div>
            <span>Skills</span>
          </Link>
          <Link to="/projects" className="flex items-center gap-2">
            <span>02</span>
            <div className="border w-[30px]"></div>
            <span>Projects</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2">
            <span>03</span>
            <div className="border w-[30px]"></div>
            <span>Contact</span>
          </Link>
        </div>
        <div className="flex flex-row gap-10">
          {socialMedias.map((data) => (
            <SocialButton
              key={data.id}
              icon={data.icon}
              url={data.url}
              title={data.title}
            />
          ))}
          {/* <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="mdi:github" width="26" height="26" />
            <span>Github</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
          <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="mdi:linkedin" width="26" height="26" />
            <span>LinkedIn</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
          <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="ic:baseline-facebook" width="26" height="26" />
            <span>Facebook</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
