import { FC, useEffect, useState } from "react";

const Box: FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("mount");
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(`Count: ${count}`);

    return () => {
      console.log("useEffect return");
    };
  }, [count]);

  return (
    <div className="bg-blue-300 w-96 h-96 flex justify-center items-center gap-2">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Box;
