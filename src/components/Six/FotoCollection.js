import React from "react";
import Search from "../Four/Search.js";

const FotoCollection = () => {
  return (
    <div className="bg-violet-100 h-screen w-screen flex justify-center items-center">
      <div className="container w-3/4 h-[90%] flex flex-col">
        <h1 className="text-4xl py-4">My photo collection</h1>
        <div className="flex justify-between py-4 items-center ">
          <div className="flex gap-x-2" id="buttons ">
            <button className="bg-white py-2 px-4 rounded-md">All</button>
            <button className="bg-white py-2 px-4 rounded-md">Mountain</button>
            <button className="bg-white py-2 px-4 rounded-md">Buildins</button>
            <button className="bg-white py-2 px-4 rounded-md">City</button>
            <button className="bg-white py-2 px-4 rounded-md">Sea</button>
          </div>
          <input
            className="w-full max-w-[400px] p-2 mx-2 rounded-md px-4 outline-none"
            placeholder={`Search by name...`}
            type="text"
          />
        </div>
        <div className="bg-white h-1/2 w-1/3 my-12 hover:shadow-xl hover:ring-2 ring-violet-200 rounded-md shadow-md min-w-[300px] p-4 flex flex-col gap-y-2">
          <div className="bg-slate-100 w-full h-full rounded-md" id="big"></div>
          <div
            className="  w-full h-full flex justify-between gap-x-2"
            id="small"
          >
            <div className="bg-slate-300 w-full rounded-md"></div>
            <div className="bg-slate-300 w-full rounded-md"></div>
            <div className="bg-slate-300 w-full rounded-md"></div>
          </div>
          <div id="name">
            <h1>Category</h1>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-2" id="pages">
          <button className="w-12 h-12 bg-white rounded-md">1</button>
          <button className="w-12 h-12 bg-white rounded-md">2</button>
          <button className="w-12 h-12 bg-white rounded-md">3</button>
        </div>
      </div>
    </div>
  );
};

export default FotoCollection;
