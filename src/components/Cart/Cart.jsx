import React from 'react';
import '../../styles/cart.css';
import CartCard from './CartCards';

export default function Cart({
  totalPrice, cartProducts, handleAddProductsToCart, handleEliminateProductsToCart,
}) {
  const price = totalPrice.toLocaleString();
  const uniqueProducts = cartProducts.reduce((newArr, product) => {
    if (!newArr.includes(product)) {
      newArr.push(product);
    }
    return newArr;
  }, []);

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">TUS COMPRAS</h1>
      <div className="cart-main-container">
        {uniqueProducts.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            cartProducts={cartProducts}
            handleAddProductsToCart={handleAddProductsToCart}
            handleEliminateProductsToCart={handleEliminateProductsToCart}
          />
        ))}
      </div>
      <h2 className="cart-total">
        Total: $
        {' '}
        {price}
      </h2>
      <button type="button" className="btn-pay" onClick={() => alert(`Pagar $${price}`)}>Payout</button>
    </div>
  );
}
