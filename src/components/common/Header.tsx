import React from "react";
import { Helmet } from "react-helmet";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <Helmet>
      <title>Javi Portfolio - {title}</title>
    </Helmet>
  );
};

export default Header;
