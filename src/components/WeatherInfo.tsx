import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0, faDroplet, faWind, faLocationDot, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

interface WeatherInfoProps {
   weather: {
      name: string;
      main: { temp: number; humidity: number; feels_like: number; pressure: number };
      weather: { description: string; icon: string }[];
      wind: { speed: number };
   } | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
   return (
      <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-lg text-white w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white bg-opacity-10">
         <div className="w-full grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-2 sm:col-span-1 bg-white bg-opacity-20 p-4 rounded-lg flex flex-col items-center justify-center">
               <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="w-20 h-20"
               />
               <p className="text-3xl sm:text-4xl lg:text-5xl mt-2 font-bold">{weather?.main.temp}°C</p>
               <h2 className="mt-2 text-xs sm:text-sm lg:text-lg font-bold flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-400 mr-2" />
                  {weather?.name}
               </h2>
               <p className="mt-2 text-sm sm:text-base capitalize">{weather?.weather[0].description}</p>
            </div>

            <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-2">
               <InfoCard icon={faTemperature0} label="Feels like" value={`${weather?.main.feels_like}°C`} color="text-blue-400" />
               <InfoCard icon={faDroplet} label="Humidity" value={`${weather?.main.humidity}%`} color="text-blue-500" />
               <InfoCard icon={faGaugeHigh} label="Pressure" value={`${weather?.main.pressure} hPa`} color="text-yellow-400" />
               <InfoCard icon={faWind} label="Wind" value={`${weather?.wind.speed} m/s`} color="text-green-400" />
            </div>
         </div>
      </div>
   );
};

const InfoCard: React.FC<{ icon: any; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
   <div className="bg-white bg-opacity-20 p-3 rounded-lg flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={icon} className={`text-2xl mb-1 ${color}`} />
      <p className="text-xs text-gray-200">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
   </div>
);

export default WeatherInfo;