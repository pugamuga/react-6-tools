import React, { useState } from "react";
import Line from "./Line";
import { quizData } from "../../data.js";
import ItemQuiz from "./ItemQuiz";
import apeJump from "../../assets/apeJump.png";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const [quizOne, setQuizOne] = useState(true);
  const [quizTwo, setQuizTwo] = useState(true);
  const [quizThree, setQuizThree] = useState(true);

  const [next, setNext] = useState(false);
  console.log(next);

  let width = 0;
  let newValueForLine = 33;
  return (
    <div className=" bg-violet-500 h-screen w-screen">
      <div className="">
        {quizData.map((item, index) => {
          const [question, a1, a2, a3, correct] = item;
          return (
            <AnimatePresence>
              <motion.div
              key={index}
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                exit={{ y: [0, 100], opacity: [1, 0] }}
                className=" relative  top-[400px] z-[2]"
              >
                <ItemQuiz
                  next={next}
                  setNext={setNext}
                  correct={correct}
                  question={question}
                  a1={a1}
                  a2={a2}
                  a3={a3}
                />
              </motion.div>
            </AnimatePresence>
          );
        })}
        {/* <AnimatePresence>
          <motion.div
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ y: [0, 100], opacity: [1, 0] }}
            className=" relative  top-[400px] z-[2]"
          >
            <ItemQuiz
              next={next}
              setNext={setNext}
              correct={1}
              question={quizData[0].question}
              a1={quizData[0].a1}
              a2={quizData[0].a2}
              a3={quizData[0].a3}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            animate={{ y: [100, 0], opacity: [0, 1], scale: [0.95, 0.95] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            className=" relative  top-[420px]  z-[1] "
          >
            <ItemQuiz
              next={next}
              setNext={setNext}
              correct={1}
              question={quizData[1].question}
              a1={quizData[1].a1}
              a2={quizData[1].a2}
              a3={quizData[1].a3}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            animate={{ y: [100, 0], opacity: [0, 1], scale: [0.9, 0.9] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            className=" relative  top-[440px]  z-[0] "
          >
            <ItemQuiz
              next={next}
              setNext={setNext}
              correct={1}
              question={quizData[2].question}
              a1={quizData[2].a1}
              a2={quizData[2].a2}
              a3={quizData[2].a3}
            />
          </motion.div>
        </AnimatePresence> */}
      </div>
      <motion.div
        animate={{ y: [-20, 0], opacity: [0, 1], scale: [0.75, 0.75] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className=" relative top-[220px]  z-[3]"
      >
        <Line line={width} newPercentState={newValueForLine} />
      </motion.div>
    </div>
  );
};
export default Quiz;
