import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Messenger from "./components/Messenger/Messenger";
import Offer from "./components/Offer/Offer";
import Profile from "./components/Profile/Profile";
import Stack from "./components/Stack/Stack";
import Setting from "./components/Setting/Setting";
import { Routes, Route } from "react-router-dom";
import NavBottom from "./components/NavBottom/NavBottom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="*" element={<Menu />} />
      </Routes>

      <NavBottom />
    </div>
  );
}

export default App;
