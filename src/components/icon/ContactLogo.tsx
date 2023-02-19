import React from "react";
import { JaviContactLogo } from "../../assets";

type Props = {};

const ContactLogo = (props: Props) => {
  return (
    <img
      src={JaviContactLogo}
      className="w-[74px] h-[74px]"
      alt={"javi-logo.svg"}
    />
  );
};

export default ContactLogo;
