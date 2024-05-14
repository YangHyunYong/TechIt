import { FC } from "react";
import { useParams } from "react-router-dom";

const Detail: FC = () => {
  const { id } = useParams();
  return (
    <div className="bg-yellow-100 min-h-screen flex justify-center items-center">
      Coin Symbol : {id}
    </div>
  );
};

export default Detail;
