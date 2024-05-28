import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.filter(product => product.category.includes('destacado'));

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {featuredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/products/id/${product.id}`} className="ver-mas-btn">Ver Más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
