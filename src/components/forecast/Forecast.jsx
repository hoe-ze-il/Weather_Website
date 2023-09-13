import ForecastCSS from "./Forecast.module.css";

function Forecast() {
  return (
    <div className={ForecastCSS.container}>
      <p className={ForecastCSS["forecast-text"]}>Hourly Forecast</p>
      <div className={ForecastCSS["line-row"]}></div>
      <div className={ForecastCSS["forecasts"]}>
        <div className={ForecastCSS["forecast"]}>
          <p className={ForecastCSS.forecast}>11 AM</p>
          <img
            className={ForecastCSS["forecast-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["forecast-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["forecast"]}>
          <p className={ForecastCSS.forecast}>11 AM</p>
          <img
            className={ForecastCSS["forecast-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["forecast-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["forecast"]}>
          <p className={ForecastCSS.forecast}>11 AM</p>
          <img
            className={ForecastCSS["forecast-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["forecast-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["forecast"]}>
          <p className={ForecastCSS.forecast}>11 AM</p>
          <img
            className={ForecastCSS["forecast-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["forecast-celsius"]}>31ºC</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
