import React, { useEffect, useState } from "react";
import WindowForTwo from "./WindowForTwo";
import { motion, AnimatePresence } from "framer-motion";


const TwoModalWindow = () => {
  const [open, setOpen] = useState(false);
  const click = () => {
    setOpen(true);
  };

  useEffect(()=>{
    document.addEventListener("mousedown", ()=>{
      setOpen(false)
    })
  },[])

  return (
    <div className="h-screen bg-sky-200 flex justify-center items-center">
      <button
        onClick={click}
        className="bg-sky-500 w-[200px] h-[50px] rounded-full text-1xl text-white font-bold
      hover:bg-sky-400 active:scale-[90%] transition-all duration-200 
      hover:ring-2 active:ring-8  ring-white"
      >
        ✨Open Window
      </button>
      {open ? (
        <AnimatePresence>
          <WindowForTwo state={setOpen}/>
        </AnimatePresence>
      ) : null}
    </div>
  );
};

export default TwoModalWindow;
