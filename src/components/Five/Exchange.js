import React from "react";
import From from "./From";
import To from "./To";

const Exchange = () => {
  return (
    <div className="flex justify-center h-screen bg-orange-200">
      <div className="bg-white rounded-xl w-[800px] h-[300px] mt-[100px] shadow-md">
        <div className="conteiner flex w-full h-full p-6">
          <From />
          <To />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
