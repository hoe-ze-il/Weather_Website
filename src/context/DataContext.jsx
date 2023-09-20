import { createContext, useState, useEffect } from "react";
import {
  API_KEY,
  WEATHER_API_URL,
  HOURLY_FORECAST_API_URL,
  DAILY_FORECAST_API_URL,
} from "../api/api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);
  const [loading3, setLoading3] = useState(true);
  const [error3, setError3] = useState(null);
  const [latitude, setLatitude] = useState("11.568271");
  const [longitude, setLongitude] = useState("104.9224426");

  // Function to get user geolocation
  function getCurrentUserLocation() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
            setLatitude("11.568271");
            setLongitude("104.9224426");
          }
        );
      } else {
        reject(new Error("Geolocation is not available in your browser"));
      }
    });
  }

  useEffect(() => {
    getCurrentUserLocation()
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  // Function covert time dt from API to Hour
  const timeStamptoHour = (dt, timeZone) => {
    const timeInSeconds = dt + timeZone;
    const hours = Math.floor(timeInSeconds / 3600);

    const time = hours % 24 < 12 ? "AM" : "PM";

    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const timeString = `${formattedHour} ${time}`;

    return timeString;
  };

  // Fetch Data from API base on dependecy Latitude and Longitude
  useEffect(() => {
    // Current Weather
    fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
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
      `${HOURLY_FORECAST_API_URL}/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
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

    // Daily Forecast
    fetch(
      `${DAILY_FORECAST_API_URL}/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=4&appid=${API_KEY}&units=metric`
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then((data) => {
        const dailyData = data;
        setDailyForecast(dailyData);
        setLoading3(false);
      })
      .catch((error) => {
        setError3(error);
        setLoading3(false);
      });
  }, [latitude, longitude]);

  if (loading || loading2 || loading3) {
    return <div>Loading...</div>;
  }

  if (error || error2 || error3) {
    return (
      <div>
        {error && `Error: ${error.message}`}
        {error2 && `Error: ${error2.message}`}
        {error3 && `Error: ${error3.message}`}
      </div>
    );
  }

  return (
    <DataContext.Provider
      value={{
        // Current Weather
        currentWeather,
        // Hourly Forecast
        hourlyForecast,
        // Daily Forecast
        dailyForecast,
        // Functions
        setLatitude,
        setLongitude,
        timeStamptoHour,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
