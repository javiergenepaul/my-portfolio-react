import React from "react";
import { useTranslation } from "react-i18next";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const SkillsPage = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("skills")} />
      <FadeAnimation>
        <ScreenContainer>
          <div>SkillsPage</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default SkillsPage;
