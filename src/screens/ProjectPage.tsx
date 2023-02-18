import React from "react";
import { Card, FadeAnimation, Header, ScreenContainer } from "../components";
import ProjectContainer from "../components/project-section/ProjectContainer";

type Props = {};

const ProjectPage = (props: Props) => {
  return (
    <>
      <Header title="Project" />
      <FadeAnimation>
        <ProjectContainer isPrimary={true} isReverse={false} />
        <ProjectContainer isReverse={true} />
        <ProjectContainer isReverse={false} />
        <ProjectContainer isReverse={true} />
        {/* <div className="w-full min-h-screen h-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="flex gap-32 h-full py-16 px-4">
              <div className="basis-2/5">
                <div className="flex flex-col h-full">
                  <h3 className="text-primary font-bold">PROJECTS</h3>
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
              <div className="basis-3/5 sticky top-0">
                <Card>
                  <div className="h-full flex justify-center items-center">
                    sample
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen h-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="flex flex-row-reverse gap-32 h-full py-16 px-4">
              <div className="basis-2/5">
                <div className="flex flex-col h-full">
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
              <div className="basis-3/5 sticky top-0">
                <Card>
                  <div className="h-full flex justify-center items-center">
                    sample
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen h-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="flex gap-32 h-full py-16 px-4">
              <div className="basis-2/5">
                <div className="flex flex-col h-full">
                  <h3 className="text-primary font-bold">PROJECTS</h3>
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
              <div className="basis-3/5 sticky top-0">
                <Card>
                  <div className="h-full flex justify-center items-center">
                    sample
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen h-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="flex flex-row-reverse gap-32 h-full py-16 px-4">
              <div className="basis-2/5">
                <div className="flex flex-col h-full">
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
              <div className="basis-3/5 sticky top-0">
                <Card>
                  <div className="h-full flex justify-center items-center">
                    sample
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div> */}
      </FadeAnimation>
    </>
  );
};

export default ProjectPage;
