import React from "react";
import defaultIMG from "../../assets/gifOne.gif";
import PlusIcon from "./PlusIcon";

const Account = () => {
  return (
    <div className=" flex justify-between items-center">
      <img
        src={defaultIMG}
        className="object-cover w-12 h-12 rounded-full ring-1 transition-all duration-200 hover:ring-orange-500 hover:ring-2 ring-orange-300 ring-offset-1"
      />
      <div className="flex flex-col w-full px-4">
        <h1 className="">Name Surname</h1>
        <p className="text-xs text-slate-400 font-light">email address</p>
      </div>
      <PlusIcon />
    </div>
  );
};

export default Account;
