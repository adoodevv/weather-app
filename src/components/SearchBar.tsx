import React from 'react';

interface SearchBarProps {
   city: string;
   setCity: (city: string) => void;
   getWeather: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, setCity, getWeather }) => {
   return (
      <div className="flex flex-col items-center mb-4 w-full">
         <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border w-full max-w-xs sm:max-w-md lg:max-w-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
         <button
            onClick={getWeather}
            className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition w-full max-w-xs sm:max-w-md lg:max-w-lg"
         >
            Get Weather
         </button>
      </div>
   );
};

export default SearchBar;
