import ForecastCSS from "./Forecast.module.css";

function Forecast() {
  return (
    <div className={ForecastCSS.container}>
      <p className={ForecastCSS["hourly-text"]}>Hourly Forecast</p>
      <div className={ForecastCSS["line-row"]}></div>
      <div className={ForecastCSS["hourly-forecasts"]}>
        <div className={ForecastCSS["hourly-forecast"]}>
          <p className={ForecastCSS.hourly}>11 AM</p>
          <img
            className={ForecastCSS["hourly-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["hourly-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["hourly-forecast"]}>
          <p className={ForecastCSS.hourly}>11 AM</p>
          <img
            className={ForecastCSS["hourly-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["hourly-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["hourly-forecast"]}>
          <p className={ForecastCSS.hourly}>11 AM</p>
          <img
            className={ForecastCSS["hourly-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["hourly-celsius"]}>31ºC</p>
        </div>
        <div className={ForecastCSS["line-col"]}></div>
        <div className={ForecastCSS["hourly-forecast"]}>
          <p className={ForecastCSS.hourly}>11 AM</p>
          <img
            className={ForecastCSS["hourly-icon"]}
            alt="weather icon"
            src="./img/01d.png"
          />
          <p className={ForecastCSS["hourly-celsius"]}>31ºC</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
