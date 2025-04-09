import React from 'react';
import './ProductCard.css'

function ProductCard({ product, addToCart }) {
  const formatPrice = (price) => {
    if (typeof price !== 'number') price = Number(price);
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  };

  return (
    <div className="product-card">
      <div className='product-info'>
        <h3>{product.name}</h3>
        <p>Varietal: {product.variety}</p>
        <p>Bodega: {product.winery}</p>
        <p>{formatPrice(product.price)}</p>
      </div>
      <div className='product-button'>
        <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
      </div>  
    </div>
  );
}

export default ProductCard;
