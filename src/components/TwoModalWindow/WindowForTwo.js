import React from "react";
import apeGif from "../../assets/apeGif.gif";

const WindowForTwo = () => {
  return (
    <div className="absolute h-[400px] w-[600px] bg-white rounded-xl shadow-2xl flex justify-center items-center">
      <img src={apeGif} className="rounded-xl scale-125" />
    </div>
  );
};

export default WindowForTwo;
