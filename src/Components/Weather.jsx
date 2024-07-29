import React from "react";

const Weather = ({ weatherData }) => {
    if (!weatherData || !weatherData.weather) {
      return null; // If no data or incomplete data, return null to render nothing
    }
  
    return (
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto bg-gray-400 shadow-lg rounded-lg mx-auto mt-10 relative px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full md:w-1/2 my-4 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-3xl">
                  {weatherData.name}, {weatherData.sys?.country}
                </p>
                <p className="text-xl">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-6xl">
                  {weatherData.main?.temp.toFixed()} ℃
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="h-32 w-32"
                />
              </div>
              {weatherData.main ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-base">
                  <div className="flex justify-between gap-x-8">
                    <p>Feels Like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} ℃
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-8">
                    <p>Humidity</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity.toFixed()} %
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Wind Speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind?.speed.toFixed()} KPH
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-8">
                    <p>Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure.toFixed()} hPa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Weather;
