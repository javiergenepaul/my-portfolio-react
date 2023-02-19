import React from "react";
import { Link } from "react-router-dom";
import { BounceText } from "../animation";

type NavLinkProps = {
  path: string;
  pagination: string;
  name: string;
};

const NavLink = (props: NavLinkProps) => {
  const { path, pagination, name } = props;
  return (
    <Link to={path} className="flex items-center gap-2 group hover:text-primary">
      <span>
        <BounceText text={pagination} />
      </span>
      <div className="border w-[30px]"></div>
      <span>
        <BounceText text={name} />
      </span>
    </Link>
  );
};

export default NavLink;
