import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Product.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Products = () => {
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

  // Obtener la categoría de la URL
  const { pathname } = useLocation();
  let categoria = pathname.split('/').pop();
  let tituloCategoria = 'Zapatillas';

  // Asignar el título según la categoría
  switch (categoria) {
    case 'products':
      tituloCategoria = 'Todos los productos';
      break;
    case 'deportivas':
      tituloCategoria = 'Zapatillas Deportivas';
      break;
    case 'casuales':
      tituloCategoria = 'Zapatillas Urbanas';
      break;
    case 'moda':
      tituloCategoria = 'Zapatillas en Tendencia';
      break;
    case 'nenes':
      tituloCategoria = 'Zapatillas Niños';
      break;
    case 'nenas':
      tituloCategoria = 'Zapatillas Niñas';
      break;
    case 'mujeres':
      tituloCategoria = 'Zapatillas Mujeres';
      break;
    case 'hombres':
      tituloCategoria = 'Zapatillas Hombres';
      break;
    default:
      break;
  }

  // Filtrar los productos según la categoría
  const filteredProducts = categoria === 'products' ? products : products.filter(product => product.category.includes(categoria));

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>{tituloCategoria}</h2>
      <div className="product-list">
        {filteredProducts.map(product => (
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

export default Products;
