import { Link } from "react-router-dom";
import RubberAnimation from "./RubberAnimation";

type Props = {
  text: string;
  path?: string;
};

const BounceText = (props: Props) => {
  const { text, path } = props;
  const textSplit = text.split("");

  return (
    <>
      {path ? (
        <Link to={path ? path : ""}>
          {textSplit.map((letter, index) => {
            return (
              <RubberAnimation key={index}>
                {letter === " " ? "\u00A0" : letter}
              </RubberAnimation>
            );
          })}
        </Link>
      ) : (
        textSplit.map((letter, index) => {
          return (
            <RubberAnimation key={index}>
              {letter === " " ? "\u00A0" : letter}
            </RubberAnimation>
          );
        })
      )}
    </>
  );
};

export default BounceText;
