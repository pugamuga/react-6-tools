import React, { useState } from "react";
import Line from "./Line";
import { quizData } from "../../data.js";
import ItemQuiz from "./ItemQuiz";
import apeJump from "../../assets/apeJump.png";
import { motion, AnimatePresence } from "framer-motion";
import Final from "./Final";
import ReloadBtn from "./ReloadBtn";

const Quiz = () => {
  const [quizOne, setQuizOne] = useState(true);
  const [quizTwo, setQuizTwo] = useState(true);
  const [quizThree, setQuizThree] = useState(true);

  const [errorCounter, setErrorCounter] = useState(0);
  console.log(errorCounter);

  const [next, setNext] = useState(false);

  const [length, setLength] = useState(1);

  const initialArraySize = quizData.length;

  return (
    <div
      className={` ${
        quizData.length > 0 ? "bg-violet-500" : "bg-indigo-900"
      } h-screen w-screen transition-all duration-500 `}
    >
      {quizData.length > 0 ? null : (
        <motion.div
          animate={{ scale: [0, 1,0.9], opacity: [0, 1] }}
          transition={{ duration: 0.6, type: "spring", delay: 0.7 }}
          className=" absolute z-50 "
        >
          <Final errorCounter={errorCounter}/>
        </motion.div>
      )}
      {!quizData.length > 0 ? null : (
        <motion.div
          animate={{ scale: [0, 1,0.9], opacity: [0, 1] }}
          transition={{ duration: 0.6, type: "spring", delay: 0.7 }}
          className=" absolute z-40 "
        >
          <ReloadBtn/>
        </motion.div>)}
      <div className="">
        <AnimatePresence>
          {quizData.map((item, index) => {
            const { question, a1, a2, a3, correct } = item;
            return (
              <motion.div
                key={index}
                animate={{
                  y: [100, 0],
                  opacity: [0, 1],
                  scale: [1 - 0.05 * index, 1 - 0.05 * index],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0 + index * 0.3,
                }}
                exit={{ y: [0, 100], opacity: [1, 0] }}
                className={`relative  top-[${400 + 20 * index}px] z-[${
                  3 - index
                }]`}
              >
                <ItemQuiz
                  errorCounter={errorCounter}
                  setErrorCounter={setErrorCounter}
                  length={length}
                  setLength={setLength}
                  next={next}
                  setNext={setNext}
                  correct={correct}
                  question={question}
                  a1={a1}
                  a2={a2}
                  a3={a3}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <motion.div
        animate={
          quizData.length > 0
            ? { y: [-20, 0], opacity: [0, 1], scale: [0.75, 0.75] }
            : { y: [0, -20], opacity: [1, 0], scale: [0.75, 0.75] }
        }
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        exit={{ opacity: [1, 0], y: [0, -20] }}
        className={`relative top-[220px]  z-[3]`}
      >
        <Line length={length} />
      </motion.div>
    </div>
  );
};
export default Quiz;
