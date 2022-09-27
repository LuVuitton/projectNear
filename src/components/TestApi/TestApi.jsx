import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

function TestApi() {
  let apiKey = "928346fa14b100bf560110b1c5fef477";
  let city = "Antratsit";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const onCount = () => {
    setCount(count + 1);
  };
  const onCount2 = () => {
    setCount2(count2 + 1);
  };
  const logCount = () => {
    console.log(count);
  };
  const logCount2 = () => {
    console.log(count2);
  };


  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    console.log("useEffect");
  }, [count]);



fetch(url)
.then(data=>data.text())
.then(data2=>console.log(data2))



  return (
    <>
      <div>City:{count}</div>
      <div>Temp:</div>
      <div>Humidity:</div>
      <button onClick={onCount}>{count}: коунт</button>
      <button onClick={onCount2}>{count2}:коунт 2</button>
      <button onClick={logCount}>LOG</button>
      <button onClick={logCount2}>LOG2</button>
    </>
  );
}

export default TestApi;
