import React from "react";

// CSS
import "./App.css";

// Components
import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";

// Context API
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <header>
          <Search />
        </header>
        <main>
          <CurrentWeather />
          <Forecast />
        </main>
      </DataProvider>
    </div>
  );
}

export default App;
