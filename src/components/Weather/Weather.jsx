import Preloader from "../Preloader/Preloader";
import weatherS from "./Weather.module.css";

const Weather = (props) => {
 if (!props.apiWeather) {
  return( 
  <div className={weatherS.preloader}> 
  <Preloader/>
  </div>
  )
 } 
  
  
  return (
    <div className={weatherS.mainWrapper}>
      <div>{props.apiWeather.city}</div>
      <div>{props.apiWeather.temperature}°C</div>
      <div>{props.apiWeather.description}</div>
    </div>
  );
};

export default Weather;
