# Weather App

This Weather App is a full-stack project built with ReactJS on the frontend and NestJS on the backend. The application allows users to enter a city name and retrieve the current weather information, including temperature and weather conditions. The backend fetches weather data from the OpenWeatherMap API and serves it to the frontend.

## Project Structure

The project is organized as a monorepo with the following structure:
```
weather-app/ 
│ 
├── backend/ # NestJS backend 
│ ├── src/ 
│ │ ├── app.controller.ts 
│ │ ├── app.module.ts 
│ │ ├── main.ts 
│ │ ├── weather/ 
│ │ │ ├── weather.controller.ts 
│ │ │ ├── weather.module.ts 
│ │ │ ├── weather.service.ts 
│ ├── .env # Environment variables 
│ ├── nest-cli.json # NestJS configuration 
│ ├── package.json # Backend dependencies 
│ └── tsconfig.json # TypeScript configuration 
│ 
├── frontend/ # ReactJS frontend 
│ ├── public/ 
│ ├── src/ 
│ │ ├── components/ 
│ │ │ ├── WeatherDisplay.tsx 
│ │ │ └── WeatherForm.tsx 
│ │ ├── App.tsx 
│ │ ├── index.tsx 
│ ├── package.json # Frontend dependencies 
│ ├── .env # Frontend environment variables (if needed) 
│ └── .gitignore # Ignore unnecessary files 
│ 
├── README.md # Project description and setup instructions 
└── .gitignore # Global ignore file
```

## Technologies Used

- **Frontend**: ReactJS (with TypeScript)
- **Backend**: NestJS (with TypeScript)
- **HTTP Client**: Axios
- **Weather Data API**: OpenWeatherMap API

## Features

- **City-based Weather Search**: Users can input the name of a city to retrieve the current weather conditions.
- **Dynamic Data Fetching**: The backend uses Axios to fetch weather data from the OpenWeatherMap API.
- **Responsive UI**: The frontend is built using React, providing a responsive and interactive user interface.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
2. **Install dependencies for the backend**:
    ```bash
    cd backend
    npm install
3. **Install dependencies for the frontend**:
    ```bash
    cd ../frontend
    npm install
### Environment Variables

 - **Backend**: Create a `.env` file in the `backend` directory with your OpenWeatherMap API key:
  ```bash
  WEATHER_API_KEY=your_openweathermap_api_key
  ```

### Running the Application

1. **Start the backend server:**:
    ```bash
    cd backend
    npm run start:dev
2. **Start the frontend server**:
    ```bash
    cd ../frontend
    npm start
3. **Access the application**:
    - Open your browser and navigate to `http://localhost:3000`.

## CORS Configuration
To avoid CORS issues, ensure that CORS is enabled on the backend by adding the following to `main.ts`:
  ```bash
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors({
      origin: 'http://192.168.29.195:3000', // Replace with your frontend's origin
    });
    
    await app.listen(3001);
  }
  bootstrap();
  ```

## Future Enhancements
 - **Forecast Data**: Extend the app to display weather forecasts.
 - **Error Handling**: Improve error handling and user feedback.
 - **Styling**: Enhance the user interface with better styling.
 - **Testing**: Add unit tests for both frontend and backend.

## License
This project is licensed under the MIT License.