import { FC } from "react";
import Button from "./Button";

interface ButtonEnterProps {
  name: string;
  operator: string;
  result: string;
  temp: string;
  setResult: (value: string) => void;
  setTemp: (value: string) => void;
}

const ButtonEnter: FC<ButtonEnterProps> = ({
  name,
  operator,
  result,
  temp,
  setResult,
  setTemp,
}) => {
  const onClickButton = () => {
    switch (operator) {
      case "+":
        setTemp((+temp + +result).toString());
        setResult((+temp + +result).toString());
        console.log(temp + " " + result);
        break;
      case "-":
        setTemp((+temp - +result).toString());
        setResult((+temp - +result).toString());
        break;
      case "*":
        setTemp((+temp * +result).toString());
        setResult((+temp * +result).toString());
        break;
      case "/":
        setTemp((+temp / +result).toString());
        setResult((+temp / +result).toString());
        break;
      default:
        alert("잘못된 연산자입니다.");
    }
  };

  return <Button name={name} onClickButton={onClickButton}></Button>;
};

export default ButtonEnter;
