import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>
        {t("header")} - {title}
      </title>
    </Helmet>
  );
};

export default Header;
