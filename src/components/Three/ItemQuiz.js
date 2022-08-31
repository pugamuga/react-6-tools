import React, { useState } from "react";
import Line from "./Line";
import { quizData } from "../../data.js";
import { motion } from "framer-motion";

const ItemQuiz = ({
  question,
  a1,
  a2,
  a3,
  correct,
  next,
  setNext,
  length,
  setLength,
  errorCounter,
  setErrorCounter,
}) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [oneFalse, setOneFalse] = useState(false);
  const [twoFalse, setTwoFalse] = useState(false);
  const [threeFalse, setThreeFalse] = useState(false);

  const [btnVisible, setBtnVisible] = useState(false);

  const [executedOne, setExecutedOne] = useState(true);
  const [executedTwo, setExecutedTwo] = useState(true);
  const [executedThree, setExecutedThree] = useState(true);

  const classNameA = `ring-1 h-[40px] w-[450px] flex items-center justify-start select-none cursor-pointer pl-3 rounded-lg hover:font-semibold ring-slate-300 hover:ring-2 `;
  return (
    <div>
      <div
        className=" bg-white h-[290px] w-[490px] rounded-md shadow-xl p-2 z-30 absolute left-0 right-0 mr-auto ml-auto
  top-0 bottom-0 mt-auto mb-auto"
      >
        <div className="flex justify-between mx-8 items-center py-4">
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl font-extrabold"
          >
            {question}
          </motion.h1>
          {btnVisible ? (
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <button
                onClick={() => {
                  setLength(Math.round(length + (100 / 3)));
                  quizData.shift();

                  setExecutedOne(true);
                  setExecutedTwo(true);
                  setExecutedThree(true);

                  setOne(false);
                  setTwo(false);
                  setThree(false);
                  setOneFalse(false);
                  setTwoFalse(false);
                  setThreeFalse(false);
                  setBtnVisible(false);

                }}
                className=" active:grayscale-0 hover:grayscale-0 grayscale bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-[10px]  shadow-md hover:shadow-lg active:shadow-none
           hover:scale-110 active:scale-90 rounded-lg text-white font-semibold text-xs transition-all duration-100 hover:opacity-80"
              >
                Next
              </button>
            </motion.div>
          ) : null}
        </div>
        <motion.ul
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`flex flex-col items-center gap-y-4 mt-5`}
        >
          <li
            className={
              one
                ? classNameA + (one ? "bg-green-300" : null)
                : classNameA + (oneFalse ? "bg-rose-300" : null)
            }
            onClick={() => {
              if (correct == 1) {
                setBtnVisible(true);
                setExecutedOne(false);
                setExecutedTwo(false);
                setExecutedThree(false);
                return setOne(true);
              } else {
                setOneFalse(true);

                const counterEx = () => {
                  if (executedOne) {
                    setErrorCounter(errorCounter + 1);
                    setExecutedOne(false);
                  }
                };
                return counterEx();
              }
            }}
          >
            <p>{a1}</p>
          </li>
          <li
            className={
              two
                ? classNameA + (two ? "bg-green-300" : null)
                : classNameA + (twoFalse ? "bg-rose-300" : null)
            }
            onClick={() => {
              if (correct == 2) {
                setBtnVisible(true);
                setExecutedOne(false);
                setExecutedTwo(false);
                setExecutedThree(false);
                return setTwo(true);
              } else {
                setTwoFalse(true);
                const counterEx = () => {
                  if (executedTwo) {
                    setErrorCounter(errorCounter + 1);
                    setExecutedTwo(false);
                  }
                };
                return counterEx();
              }
            }}
          >
            <p>{a2}</p>
          </li>
          <li
            className={
              three
                ? classNameA + (three ? "bg-green-300" : null)
                : classNameA + (threeFalse ? "bg-rose-300" : null)
            }
            onClick={() => {
              if (correct == 3) {
                setBtnVisible(true);
                setExecutedOne(false);
                setExecutedTwo(false);
                setExecutedThree(false);
                return setThree(true);
              } else {
                setThreeFalse(true);
                const counterEx = () => {
                  if (executedThree) {
                    setErrorCounter(errorCounter + 1);
                    setExecutedThree(false);
                  }
                };
                return counterEx();
              }
            }}
          >
            <p>{a3}</p>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default ItemQuiz;
