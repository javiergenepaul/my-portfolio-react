import { Icon } from "@iconify/react";
import { skills } from "../../constants/Constant";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {skills.map((data) => (
        <div className="w-full h-full bg-gray-01 flex flex-col p-6 rounded-lg">
          <div className="flex gap-6">
            <div className="basis-1/5">
              <Icon
                icon={data.icon}
                color="#5047eb"
                className="w-full h-full"
              />
            </div>
            <div className="basis-4/5 flex flex-col gap-4">
              <div className="">
                <h3 className="font-bol hover:text-primary hover:cursor-pointer">{data.title}</h3>
                <small>{data.definition}</small>
              </div>
              <div className="flex gap-2 flex-wrap">
                {data.badges.map((badge) => (
                  <div className="border rounded-lg px-4 py-1 hover:border-primary hover:text-primary hover:cursor-pointer">
                    <small className="text-[12px]">{badge.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
