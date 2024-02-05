import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
//Con browserRouter i componenti saranno disponibili in ogni pagina

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />

        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
