import apeOne from "../src/assets/gifOne.gif";
import apeTwo from "../src/assets/gifTwo.gif"
import apeThree from "../src/assets/gifThree.gif";
import apeFour from "../src/assets/gifFour.webp";

export const buttons = [
  {
    name: "1",
    href: "/1lesson",
  },
  {
    name: "2",
    href: "/2lesson",
  },
  {
    name: "3",
    href: "/3lesson",
  },
  {
    name: "4",
    href: "/4lesson",
  },
  {
    name: "5",
    href: "/5lesson",
  },
  {
    name: "6",
    href: "/6lesson",
  },
];

export const quizData = [
  {
    question: "MEV it's ...",
    a1: "manki elegant victory",
    a2: "miners extractable value",
    a3: "mercedes environment vision",
    correct: 1,
  },
  {
    question: "Vitalik Buterin is ...",
    a1: "ethereum founder",
    a2: "greatest programmer",
    a3: "chert galimii",
    correct: 3,
  },
  {
    question: "Chingon is ...",
    a1: "Stupid",
    a2: "Genius",
    a3: "50/50",
    correct: 3,
  },
];

export const mistakes = [
  {
    count: 0,
    text: "You gigamanki!😎",
    className: "text-3xl font-extrabold text-green-400",
    ape: apeFour,
  },
  {
    count: 1 - 3,
    text: "You smart enough👍",
    className: "text-3xl font-extrabold ",
    ape: apeThree,
  },
  {
    count: 4 - 5,
    text: "You stupid manki🤕",
    className: "text-3xl font-extrabold ",
    ape: apeTwo,
  },
  {
    count: 6,
    text: "💩Shit,💩u💩are💩shit💩",
    className: "text-3xl font-extrabold text-rose-700",
    ape: apeOne,
  },
];
