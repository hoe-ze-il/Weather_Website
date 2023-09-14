import React, { createContext, useState, useEffect } from "react";
import { API_KEY, WEATHER_API_URL } from "../api/api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latLon, setLatLon] = useState("11.568271,104.9224426");

  const [lat, lon] = latLon.split(",");

  useEffect(() => {
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
  }, [lat, lon]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DataContext.Provider value={{ currentWeather, setLatLon }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
