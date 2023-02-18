import React, { ReactNode } from "react";

type Props = {
  style?: any;
  children: ReactNode;
};

const Card = (props: Props) => {
  const { children, style } = props;
  return (
    <div
      className={`w-full h-full bg-[#7776B8]/10 backdrop-blur-sm flex flex-col p-6 rounded-lg ${style}`}
    >
      {children}
    </div>
  );
};

export default Card;
