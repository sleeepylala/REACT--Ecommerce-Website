import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
//Con browserRouter i componenti saranno disponibili in ogni pagina

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory />} />
        <Route path="/womens" element={<ShopCategory />} />
        <Route path="/kids" element={<ShopCategory />} />
      </Routes>
    </div>
  );
}

export default App;
