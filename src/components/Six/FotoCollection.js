import React, { useEffect, useState } from "react";
import Search from "../Four/Search.js";
import PhotoCard from "./PhotoCard.js";
import { photoData, categories } from "./dataSix.js";

const FotoCollection = () => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [input, setInput] = useState("");

  const pagesAmount = Math.ceil(photoData.length / 3);

  const fake = [
    ...Array(
      categoryId == 0
        ? Math.ceil(photoData.length / 3)
        : Math.ceil(photoData.length / 3) - 2
    ),
  ];

  return (
    <div className="bg-violet-100 h-screen w-full flex justify-center items-center">
      <div className="lg:container w-[90%] lg:w-3/4 flex flex-col my-12 ">
        <h1 className="text-4xl py-4">My photo collection</h1>
        <div className="lg:flex lg:justify-between py-4 lg:items-center ">
          <div
            className="flex gap-x-2 scale-75 lg:scale-100 mr-[290px] lg:mr-0 "
            id="buttons "
          >
            {categories.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setCategoryId(index);
                    setPage(1);
                  }}
                  key={index}
                  className={`${
                    categoryId == index ? "bg-black text-white" : "bg-white"
                  } py-2  transition-all duration-300 px-4 rounded-md`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-full lg:mt-0 mt-4 max-w-[315px]  lg:max-w-[400px] p-2 mx-2 rounded-md px-4 outline-none"
            placeholder={`Search by name...`}
            type="text"
          />
        </div>
        {/* {--------------------------------------} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 my-12 mx-auto gap-x-24">
          {photoData
            .filter((item) => {
              return item.name.toLowerCase().includes(input.toLowerCase());
            })
            .filter((item, index) => {
              return item.category == categoryId || categoryId == 0;
            })
            .filter((item, index) => {
              const page1 = index < pagesAmount;
              const page2 = index >= pagesAmount && index < pagesAmount * 2;
              const page3 = index > pagesAmount * 2 - 1;

              if (page == 1) {
                return page1;
              } else if (page == 2) {
                return page2;
              } else if (page == 3) {
                return page3;
              }
            })
            .map((item, index) => {
              return (
                <PhotoCard
                  key={index}
                  name={item.name}
                  photos={item.photos}
                  category={item.category}
                />
              );
            })}
        </div>
        {/* {--------------------------------------} */}
        <div className="flex justify-start items-center gap-x-2" id="pages">
          {fake.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setPage(index + 1);
                }}
                key={index}
                className={`w-12 h-12 transition-all duration-200 bg-white ${
                  page == index + 1 ? "bg-black text-white" : "bg-white"
                } rounded-md`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FotoCollection;
