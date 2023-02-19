import React from "react";
import { useTranslation } from "react-i18next";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const ContactPage = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("contacts")} />
      <FadeAnimation>
        <ScreenContainer>
          <div className="">Contact</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default ContactPage;
