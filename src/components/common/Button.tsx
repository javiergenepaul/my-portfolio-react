import React from "react";
import { ClipLoader, HashLoader, MoonLoader } from "react-spinners";

type Props = {
  form?: string;
  type?: "button" | "submit" | "reset";
  title: string;
  isLoading: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { form, type, onClick, title, isLoading } = props;
  return (
    <button
      form={form}
      type={type}
      disabled={isLoading}
      className={`bg-primary py-2.5 rounded-lg text-[14px] flex items-center justify-center gap-2 ${isLoading && "cursor-progress"}`}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <HashLoader
            color={"#FFF"}
            loading={isLoading}
            size={18}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          loading...
        </>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
