import './App.css'
import React, { useState, useEffect } from 'react';
import Weather from './Components/Weather';
import bgVideo from '../src/assets/weatherVidBg.mp4';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "c101f83a75e30882b524b3e2fb82af88";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error("Error fetching the weather data", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [query]);

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      setQuery(location);
      setLocation("");
    }
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
            src={bgVideo}
            type="video/mp4" autoPlay muted loop />
    </div>
    
    <div className="w-full h-full relative">
        <div className="text-center p-4">
          <input
            type="text"
            className="py-3 px-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[700px] text-lg rounded-2xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
            placeholder="Enter location ℃"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchLocation}
          />
        </div>

        {loading ? (
            <div className="mt-4">
              Loading...
            </div>
        ) : (
          <Weather weatherData={data} />
        )}
      </div>
</section>


    </>
  );
}

export default App;