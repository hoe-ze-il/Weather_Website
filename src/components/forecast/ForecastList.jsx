import ForecastCSS from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

// eslint-disable-next-line react/prop-types
function ForecastList({ itemHourly, itemDaily, type }) {
  const { timeStamptoHour, hourlyForecast } = useContext(DataContext);

  return (
    <>
      <div className={ForecastCSS["forecast"]}>
        <p className={ForecastCSS.forecast}>
          {type == "hourly"
            ? timeStamptoHour(itemHourly.dt, hourlyForecast.city.timezone)
            : new Date(itemDaily.dt * 1000)
                .toLocaleDateString("en-US", {
                  weekday: "long",
                })
                .slice(0, 3)}
        </p>
        <img
          className={ForecastCSS["forecast-icon"]}
          alt="weather icon"
          src={
            type == "hourly"
              ? `./img/${itemHourly.weather[0].icon}.png`
              : `./img/${itemDaily.weather[0].icon}.png`
          }
        />
        <p className={ForecastCSS["forecast-celsius"]}>
          {type == "hourly"
            ? Math.round(itemHourly.main.temp)
            : Math.round(itemDaily.temp.day)}
          ºC
        </p>
      </div>
      <div className={ForecastCSS["line-col"]}></div>
    </>
  );
}

export default ForecastList;
