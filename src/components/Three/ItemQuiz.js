import React, { useState } from "react";
import Line from "./Line";
import { quizData } from "../../data.js";

const ItemQuiz = ({ question, a1, a2, a3, correct }) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [oneFalse, setOneFalse] = useState(false);
  const [twoFalse, setTwoFalse] = useState(false);
  const [threeFalse, setThreeFalse] = useState(false);
  const classNameA = `ring-1 h-[40px] w-[450px] flex items-center justify-start select-none cursor-pointer pl-3 rounded-lg hover:font-semibold ring-slate-300 hover:ring-2 `;
  return (
    <div>
      <div
        className=" bg-white h-[290px] w-[490px] rounded-md shadow-xl p-2 z-30 absolute left-0 right-0 mr-auto ml-auto
  top-0 bottom-0 mt-auto mb-auto"
      >
        <div className="flex justify-between mx-8 items-center py-4">
          <h1 className="text-3xl font-extrabold">{question}</h1>
          <button
            className=" active:grayscale-0 hover:grayscale-0 grayscale bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3  shadow-md hover:shadow-lg active:shadow-none
           hover:scale-110 active:scale-90 rounded-lg text-white font-semibold text-sm transition-all duration-100 hover:opacity-80"
          >
            Next
          </button>
        </div>
        <ul className={`flex flex-col items-center gap-y-4 mt-5`}>
          <li
            className={`${classNameA}${one ? "bg-green-500" : null}${
              oneFalse ? "bg-rose-500" : null
            }`}
            onClick={() => {
              if (correct == 1) {
                return setOne(true);
              } else {
                setOneFalse(true);
              }
            }}
          >
            <p>{a1}</p>
          </li>
          <li
            className={`${classNameA}${two ? "bg-green-500" : null}${
              twoFalse ? "bg-rose-500" : null
            }`}
            onClick={() => {
              if (correct == 2) {
                return setTwo(true);
              } else {
                setTwoFalse(true);
              }
            }}
          >
            <p>{a2}</p>
          </li>
          <li
            className={`${classNameA}${three ? "bg-green-500" : null}${
              threeFalse ? "bg-rose-500" : null
            }`}
            onClick={() => {
              if (correct == 3) {
                return setThree(true);
              } else {
                setThreeFalse(true);
              }
            }}
          >
            <p>{a3}</p>
          </li>
        </ul>
        {console.log(one)}
        {console.log(two)}
        {console.log(three)}
      </div>
    </div>
  );
};

export default ItemQuiz;
