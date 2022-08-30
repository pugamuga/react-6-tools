import React from "react";

const Zindex = () => {
  return (
    <div className="">
      <div className="bg-rose-500 h-12 w-12 relative rounded-full z-0"></div>
      <div className="bg-slate-500 h-12 w-12 relative rounded-full -mt-8"></div>
      <div className="bg-violet-500 h-12 w-12 relative rounded-full  -mt-8 z-10"></div>
      <div className="bg-green-500 h-12 w-12 relative rounded-full -mt-8 z-0"></div>
      <div className="bg-sky-500 h-12 w-12 relative rounded-full -mt-8"></div>
    </div>
  );
};

export default Zindex;
