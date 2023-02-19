import React from "react";
import { useTranslation } from "react-i18next";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const AboutPage = (props: Props) => {
  const {t} = useTranslation();

  return (
    <>
      <Header title={t("about")} />
      <FadeAnimation>
        <ScreenContainer>
          <div>About</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default AboutPage;
