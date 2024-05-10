import { FC } from "react";
import Button from "./Button";

interface ButtonOperatorProps {
  name: string;
  result: string;
  setTemp: (value: string) => void;
  setResult: (value: string) => void;
  setOperator: (value: string) => void;
}

const ButtonOperator: FC<ButtonOperatorProps> = ({
  name,
  result,
  setTemp,
  setResult,
  setOperator,
}) => {
  const onClickButton = () => {
    setTemp(result);
    setResult("0");
    setOperator(name);
  };
  return <Button name={name} onClickButton={onClickButton}></Button>;
};

export default ButtonOperator;
