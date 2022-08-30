import React, { useState } from "react";

const Line = ({ line, newPercentState }) => {
  const [color, setColor] = useState(false);
  const [percent, setPercent] = useState(line);
  const newLine = async () => {
    setPercent(newPercentState);
    setColor(true);
    await setTimeout(() => {
      setColor(false);
    }, 300);
  };
  return (
    <div className="flex h-full justify-center items-start">
      <div
        className={` transition-colors ${color ? "bg-green-400" : "bg-white"} ${
          color ? "h-[20px]" : "h-[20px]"
        } w-[640px] rounded-full  flex justify-start items-center px-1 transition-all duration-300`}
      >
        <div
          className={` bg-gradient-to-r from-green-400 to-cyan-500 h-[12px] rounded-full 
          flex justify-end items-center transition-all duration-300 ease-out z-10`}
          style={{ width: `${percent}%` }}
        >
          <div
            className={`${
              color ? "visible" : "invisible"
            } bg-cyan-500 h-[16px] w-[16px] rounded-full ring-2 ring-slate-300 z-0`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Line;
