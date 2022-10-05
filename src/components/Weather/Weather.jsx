import Preloader from "../Preloader/Preloader";
import weatherS from "./Weather.module.css";
import WeatherReq from "./../../requests/weatherReq"

const Weather = (props) => {
  const weatherData = WeatherReq()
  
 if (!weatherData) {
  return( 
  <div className={weatherS.preloader}> 
  <Preloader/>
  </div>
  )
 } 
  
  
  return (
    <div className={weatherS.mainWrapper}>
      <div>{weatherData.city}</div>
      <div>{weatherData.temperature}°C</div>
      <div>{weatherData.description}</div>
    </div>
  );
};

export default Weather;
