import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const WeatherIcon = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      console.log(response);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (!longitude) return;
    if (!latitude) return;
    getWeather();
  }, [longitude, latitude]);

  //   return <div>{weatherData && weatherData.name}</div>;
  if (!weatherData)
    return <div className="w-28 h-12 flex items-center">loading...</div>;

  return (
    <div className="text-xs flex items-center">
      <img
        className="w-12 h-12"
        alt="weather"
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <div className="w-16">
        <div className="font-semibold">{weatherData?.name}</div>{" "}
        <div>{weatherData.main.temp.toFixed(1)}℃</div>
      </div>
    </div>
  );
};

export default WeatherIcon;
