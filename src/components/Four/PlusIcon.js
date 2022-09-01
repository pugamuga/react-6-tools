import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PlusIcon = ({ onClickInviteId, id }) => {
  return (
    <motion.svg
      onClick={() => onClickInviteId(id)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-10 h-10 stroke-[2px] mr-[2px] stroke-slate-400 hover:stroke-[3px] transition-all duration-300 hover:stroke-green-500"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </motion.svg>
  );      
};

export default PlusIcon;
