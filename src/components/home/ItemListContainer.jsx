import React from 'react';
import './ItemListContainer.css';
import { products } from '../ProductsMock';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {
  const featuredProducts = products.filter(product => product.category.includes('destacado'));

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
