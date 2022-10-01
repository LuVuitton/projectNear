import weatherS from "./Weather.module.css";

const Weather = (props) => {
  return (
    <div className={weatherS.mainWrapper}>
      <div>{props.apiWeather.city}</div>
      <div>{props.apiWeather.temperature}°C</div>
      <div>{props.apiWeather.description}</div>
    </div>
  );
};

export default Weather;
