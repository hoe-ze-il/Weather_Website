import ForecastCSS from "./Forecast.module.css";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

function HourlyForecast({ item }) {
  const { timeStamptoHour, hourlyForecast } = useContext(DataContext);

  return (
    <>
      <div className={ForecastCSS["forecast"]}>
        <p className={ForecastCSS.forecast}>
          {timeStamptoHour(item.dt, hourlyForecast.city.timezone)}
        </p>
        <img
          className={ForecastCSS["forecast-icon"]}
          alt="weather icon"
          src={`./img/${item.weather[0].icon}.png`}
        />
        <p className={ForecastCSS["forecast-celsius"]}>
          {Math.round(item.main.temp)}ºC
        </p>
      </div>
      <div className={ForecastCSS["line-col"]}></div>
    </>
  );
}

export default HourlyForecast;
