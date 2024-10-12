import React from 'react';

interface WeatherInfoProps {
   weather: {
      name: string;
      main: { temp: number };
      weather: { description: string; icon: string }[];
   } | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
   return (
      <div className="mt-8 bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg shadow-lg text-center text-white w-full max-w-xs sm:max-w-md lg:max-w-lg">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{weather?.name}</h2>
         <p className="text-xl sm:text-2xl lg:text-3xl mt-2">{weather?.main.temp}°C</p>
         <p className="text-lg capitalize">{weather?.weather[0].description}</p>
         <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto mt-4"
         />
      </div>
   );
};

export default WeatherInfo;
