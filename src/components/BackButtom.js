import React from "react";
import BackIcon from "./BackIcon";
import { Link } from "react-router-dom";

const BackButtom = () => {
  return (
    <Link to={"/react-6-tools"}>
      <div className="opacity-10 hover:opacity-100 z-[9] transition duration-500 absolute p-3 rounded-md top-10 left-10 bg-pink-400 flex justify-center items-center">
        <BackIcon />
      </div>
    </Link>
  );
};

export default BackButtom;
