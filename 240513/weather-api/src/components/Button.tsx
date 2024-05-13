import { FC } from "react";

interface ButtonProps {
  name: string;
  isMoreButton?: boolean;
}

const Button: FC<ButtonProps> = ({ name, isMoreButton = false }) => {
  return (
    <button
      className={`button-style ${isMoreButton && "inline-block md:hidden"}`}
    >
      {name}
    </button>
  );
};

export default Button;
