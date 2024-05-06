"use client";
// symbols should not be entered first
import React, { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState("");

  const digits = [
    ["AC", "CLEAR",],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["00","0", "."],
  ];

  const symbols = ["+", "-", "/", "*", "="];

  const handleButtonClick = (value)=>{
    if (value === "AC"){
      setNum("")
    }else if (value === "CLEAR"){
      setNum(num.slice(0,-1))// (-1) ==> {length of the number -1} 
    }
    else{
      setNum(num + value)
    }
  }

  const generateDigits = () => {
    return digits.map((item) => {
      return (
        <div className="flex justify-center">
          {item.map((val) => {
            return (
              <div
                onClick={() => handleButtonClick(val)}
                className=" w-20 h-13 bg-gray-700 justify-center py-2 font-bold text-white text-center rounded-full mx-2 my-2 shadow-large hover:bg-sky-300 hover:text-black"
              >
                {val}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const handleSymbolChange = (symbol) => {
    const last = num[num.length - 1]
    
    if (symbol === "=") {
      const output = eval(num);
      setNum(output);
    }else if(symbols.includes(last)){

      setNum(num.slice(0,-1) + symbol)
    } 
    else {
      setNum(num + symbol);
    }
  };

  const action = () => {
    return symbols.map((item) => {
      return (
        <div
          onClick={() => handleSymbolChange(item)}
          className="w-16 h-16 bg-orange-700 text-3xl text-white flex items-center justify-center rounded-full mx-2 my-2 hover:bg-sky-300 hover:text-black font-bold"
        >
          {item}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0 bg-sky-100">
      <div className=" w-full h-auto bg-sky-500 rounded-lg items-center justify-center shadow-large dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-24 text-right bg-sky-600 shadow-large font-semibold p-4 m-4  rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          {num}
        </div>
        <div className="flex px-5">
        <div className=" flex-col mt-6 space-y-4 px-2">{generateDigits()}</div>
        <div className=" flex-col justify-center items-center p-4">
          {action()}
        </div>
        </div>
        
      </div>
    </div>
  );
};
export default Calculator;
