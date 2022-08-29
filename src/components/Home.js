import React from "react";
import { buttons } from "../data.js";
import mountain from "../assets/mountain.png";

const Home = () => {
  return (
    <div className="h-screen bg-sky-200 w-screen ">
      <img src={mountain} className=" absolute bottom-0 opacity-30 grayscale" />
      <div className=" absolute right-0 left-0 mr-auto ml-auto">
        <h1 className=" text-center py-20 text-5xl font-extrabold text-sky-700 z-10">
          Lessons
        </h1>
        <div className="flex justify-center items-center px-12  ">
          <div className="container lg:max-w-[600px] mx-auto flex ">
            <div className="grid grid-cols-2 lg:gap-y-12 gap-y-4 gap-x-0 lg:gap-x-12 mx-auto ">
              {buttons.map((item, index) => {
                const { name, href } = item;
                return (
                  <div
                    key={index}
                    className="h-[80px] w-[150px] lg:w-[250px] rounded-md bg-sky-100 flex justify-center cursor-pointer 
                    items-center shadow-md scale-[70%] lg:scale-100 hover:scale-95 hover:opacity-80 active:ring-8 active:scale-90 ring-sky-200"
                  >
                    <h1 className="text-3xl font-mono font-extrabold text-sky-700">
                      {name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="z-0">
        <img
        src={mountain}
        className=" object-cover -mt-[465px] opacity-40 w-screen z-0"
        />
    </div> */}
      </div>
    </div>
  );
};

export default Home;
