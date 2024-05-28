import React, { useState, useEffect, useContext } from 'react';
import './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../carrito/CartContext'; // Importa el contexto del carrito
import { db } from '../../firebaseConfig'; // Asegúrate de tener esta importación
import { doc, getDoc } from 'firebase/firestore';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Obtiene la función addToCart del contexto del carrito
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (product) {
      const selectedProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity
      };
      addToCart(selectedProduct);
    }
  };

  return (
    <div className="product-details-container">
      {product ? (
        <>
          <h2 className="product-title">{product.title}</h2>
          <div className="product-info">
            <div className="product-image-container">
              <img src={product.img} alt={product.title} className="product-image-id" />
            </div>
            <div className="product-options">
              <div className="quantity-option">
                <label htmlFor="quantity">Cantidad:</label>
                <input 
                  type="number" 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min="1" 
                />
              </div>
              <div className="size-option">
                <label htmlFor="size">Talle:</label>
                <select id="size">
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                </select>
              </div>
              <div className="price-option">
                <p>Precio: ${product.price * quantity}</p>
              </div>
              <div className="stock-option">
                <p>Stock Disponible: {product.stock}</p>
              </div>
              <Link to="/cart" className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al Carrito</Link>
            </div>
          </div>
          <div className="product-description">
            <h3>Descripción del Producto</h3>
            <p>{product.description}</p>
          </div>
        </>
      ) : (
        <div className="error-message">Producto no encontrado</div>
      )}
    </div>
  );
};

export default ProductDetails;
