import React from "react";
import { FadeAnimation, Header, ScreenContainer } from "../components";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <Header title="Contacts" />
      <FadeAnimation>
        <ScreenContainer>
          <div className="">Contact</div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default ContactPage;
