import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getTotalItems = ()=>{
    let total = cart.reduce((acc, elemento)=>{
      return acc + elemento.quantity
    }, 0)
    return total
  }


  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
