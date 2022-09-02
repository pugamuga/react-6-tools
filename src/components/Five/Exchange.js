import React, { useEffect } from "react";
import From from "./From";
import To from "./To";
import { useState } from "react";

const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const [rates, setRates] = useState({});

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToPrice(result);
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency, fromPrice]);

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center h-screen bg-indigo-300">
      <div className="bg-white rounded-xl w-[800px] h-[240px] mt-[100px] shadow-md">
        <div className="conteiner flex w-full h-full p-4 ">
          <From
            color={fromCurrency}
            onChangeCurrency={setFromCurrency}
            value={fromPrice}
            onChangeFromPrice={onChangeFromPrice}
          />
          <To
            color={toCurrency}
            onChangeCurrency={setToCurrency}
            value={toPrice}
            onChangeToPrice={onChangeToPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
