import { Link } from "react-router-dom";
import { socialMedias } from "../../constants/Constant";
import { BounceText } from "../animation";
import { NavLink, SocialButton } from "../common";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-bold">
          <BounceText text="Hello, I'm" />
           <br />
          <BounceText path="/about" text="Paul Javier" />
        </h1>
        <p>
          Do exercitation qui labore enim. Occaecat consectetur mollit minim non
          velit nulla nisi non. Pariatur deserunt mollit ullamco ullamco culpa
          pariatur deserunt sunt anim ipsum. Officia proident tempor et ea
          cupidatat proident aute anim. Ea sunt anim consequat voluptate
          consectetur minim sint proident magna exercitation ullamco occaecat.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <NavLink path={"/skills"} pagination={"01"} name={"Skills"} />
          <NavLink path={"/projects"} pagination={"02"} name={"Projects"} />
          <NavLink path={"/contact"} pagination={"03"} name={"Contacts"} />
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
        </div>
      </div>
    </div>
  );
};

export default About;
