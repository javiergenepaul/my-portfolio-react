import React, { ReactNode } from "react";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer = (props: ScreenContainerProps) => {
  const { children } = props;
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 h-full">
      <div className="flex gap-32 h-full">{children}</div>
    </div>
  );
};

export default ScreenContainer;
