import CurrentWeatherCSS from "./CurrentWeather.module.css";

function CurrentWeather() {
  return (
    <div className={CurrentWeather.container}>
      <p className={CurrentWeatherCSS["current-location"]}>
        Phnom Penh, Cambodia
      </p>
      <div className={CurrentWeatherCSS["weather-display"]}>
        <div className={CurrentWeatherCSS["weather-left"]}>
          <img
            className={CurrentWeatherCSS["weather-img"]}
            alt="weather image"
            src="./img/02d.png"
          />
          <p className={CurrentWeatherCSS["weather-celsious"]}>30ºC</p>
        </div>
        <div className={CurrentWeatherCSS["weather-right"]}>
          <div className={CurrentWeatherCSS["weather-right-top"]}>
            <p className={CurrentWeatherCSS.description}>Clear</p>
            <p className={CurrentWeatherCSS.date}>11 Sep 2023</p>
            <p className={CurrentWeatherCSS.time}>
              Local Time: <span>10:15 AM</span>
            </p>
            <p className={CurrentWeatherCSS["feels-like"]}>
              Feels Like: <span>22ºC</span>
            </p>
          </div>
          <div className={CurrentWeatherCSS["weather-right-bottom"]}>
            <div className={CurrentWeatherCSS["wind-container"]}>
              <img
                className={CurrentWeatherCSS.wind}
                alt="wind icon"
                src="./img/wind.png"
              />
              <p>100 m/s</p>
            </div>
            <div className={CurrentWeatherCSS["humidity-container"]}>
              <img
                className={CurrentWeatherCSS.humidity}
                alt="humidity icon"
                src="./img/humidity.png"
              />
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
