// CSS
import "./App.css";
// Components
import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import cityData from "./data/city.json";

// Context API
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <header>
          <Search data={cityData} />
        </header>
        <main>
          <CurrentWeather />
          <Forecast type="hourly" />
          <Forecast type="daily" />
        </main>
      </DataProvider>
    </div>
  );
}

export default App;
