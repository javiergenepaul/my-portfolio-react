import React from "react";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const SkillsPage = (props: Props) => {
  return (
    <>
      <Header title="Skills" />
      <FadeAnimation>
        <ScreenContainer>
          <div>SkillsPage</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default SkillsPage;
