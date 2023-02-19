import React from "react";
import { useTranslation } from "react-i18next";
import { FadeAnimation, Header, ProjectContainer } from "../components";

type Props = {};

const ProjectPage = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("projects")} />
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
