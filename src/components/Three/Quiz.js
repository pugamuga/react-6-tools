import React from "react";
import Line from "./Line";
import { quizData } from "../../data.js";

const Quiz = () => {
  let width = 50;
  let newValueForLine = 33;
  return (
    <div className=" bg-violet-500 flex h-screen justify-center items-center">
      <div className=" bg-white h-[290px] w-[480px] rounded-md shadow-xl p-2">
        <div className="scale-75">
          <Line line={width} newPercentState={newValueForLine} />
        </div>
        <div className="flex justify-center items-center py-4">
          <h1 className="text-3xl font-extrabold">{quizData[0].question}</h1>
        </div>
        <ul className="flex flex-col items-center gap-y-4 mt-5">
          {quizData.map((item, index) => {
            return
            <div key={index}>
              <li className="ring-1 h-[40px] w-[450px] flex items-center justify-start pl-3 rounded-lg ring-slate-300">
                <p>{item[0].a1}</p>
              </li>
            </div>;
          })}
          <li className="ring-1 h-[40px] w-[450px] flex items-center justify-start pl-3 rounded-lg ring-slate-300">
            <p>{quizData[0].a2}</p>
          </li>
          <li className="ring-1 h-[40px] w-[450px] flex items-center justify-start pl-3 rounded-lg ring-slate-300">
            <p>{quizData[0].a3}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Quiz;
