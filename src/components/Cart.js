import React from 'react';
import './Cart.css';

function Cart({ cartItems, updateCartItemQuantity, removeFromCart }) {
  const finalizePurchase = () => {
    const message = `Hola, me gustaría comprar los siguientes productos:\n\n${cartItems.map(item => `${item.name} - ${item.winery ? item.winery : 'Sin Bodega'} - ${formatPrice(item.price)} ARS x ${item.quantity} = ${formatPrice(item.price * item.quantity)} ARS`).join('\n')}\n\nTotal: ${formatPrice(getTotal())} ARS`;
    const whatsappUrl = `https://wa.me/542616078679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    if (typeof price !== 'number') price = Number(price);
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className='cart-products'>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <strong>{item.name}</strong>
                <p>Precio: {formatPrice(item.price)} ARS</p>
                <p>Total: {formatPrice(item.price * item.quantity)} ARS</p>
              </div>
              <div className='product-cart-controls'>
                <div className="quantity-controls">
                  <button className="btn btn-secondary" onClick={() => updateCartItemQuantity(item, item.quantity - 1)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="btn btn-secondary" onClick={() => updateCartItemQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Total: {formatPrice(getTotal())}</h3>
          <button className="btn btn-success mt-3" onClick={finalizePurchase}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}

export default Cart;
