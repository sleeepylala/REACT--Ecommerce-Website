import React, { useContext } from "react";
import "./CSS/Product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); //prendo il parametro da dentro App.jsx, così posso trovare l'id di tutti i prodotti
  const product = all_product.find((e) => e.id === Number(productId)); //Viene utilizzata la funzione find sull'array all_product per trovare il prodotto il cui ID corrisponde all'ID estratto dalla URL. L'ID viene convertito in un numero
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
