import React, {useState} from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  
  const fetchWeather = async (city: string) => {
    try {
      const response = await axios.get<WeatherData>(`http://localhost:3001/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching Weather Data:', error);
      setWeather(null);
    }
  };

  return(
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSubmit={fetchWeather}/>
      <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App;