import Home from "./components/Home";
import OneCounter from "./components/OneCounter";
import TwoModalWindow from "./components/TwoModalWindow/TwoModalWindow";
import Quiz from "./components/Three/Quiz";
import { Route, Routes } from "react-router-dom";
import BackButtom from "./components/BackButtom";
import { useState } from "react";
import Zindex from "./components/Three/Zindex";
import MainFour from "./components/Four/MainFour";
import Exchange from "./components/Five/Exchange";
import FotoCollection from "./components/Six/FotoCollection";

function App() {
  return (
    <div>
      <BackButtom />
      <Routes>
        <Route path="/react-6-tools" element={<Home />} />
        <Route path="/1lesson" element={<OneCounter />} />
        <Route path="/2lesson" element={<TwoModalWindow />} />
        <Route path="/3lesson" element={<Quiz />} />
        <Route path="/4lesson" element={<MainFour />} />
        <Route path="/5lesson" element={<Exchange/>} />
        <Route path="/6lesson" element={<FotoCollection/>} />
      </Routes>
      {/* <Zindex/> */}
    </div>
  );
}

export default App;
