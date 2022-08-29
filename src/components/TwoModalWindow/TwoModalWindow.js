import React from "react";
import WindowForTwo from "./WindowForTwo";

const TwoModalWindow = () => {
  return (
    <div className="h-screen bg-sky-200 flex justify-center items-center">
      <button
        className="bg-sky-500 w-[200px] h-[50px] rounded-full text-1xl text-white font-bold
      hover:bg-sky-400 active:scale-[90%] transition-all duration-200 
      hover:ring-2 active:ring-8  ring-white"
      >
        ✨Open Window
      </button>
      <WindowForTwo/>
    </div>
  );
};

export default TwoModalWindow;
