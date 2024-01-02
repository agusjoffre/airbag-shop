import React from 'react';
import QuantityInput from './QuantityInput';

export default function CartCard({
  product, cartProducts, handleAddProductsToCart, handleEliminateProductsToCart,
}) {
  const quantity = cartProducts.filter((prod) => prod.id === product.id).length;

  return (
    <div className="cartPage-card-container">
      <div className="cartPage-cart-left">
        <div className="cartPage-product-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="cartPage-product-name">
          {product.title}
        </div>
      </div>
      <div className="cartPage-cart-right">
        <div className="cartPage-product-price">
          $
          {' '}
          {product.price}
        </div>
        <QuantityInput
          quantity={quantity}
          handleAddProductsToCart={handleAddProductsToCart}
          product={product}
          handleEliminateProductsToCart={handleEliminateProductsToCart}
        />
      </div>
    </div>
  );
}
