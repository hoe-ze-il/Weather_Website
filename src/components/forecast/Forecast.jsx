import ForecastCSS from "./Forecast.module.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ForecastList from "./ForecastList";

function Forecast({ type }) {
  const { hourlyForecast, dailyForecast } = useContext(DataContext);
  return (
    <div className={ForecastCSS.container}>
      <p className={ForecastCSS["forecast-text"]}>
        {type == "hourly" ? "Hourly Forecast" : "Daily Forecast"}
      </p>
      <div className={ForecastCSS["line-row"]}></div>
      <div className={ForecastCSS["forecasts"]}>
        {type == "hourly"
          ? hourlyForecast.list
              .slice(0, 4)
              .map((itemHourly, index) => (
                <ForecastList key={index} itemHourly={itemHourly} type={type} />
              ))
          : dailyForecast.list.map((itemDaily, index) => (
              <ForecastList key={index} itemDaily={itemDaily} type={type} />
            ))}
      </div>
    </div>
  );
}

export default Forecast;
