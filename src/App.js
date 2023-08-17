import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <a
        href="https://github.com/KalkM/React-weather"
        target="_blank"
        rel="noreferrer"
      >
        open source code
      </a>{" "}
      by Kalkidan Mulugeta Diro
    </div>
  );
}

export default App;
