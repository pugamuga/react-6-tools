import React, { useState } from "react";

const OneCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
    }
  };
  return (
    <div className="h-screen bg-sky-900 flex justify-center items-center">
      <div className="container max-w-[450px] text-center">
        <p className="text-5xl font-serif font-bold text-white mb-8">Counter</p>
        <div className="flex justify-between items-center relative">
          <button
            onClick={decrease}
            className="z-10 bg-pink-600 font-mono text-white py-2 px-12 shadow-xl text-3xl rounded-md
           h-[80px] w-[150px] hover:bg-opacity-70 active:bg-pink-500 active:w-[120px] active:h-[60px] transition-all"
          >
            -
          </button>
          <h1 className="text-7xl font-mono font-bold text-white mx-8 z-0 absolute left-0 right-0 ml-auto mr-auto">
            {counter}
          </h1>
          <button
            onClick={increase}
            className="z-10 bg-emerald-600 font-mono text-white py-2 px-12 shadow-xl text-3xl rounded-md 
          w-[150px] h-[80px] hover:bg-opacity-70 active:bg-emerald-500 active:w-[120px] active:h-[60px] transition-all"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneCounter;
