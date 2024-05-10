import { FC, useState } from "react";
import Result from "./Result";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";

const Calculator: FC = () => {
  const [result, setResult] = useState<string>("0");
  const [temp, setTemp] = useState("0");
  const [operator, setOperator] = useState("");

  return (
    <div className="flex flex-col">
      <div className="bg-gray-950 h-[45px] rounded-md">
        <div className="bg-gray-100 w-24 float-end rounded-sm m-2 p-1 font-bold text-xs text-right">
          made by yang
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md">
        <Result result={result}></Result>
        <div className=" grid grid-cols-4 gap-2">
          <ButtonNumber name="1" result={result} setResult={setResult} />
          <ButtonNumber name="2" result={result} setResult={setResult} />
          <ButtonNumber name="3" result={result} setResult={setResult} />
          <ButtonOperator
            name="+"
            result={result}
            setTemp={setTemp}
            setResult={setResult}
            setOperator={setOperator}
          />
          <ButtonNumber name="4" result={result} setResult={setResult} />
          <ButtonNumber name="5" result={result} setResult={setResult} />
          <ButtonNumber name="6" result={result} setResult={setResult} />
          <ButtonOperator
            name="-"
            result={result}
            setTemp={setTemp}
            setResult={setResult}
            setOperator={setOperator}
          />
          <ButtonNumber name="7" result={result} setResult={setResult} />
          <ButtonNumber name="8" result={result} setResult={setResult} />
          <ButtonNumber name="9" result={result} setResult={setResult} />
          <ButtonOperator
            name="*"
            result={result}
            setTemp={setTemp}
            setResult={setResult}
            setOperator={setOperator}
          />
          <ButtonEnter
            name="Enter"
            operator={operator}
            result={result}
            temp={temp}
            setResult={setResult}
            setTemp={setTemp}
          />
          <ButtonNumber name="0" result={result} setResult={setResult} />
          <ButtonDelete name="Del" result={result} setResult={setResult} />
          <ButtonOperator
            name="/"
            result={result}
            setTemp={setTemp}
            setResult={setResult}
            setOperator={setOperator}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
