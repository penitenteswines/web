import React from 'react';

function ProductList({ addToCart, products }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className='product-info'>
              <h3>{product.name}</h3>
              <p>{product.variety}</p>
              <p>{product.winery}</p>
              <p>${product.price}</p>
            </div>
            <div className='product-button'>
              <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
