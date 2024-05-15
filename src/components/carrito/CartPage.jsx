import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import './CartPage.css';
import { CartContext } from './CartContext';
import { products } from '../ProductsMock'; // Importa el array de productos

const CartPage = () => {
  const { cart, getTotalPrice, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useContext(CartContext);
  
  
  return (
    <div className="cart-page">
      <div className="cart-container2">
        <h2 className="cart-title">Carrito de Compras</h2>
        <div className="cart-items">
          {cart.map(item => {
            // Busca el producto correspondiente en el array de productos
            const product = products.find(product => product.id === item.id);
            // Verifica si se encontró el producto y si tiene una imagen
            if (product && product.img) {
              return (
                <div key={item.id} className="cart-item">
                  <img src={product.img} alt={item.title} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-price">${item.price * item.quantity}</p>
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
              return null; // Si no se encuentra la imagen, no mostrar el elemento
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
