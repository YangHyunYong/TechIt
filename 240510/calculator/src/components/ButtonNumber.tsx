import { FC } from "react";
import Button from "./Button";

interface ButtonNumberProps {
  name: string;
  result: string;
  setResult: (value: string) => void;
}

const ButtonNumber: FC<ButtonNumberProps> = ({ name, result, setResult }) => {
  const onClickButton = () => {
    if (result.length >= 17) return;

    if (result === "0") {
      setResult(name);
    } else {
      setResult(result + name);
    }
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonNumber;
