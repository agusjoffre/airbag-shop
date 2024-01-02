import React from 'react';

export default function QuantityInput({
  quantity, handleAddProductsToCart, product, handleEliminateProductsToCart,
}) {
  return (
    <div className="cartPage-quantity-input">

      <button
        className="btn-quantity btn-quantity-decrease"
        type="button"
        onClick={() => handleEliminateProductsToCart(product)}
      >
        -
      </button>

      <div className="quantity">{ quantity }</div>

      <button
        className="btn-quantity btn-quantity-add"
        type="button"
        onClick={() => handleAddProductsToCart(product)}
      >
        +
      </button>

    </div>
  );
}
