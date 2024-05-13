import { FC, useEffect, useState } from "react";
import Box from "./components/Box";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("timer");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("test");
  //   };
  // }, []);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-4 justify-center items-center">
      {isOpen && <Box />}
      <button className="p-2 bg-green-300" onClick={() => setIsOpen(!isOpen)}>
        내가 사라져볼게
      </button>
    </div>
  );
};

export default App;
