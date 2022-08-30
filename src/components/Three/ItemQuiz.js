import React from "react";
import Line from "./Line";
import { quizData } from "../../data.js";

const ItemQuiz = ({ question, a1, a2, a3 }) => {
  const classNameA =
    "ring-1 h-[40px] w-[450px] flex items-center justify-start pl-3 rounded-lg hover:font-semibold ring-slate-300 hover:ring-2 cursor-pointer hover:bg-slate-100";
 
  return (
    <div>
      <div
        className=" bg-white h-[290px] w-[490px] rounded-md shadow-xl p-2 z-30 absolute left-0 right-0 mr-auto ml-auto
  top-0 bottom-0 mt-auto mb-auto"
      >
        
        <div className="flex justify-center items-center py-4">
          <h1 className="text-3xl font-extrabold">{question}</h1>
        </div>
        <ul className="flex flex-col items-center gap-y-4 mt-5">
          <li className={classNameA}>
            <p>{a1}</p>
          </li>
          <li className={classNameA}>
            <p>{a2}</p>
          </li>
          <li className={classNameA}>
            <p>{a3}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemQuiz;
