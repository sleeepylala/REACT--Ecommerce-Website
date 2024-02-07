// Import di React e del metodo createContext da React
import React, { createContext, useState } from "react";

// Import del modulo all_product contenente le informazioni sui prodotti
import all_product from "../Components/Assets/all_product";

// Creazione di un contesto chiamato ShopContext utilizzando la funzione createContext di React
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Definizione del componente ShopContextProvider
const ShopContextProvider = (props) => {
  // Creazione di un oggetto contextValue che contiene tutte le informazioni sui prodotti
  const contextValue = { all_product };
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Restituzione del Provider del contesto ShopContext con il valore contextValue
  return (
    // Il Provider del contesto ShopContext fornisce il valore contextValue a tutti i componenti figli
    // In questo modo, i componenti figli possono accedere al valore del contesto
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Esportazione del componente ShopContextProvider come default
export default ShopContextProvider;
