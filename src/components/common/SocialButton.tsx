import { Icon } from "@iconify/react";
import { BounceText } from "../animation";

type Props = {
  icon: string;
  title: string;
  url: string;
};

const SocialButton = (props: Props) => {
  const { icon, title, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-row gap-2 items-center hover:text-primary transition duration-150"
    >
      <Icon icon={icon} width="26" height="26" />
      <span>
        <BounceText text={title} />
      </span>
      <Icon icon="fa6-solid:arrow-up-right-from-square" />
    </a>
  );
};

export default SocialButton;
