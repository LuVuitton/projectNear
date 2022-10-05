import axios from "axios";
import { useEffect, useState } from "react";

const WeatherReq=()=>{
const apiKey = "3f6dc0f2dd6011880df27000d470354f";
const city = "Antratsit";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

const [apiWeather, setApiWeather] = useState();

useEffect(() => {
  axios.get(url).then((res) => {
    setApiWeather({
      city: res.data.name,
      temperature: res.data.main.temp,
      description: res.data.weather[0].description,
    });
  });
}, []);

return apiWeather;
}

export default WeatherReq;