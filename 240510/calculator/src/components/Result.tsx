import { FC } from "react";

interface ResultProps {
  result: string;
}

const Result: FC<ResultProps> = ({ result }) => {
  return (
    <div className="bg-gray-50 p-2 rounded-md shadow-sm mb-2">{result}</div>
  );
};

export default Result;
