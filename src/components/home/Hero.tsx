import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div>Hero</div>
      <Link to="about">click to about</Link>
    </>
  );
};

export default Hero;
