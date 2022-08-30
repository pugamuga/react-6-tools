import React, { useState } from "react";
import Line from "./Line";
import { quizData } from "../../data.js";
import ItemQuiz from "./ItemQuiz";
import apeJump from "../../assets/apeJump.png";
import { motion } from "framer-motion";

const Quiz = () => {
  let width = 0;
  let newValueForLine = 33;
  return (
    <div className=" bg-violet-500 h-screen w-screen">
      <div className="">
        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" relative  top-[400px] z-20"
        >
          <ItemQuiz
            correct={2}
            question={quizData[0].question}
            a1={quizData[0].a1}
            a2={quizData[0].a2}
            a3={quizData[0].a3}
          />
        </motion.div>
        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1], scale: [0.95, 0.95] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className=" relative  top-[420px]  z-10 "
        >
          <ItemQuiz
            correct={1}
            question={quizData[1].question}
            a1={quizData[1].a1}
            a2={quizData[1].a2}
            a3={quizData[1].a3}
          />
        </motion.div>

        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1], scale: [0.9, 0.9] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          className=" relative  top-[440px]  z-0 "
        >
          <ItemQuiz
            correct={1}
            question={quizData[2].question}
            a1={quizData[2].a1}
            a2={quizData[2].a2}
            a3={quizData[2].a3}
          />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [-20, 0], opacity: [0, 1], scale: [0.75, 0.75] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className=" relative top-[220px]  z-30"
      >
        <Line line={width} newPercentState={newValueForLine} />
      </motion.div>
    </div>
  );
};
export default Quiz;
