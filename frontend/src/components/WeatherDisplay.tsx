import React from "react";

interface Weather {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

interface WeatherDisplayProps {
  weather: Weather | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) {
    return <div>No Data Available</div>
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  )
};

export default WeatherDisplay;