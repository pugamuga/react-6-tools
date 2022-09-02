import React, { useEffect } from "react";
import From from "./From";
import To from "./To";
import { useState } from "react";

const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const [rates, setRates] = useState({});

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result.toFixed(2));
    setToPrice(value);
  };
  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToPrice(result.toFixed(2));
    setFromPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center h-screen bg-indigo-300">
      <div className="bg-white rounded-xl w-[820px] h-[240px] mt-[100px] shadow-md">
        <div className="conteiner flex w-full h-full p-4 ">
          <From
          setFromPrice={setFromPrice}
            color={fromCurrency}
            onChangeCurrency={setFromCurrency}
            fromPrice={fromPrice}
            onChangeFromPrice={onChangeFromPrice}
          />
          <To
          setToPrice={setToPrice}
            color={toCurrency}
            onChangeCurrency={setToCurrency}
            toPrice={toPrice}
            onChangeToPrice={onChangeToPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
