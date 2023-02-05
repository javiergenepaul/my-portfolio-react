import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex gap-32 h-screen px-4 py-16">
      <div className="flex flex-col gap-4 basis-2/5">
        <h1 className="text-7xl font-bold">
          Hello, I'm <br />{" "}
          <span className="hover:text-primary transition duration-150 cursor-pointer">
            Paul Javier
          </span>
        </h1>
        <p>
          Do exercitation qui labore enim. Occaecat consectetur mollit minim non
          velit nulla nisi non. Pariatur deserunt mollit ullamco ullamco culpa
          pariatur deserunt sunt anim ipsum. Officia proident tempor et ea
          cupidatat proident aute anim. Ea sunt anim consequat voluptate
          consectetur minim sint proident magna exercitation ullamco occaecat.
        </p>
      </div>
      <div className="basis-3/5">sample</div>
    </div>
  );
};

export default Hero;
