import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  //-------------------------------------------------------------------------------------------//
  //////-----FUNCTION FOR ADDING TO ARRAY------////////
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      // If item is in cart, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item is not in cart, add it with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  //-------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------//
  //////-----FUNCTION FOR DELETING FROM ARRAY------////////
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                }
              : cartItem
          )
        );
      }
    }
  };
  //-------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------//
  //////-----FUNCTION FOR DELETING ALL ITEMS FROM ARRAY------////////
  const clearCart = () => {
    setCartItems([]);
  };

  //////------FUNCTION TO ADD THE TOTAL VALUE------/////////
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  //-------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------//
  //////------FUNCTION TO ADD THE TOTAL QUANTITY------/////////
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  //-------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------//
  //////----STORING ITEMS IN LOCAL STORAGE----///////
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  //-------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------//
  //////----GETTING ITEMS FROM LOCAL STORAGE-----//////
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  //-------------------------------------------------------------------------------------------//

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
