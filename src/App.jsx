import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Messenger from "./components/Messenger/Messenger";
import Offers from "./components/Offers/Offers";
import Profile from "./components/Profile/Profile";
import Stack from "./components/Stack/Stack";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Map" element={<Map />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Stack" element={<Stack />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
