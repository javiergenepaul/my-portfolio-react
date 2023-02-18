import React from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  pagination: string;
  name: string;
};

const NavLink = (props: NavLinkProps) => {
  const { path, pagination, name } = props;
  return (
    <Link to={path} className="flex items-center gap-2">
      <span>{pagination}</span>
      <div className="border w-[30px]"></div>
      <span>{name}</span>
    </Link>
  );
};

export default NavLink;
