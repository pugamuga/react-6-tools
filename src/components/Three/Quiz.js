import React from "react";
import Line from "./Line";
import { quizData } from "../../data.js";
import ItemQuiz from "./ItemQuiz";

const Quiz = () => {
  let width = 50;
  let newValueForLine = 33;
  return (
    <div className=" bg-violet-500 h-screen ">
      <div className="static">
        <div className="  z-20">
          <ItemQuiz
            question={quizData[0].question}
            a1={quizData[0].a1}
            a2={quizData[0].a2}
            a3={quizData[0].a3}
          />
        </div>
        <div className="  z-30">
          <ItemQuiz
            question={quizData[1].question}
            a1={quizData[1].a1}
            a2={quizData[1].a2}
            a3={quizData[1].a3}
          />
        </div>
      </div>
      <div className=" absolute right-0 left-0 mr-auto ml-auto top-[60px] max-w-[400px] scale-75">
        <Line line={width} newPercentState={newValueForLine} />
      </div>
    </div>
  );
};
export default Quiz;
