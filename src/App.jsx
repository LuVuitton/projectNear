import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Messenger from "./components/Messenger/Messenger";
import Offer from "./components/Offer/Offer";
import Profile from "./components/Profile/Profile";
import Stack from "./components/Stack/Stack";
import Setting from "./components/Setting/Setting";
import TestApi from "./components/TestApi/TestApi";
import NavBottom from "./components/NavBottom/NavBottom";
import appS from "./App.module.css";
import Error from "./components/Error/Error";
import Chat from "./components/Messenger/Chat/Chat";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const apiKey = "928346fa14b100bf560110b1c5fef477";
  const city = "Antratsit";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  
  const [apiWeather,setApiWeather] = useState({})

  useEffect=()=>axios.get(url).then(res=> {
    setApiWeather({name:res.data.name})
  }, [])

  useEffect=()=>(()=>{
console.log(apiWeather);
console.log('usEf');
  },[apiWeather])


  

  return (
    <div className={appS.mainWrapper}>
      <div className={appS.content}>
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/menu" element={<Menu />} />
          <Route exact path="/messenger" element={<Messenger />} />
          <Route path="/messenger/:chatId" element={<Chat />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Stack" element={<Stack />} />
          <Route path="/test" element={<TestApi apiWeather={apiWeather}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <pre>               !     !     !     3     !     !     !      </pre>

      <footer className={appS.footer}>
        <NavBottom />
      </footer>
  
      </div>
  );
}

export default App;
