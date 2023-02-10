import React from "react";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="w-full min-h-[500px]">
      <div className="w-full bg-gray-01 bg-gray-1 p-6 rounded-lg">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
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
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
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
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <textarea
            id=""
            // cols="30"
            // rows="10"
            placeholder="textfield"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 
              dark:bg-black
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
