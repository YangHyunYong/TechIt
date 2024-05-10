import { FC } from "react";

interface ButtonProps {
  name: string;
  result: string;
  setResult: (value: string) => void;
}

const Button: FC<ButtonProps> = ({ name, result, setResult }) => {
  const onClickButton = () => {
    if (result.length >= 13) return;

    if (result === "0") {
      setResult(name);
    } else {
      setResult(result + name);
    }
  };

  return (
    <button
      className="bg-gray-200 w-10 h-10 rounded-md flex justify-center items-center shadow-sm"
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
