import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  required: boolean;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

const Input = (props: InputProps) => {
  const { required, name, placeholder, type } = props;
  return (
    <input
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 
        dark:bg-black
        dark:border-gray-600 
        dark:placeholder-gray-400 
        dark:text-white 
        dark:focus:ring-blue-500 
        dark:focus:border-blue-500"
    />
  );
};

export default Input;
