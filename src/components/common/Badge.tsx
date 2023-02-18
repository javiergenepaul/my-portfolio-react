import React from "react";

type Props = {
  isClickable?: boolean;
  badgeName: string;
};

const Badge = (props: Props) => {
  const { badgeName, isClickable } = props;

  return (
    <button
      onClick={(e) => {
        e.currentTarget.blur();
      }}
      className={`border rounded-lg px-4 py-1 border-gray-04 text-gray-04  hover:border-white hover:text-white hover:cursor-pointer ${
        isClickable ? "focus:border-primary focus:text-primary " : ""
      }`}
    >
      <small className="text-[12px]">{badgeName}</small>
    </button>
  );
};

export default Badge;
