// Import di React e del metodo createContext da React
import React, { createContext, useState } from "react";

// Import del modulo all_product contenente le informazioni sui prodotti
import all_product from "../Components/Assets/all_product";

// Creazione di un contesto chiamato ShopContext utilizzando la funzione createContext di React
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Definizione del componente ShopContextProvider
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        TotalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return TotalAmount;
  };

  // Creazione di un oggetto contextValue che contiene tutte le informazioni sui prodotti
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

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
