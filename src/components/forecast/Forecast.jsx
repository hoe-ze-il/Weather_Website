import ForecastCSS from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import HourlyForecast from "./HourlyForecast";

function Forecast() {
  const { hourlyForecast } = useContext(DataContext);
  return (
    <div className={ForecastCSS.container}>
      <p className={ForecastCSS["forecast-text"]}>Hourly Forecast</p>
      <div className={ForecastCSS["line-row"]}></div>
      <div className={ForecastCSS["forecasts"]}>
        {hourlyForecast.list.slice(0, 4).map((item, index) => (
          <HourlyForecast key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;
