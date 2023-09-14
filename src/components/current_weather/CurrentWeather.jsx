import CurrentWeatherCSS from "./CurrentWeather.module.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function CurrentWeather() {
  const { currentWeather } = useContext(DataContext);
  const date = new Date(currentWeather.dt * 1000);
  const currentMonth = date.toDateString();

  return (
    <div className={CurrentWeather.container}>
      <p className={CurrentWeatherCSS["current-location"]}>
        {currentWeather.name}, {currentWeather.sys.country}
      </p>
      <div className={CurrentWeatherCSS["weather-display"]}>
        <div className={CurrentWeatherCSS["weather-left"]}>
          <img
            className={CurrentWeatherCSS["weather-img"]}
            alt="weather image"
            src={`./img/${currentWeather.weather[0].icon}.png`}
          />
          <p className={CurrentWeatherCSS["weather-celsius"]}>
            {Math.round(currentWeather.main.temp)}ºC
          </p>
        </div>
        <div className={CurrentWeatherCSS["weather-right"]}>
          <div className={CurrentWeatherCSS["weather-right-top"]}>
            <p className={CurrentWeatherCSS.description}>
              {currentWeather.weather[0].description}
            </p>
            <p className={CurrentWeatherCSS.date}>{currentMonth}</p>
            <p className={CurrentWeatherCSS["min-max"]}>
              Temp Min:
              <span> {Math.round(currentWeather.main.temp_min)}ºC</span>
            </p>
            <p className={CurrentWeatherCSS["min-max"]}>
              Temp Max:
              <span> {Math.round(currentWeather.main.temp_max)}ºC</span>
            </p>
            <p className={CurrentWeatherCSS["feels-like"]}>
              Feels Like:
              <span> {Math.round(currentWeather.main.feels_like)}ºC</span>
            </p>
          </div>
          <div className={CurrentWeatherCSS["weather-right-bottom"]}>
            <div className={CurrentWeatherCSS["wind-container"]}>
              <img
                className={CurrentWeatherCSS.wind}
                alt="wind icon"
                src="./img/wind.png"
              />
              <p className={CurrentWeatherCSS["wind-ms"]}>
                {currentWeather.wind.speed} m/s
              </p>
            </div>
            <div className={CurrentWeatherCSS["humidity-container"]}>
              <img
                className={CurrentWeatherCSS.humidity}
                alt="humidity icon"
                src="./img/humidity.png"
              />
              <p className={CurrentWeatherCSS["humidity-percentage"]}>
                {currentWeather.main.humidity} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
