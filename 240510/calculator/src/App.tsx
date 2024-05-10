import { FC } from "react";
import Calculator from "./components/Calculator";

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <Calculator></Calculator>
    </div>
  );
};
export default App;
