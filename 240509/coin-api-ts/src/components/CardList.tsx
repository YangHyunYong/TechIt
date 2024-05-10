import axios from "axios";
import Card from "./Card";
import { FC, useEffect, useState } from "react";

interface CoinProps {
  name: string;
  image: string;
  current_price: number;
  ath: number;
  ath_change_percentage: string;
  market_cap_rank: number;
}

const CardList: FC = () => {
  const [coin, setCoin] = useState<CoinProps[]>([]);

  const getCoins = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=10&page=1&sparkline=false",
      {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "",
        },
      }
    );

    setCoin(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
      {coin.map((v, i) => (
        <Card
          key={i}
          name={v.name}
          image={v.image}
          currentPrice={v.current_price}
          ath={v.ath}
          athChangePercentage={v.ath_change_percentage}
          marketCapRank={v.market_cap_rank}
        />
      ))}
    </ul>
  );
};

export default CardList;
