import React from "react";

const Weather = ({ weatherData }) => {
    if (!weatherData || !weatherData.weather) {
      return null; // If no data or incomplete data, return null to render nothing
    }
  
    return (
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto bg-gray-300 shadow-lg rounded-lg mx-auto mt-10 relative px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full md:w-1/2 my-4 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-xl">
                  {weatherData.name}, {weatherData.sys?.country}
                </p>
                <p className="text-base">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div>
                <h1 className="text-6xl font-semibold">
                  {weatherData.main?.temp.toFixed()} ℃
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between items-end">
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="h-16 w-16"
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

        <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
          <div class="mb-4 md:mr-6 md:mb-0">
            <img
              class="h-56 rounded-lg object-cover md:w-56"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />
          </div>
          <div class="">
            <p class="text-xl font-medium text-gray-700">James Edward</p>
            <p class="mb-4 text-sm font-medium text-gray-500">Senior Editor</p>
            <div class="flex space-x-2">
              <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p class="text-sm font-medium text-gray-500">Articles</p>
                <p class="text-3xl font-medium text-gray-600">13</p>
              </div>
              <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p class="text-sm font-medium text-gray-500">Papers</p>
                <p class="text-3xl font-medium text-gray-600">7</p>
              </div>
              <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                <p class="text-sm font-medium text-gray-500">Followers</p>
                <p class="text-3xl font-medium text-gray-600">2.5k</p>
              </div>
              <div class=""></div>
            </div>
            <div class="mb-3"></div>
            <div class="flex space-x-2">
              <button class="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">
                Message
              </button>
              <button class="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Weather;
