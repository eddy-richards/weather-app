import React, { useState, FormEvent } from "react";

interface WeatherFromProps {
  onSubmit: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFromProps> = ({ onSubmit }) => {
  const [city, setCity] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
        required
      />
      <button type="submit"> Get Weather Details </button>
    </form>
  )

}

export default WeatherForm;