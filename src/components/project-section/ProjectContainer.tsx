import React from "react";
import Card from "../common/Card";

type Props = {
  isReverse: boolean;
  isPrimary?: boolean;
};

const ProjectContainer = (props: Props) => {
  const { isReverse, isPrimary } = props;
  return (
    <div className="w-full min-h-screen h-full flex justify-center">
      <div className="max-w-7xl w-full">
        <div
          className={`flex gap-6 h-full py-16 px-4 ${
            isReverse && "flex-row-reverse"
          }`}
        >
          <div className="basis-1/2">
            <div className="flex flex-col h-full">
              {isPrimary && (
                <h3 className="text-primary font-bold">PROJECTS</h3>
              )}
              <div className="flex-1">
                <div className="flex flex-col gap-4 h-full justify-center">
                  <span>Lorem ipsum</span>
                  <p className="text-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex gap-2 text-gray-04">
                    <span>Lorem ipsum</span>
                    <span>Lorem ipsum</span>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 sticky top-0">
            <Card>
              <div className="h-full flex justify-center items-center">
                sample
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
