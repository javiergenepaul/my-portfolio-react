import React from "react";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <Header title="About" />
      <FadeAnimation>
        <ScreenContainer>
          <div>About</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default AboutPage;
