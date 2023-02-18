import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { About, Contacts, Footer, Projects, Skills } from "../components";
import { skills } from "../constants/Constant";

type Props = {};

const HomePage = (props: Props) => {
  const skills = useRef<any>(null);

  useEffect(() => {
    console.log(skills.current.offsetBot);
  }, [skills]);

  return (
    <>
      <Helmet>
        <title>Javi Portfolio - home</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-32 h-full px-4 py-16">
          <div className="sticky top-20 h-[550px] basis-2/5">
            <About />
          </div>
          <div className="basis-3/5 w-full h-full flex flex-col gap-4">
            <Skills ref={skills} name="sample" />
            <Contacts />
            {/* <Projects /> */}
            <button
              onClick={() => {
                window.scrollTo(0, skills.current.offsetTop);
              }}
            >
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
