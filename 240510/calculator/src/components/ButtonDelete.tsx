import { FC } from "react";
import Button from "./Button";

interface ButtonDeleteProps {
  name: string;
  result: string;
  setResult: (value: string) => void;
}

const ButtonDelete: FC<ButtonDeleteProps> = ({ name, result, setResult }) => {
  const onClickButton = () => {
    if (result.length === 1) setResult("0");
    else setResult(result.substring(0, result.length - 1));
    console.log(typeof result);
  };

  return <Button name={name} onClickButton={onClickButton}></Button>;
};

export default ButtonDelete;
