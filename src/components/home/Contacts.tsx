import React from "react";
import { JaviContactLogo } from "../../assets";
import { Card } from "../../components";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="w-full min-h-[500p]">
      <Card style="py-24 px-16 flex flex-col gap-10">
        <img src={JaviContactLogo} className="w-[74px] h-[74px]" alt="" />
        <h3 className="font-medium">Let's Keep in touch</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 
              dark:bg-black
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 
              dark:bg-black
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
            placeholder="Email"
          />
          <textarea
            placeholder="Placeholder"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 
              dark:bg-black
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-500
              h-[100px]"
          ></textarea>
        </div>
        <button
          type="button"
          className="uppercase bg-primary py-2.5 rounded-lg text-[14px] hover:"
        >
          submit
        </button>
      </Card>
      {/* <div className="w-full bg-gray-04/5 bg-gray-1 px-16 py-28 rounded-lg gap-10 flex flex-col backdrop-blur-sm">
    

      </div> */}
    </div>
  );
};

export default Contacts;
