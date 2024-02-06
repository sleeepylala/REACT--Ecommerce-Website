import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";

//questo componente ShopCategory utilizza il contesto ShopContext per ottenere accesso ai dati sui prodotti
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); //stiamo utilizzando il hook useContext di React per accedere al contesto ShopContext
  return <div className="shop-category"></div>;
};

export default ShopCategory;
