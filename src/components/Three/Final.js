import { ifElse } from "eth/core";
import React from "react";
import apeOne from "../../assets/gifOne.gif";
import { mistakes } from "../../data";

const Final = ({ errorCounter }) => {
  const resultErr = () => {
    if (errorCounter == 0) {
        return 0;
      }
      if (3 >= errorCounter > 0) {
        return 1;
      }
      if (errorCounter > 3) {
        if (errorCounter > 5) {
          return 3;
        }
        return 2;
      }
  };
console.log(resultErr())
  return (
    <div className="w-screen h-screen relative">
      <div
        className="h-[400px] w-[520px] bg-white rounded-lg absolute right-0 
      left-0 mr-auto ml-auto top-0 bottom-0 mb-auto mt-auto shadow-xl flex justify-center "
      >
        <div>
          <img
            className="object-cover w-[430px] h-[240px] mt-8 rounded-lg scale-110"
            src={mistakes[resultErr()].ape}
          />
          <div className=" text-center p-8">
            <h1 className={mistakes[resultErr()].className}>
              {errorCounter} mistakes!
            </h1>
            <h1 className="text-2xl mt-2 font-semibold">
              {mistakes[resultErr()].text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
