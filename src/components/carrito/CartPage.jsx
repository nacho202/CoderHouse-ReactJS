import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './CartPage.css';
import { CartContext } from './CartContext';
import { db } from '../../firebaseConfig'; // Asegúrate de tener esta importación
import { doc, getDoc } from 'firebase/firestore';

const CartPage = () => {
  const { cart, getTotalPrice, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = {};
      for (const item of cart) {
        const docRef = doc(db, 'products', item.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          fetchedProducts[item.id] = docSnap.data();
        }
      }
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [cart]);

  return (
    <div className="cart-page">
      <div className="cart-container2">
        <h2 className="cart-title">Carrito de Compras</h2>
        <div className="cart-items">
          {cart.map(item => {
            const product = products[item.id];
            if (product) {
              return (
                <div key={item.id} className="cart-item">
                  <img src={product.img} alt={product.title} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price * item.quantity}</p>
                    <div className="quantity-control">
                      <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Eliminar producto</button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Si no se encuentra el producto, no mostrar el elemento
            }
          })}
        </div>
        <div className="cart-summary">
          <h3>Resumen del Pedido</h3>
          <p>Total: ${getTotalPrice()}</p>
          <Link to="/pago" className="checkout-btn">Proceder al Pago</Link>
        </div>
      </div>
      <div className="cart-controls">
        <button className="clear-cart-btn" onClick={() => clearCart()}>Limpiar Carrito</button>
      </div>
      <div className="payment-methods">
        <h3 className="payment-title">Métodos de Pago Aceptados</h3>
        <div className="payment-icons">
          <img src="https://www.creditoregional.com.ar/CRInstitucional/assets/images/2000px-mastercard-logo-436x340.png" alt="Mastercard" />
          <img src="https://www.visa.com.ar/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png" alt="Visa" />
          <img src="https://economipedia.com/wp-content/uploads/ventajas-y-desventajas-de-paypal.png" alt="PayPal" />
          <img src="https://www.sitepro.com.ar/web/wp-content/uploads/2022/08/Mercado-pago-1024x267.png" alt="Mercado Pago" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
