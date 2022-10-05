import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Messenger from "./components/Messenger/Messenger";
import Offer from "./components/Offer/Offer";
import Profile from "./components/Profile/Profile";
import Stack from "./components/Stack/Stack";
import Setting from "./components/Setting/Setting";
import Weather from "./components/Weather/Weather";
import NavBottom from "./components/NavBottom/NavBottom";
import appS from "./App.module.css";
import Error from "./components/Error/Error";
import Chat from "./components/Messenger/Chat/Chat";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UsersTest from "./components/UsersTest/UsersTest";

function App() {


  return (
    <div className={appS.mainWrapper}>
      <header className={appS.header}>
        <Weather />
      </header>

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
          <Route path="/TEST" element={<UsersTest />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <footer className={appS.footer}>
        <NavBottom />
      </footer>
    </div>
  );
}

export default App;
