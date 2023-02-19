import React from "react";
import { FadeAnimation, Header, ProjectContainer } from "../components";

type Props = {};

const ProjectPage = (props: Props) => {
  return (
    <>
      <Header title="Project" />
      <FadeAnimation>
        <ProjectContainer isPrimary={true} isReverse={false} />
        <ProjectContainer isReverse={true} />
        <ProjectContainer isReverse={false} />
        <ProjectContainer isReverse={true} />
      </FadeAnimation>
    </>
  );
};

export default ProjectPage;
