import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  About,
  Contacts,
  FadeAnimation,
  Footer,
  Projects,
  Skills,
} from "../components";

type Props = {};

const HomePage = (props: Props) => {
  const skills = useRef<any>(null);

  return (
    <>
      <Helmet>
        <title>Javi Portfolio - home</title>
      </Helmet>
      <FadeAnimation> 
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-32 h-full px-4 py-16">
            <div className="sticky top-20 h-[550px] basis-2/5">
              <About />
            </div>
            <div className="basis-3/5 w-full h-full flex flex-col gap-4">
              <Skills ref={skills} name="sample" />
              <Contacts />
            </div>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default HomePage;
