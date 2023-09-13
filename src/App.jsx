import React from "react";

// Components
import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";

// Context API
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div>
      <DataProvider>
        <Search />
        <CurrentWeather />
        <Forecast />
      </DataProvider>
    </div>
  );
}

export default App;
