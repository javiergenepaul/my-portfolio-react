import { Icon } from "@iconify/react";
import { forwardRef } from "react";
import { skills } from "../../constants/Constant";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

type Props = {
  name: string;
};

const Skills = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { name } = props;

  return (
    <div ref={ref} className="w-full flex flex-col gap-4">
      {skills.map((data) => (
        <Card key={data.id}>
          <div className="flex gap-6">
            <div className="basis-1/6">
              <Icon
                icon={data.icon}
                color="#FFF"
                className="w-full h-full p-6"
              />
            </div>
            <div className="basis-5/6 flex flex-col gap-4">
              <div className="">
                <h3 className="font-bol hover:text-primary hover:cursor-pointer">
                  {data.title}
                </h3>
                <small>{data.definition}</small>
              </div>
              <div className="flex gap-2 flex-wrap">
                {data.badges.map((badge) => (
                  <Badge
                    key={badge.id}
                    isClickable={true}
                    badgeName={badge.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
});

export default Skills;
