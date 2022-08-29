import Home from "./components/Home";
import OneCounter from "./components/OneCounter";
import TwoModalWindow from "./components/TwoModalWindow/TwoModalWindow";
import { Route, Routes } from "react-router-dom";
import BackButtom from "./components/BackButtom";
import { useState } from "react";

function App() {
  const [back, setBack] = useState(false);
  return (
    <div>
      {back && <BackButtom />}
      <Routes>
        <Route path="/" element={<Home state={setBack} />} />
        <Route path="/1lesson" element={<OneCounter state={setBack} />} />
        <Route path="/2lesson" element={<TwoModalWindow state={setBack} />} />
        <Route path="/3lesson" element={<TwoModalWindow state={setBack} />} />
        <Route path="/4lesson" element={<TwoModalWindow state={setBack} />} />
        <Route path="/5lesson" element={<TwoModalWindow state={setBack} />} />
        <Route path="/6lesson" element={<TwoModalWindow state={setBack} />} />
      </Routes>
    </div>
  );
}

export default App;
