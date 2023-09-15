import { createContext, useState, useEffect } from "react";
import { API_KEY, WEATHER_API_URL, HOURLY_FORECASR_API_URL } from "../api/api";

const DataContext = createContext({});

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);
  const [latLon, setLatLon] = useState("11.568271,104.9224426");

  const [lat, lon] = latLon.split(",");

  const timeStamptoHour = (dt, timeZone) => {
    const timeInSeconds = dt + timeZone;
    const hours = Math.floor(timeInSeconds / 3600);

    const time = hours % 24 < 12 ? "AM" : "PM";

    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${formattedHour} ${time}`;

    return timeString;
  };

  useEffect(() => {
    // Current Weather
    fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then((fetchedData) => {
        const myConstData = fetchedData;
        setCurrentWeather(myConstData);
        setLoading(false);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setLoading(false);
      });

    // Forecast Hourly
    fetch(
      `${HOURLY_FORECASR_API_URL}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then((data) => {
        const newData = data;
        setHourlyForecast(newData);
        setLoading2(false);
      })
      .catch((error) => {
        setError2(error);
        setLoading2(false);
      });
  }, [lat, lon]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading2) {
    return <div>Loading...</div>;
  }

  if (error2) {
    return <div>Error: {error2.message}</div>;
  }
  console.log(hourlyForecast);
  return (
    <DataContext.Provider
      value={{
        currentWeather,
        setLatLon,
        hourlyForecast,
        timeStamptoHour,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
