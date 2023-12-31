import React from 'react';

const cartIconSrc = 'public/assets/icons/cart.svg';
const addToCartIconSrc = 'public/assets/icons/add-circle.svg';

export default function ProductCard({
  image, title, price, handleAddProductsToCart, product,
}) {
  return (
    <div className="card-container">
      <div className="product-container">
        <img className="card-image" src={image} alt="" />
      </div>
      <h1 className="card-title">{title}</h1>
      <div className="card-bottom">
        $
        {' '}
        {price}
        <div className="card-bottom-right">
          <img className="icon-card-cart" src={cartIconSrc} alt="Shopping Cart" />
          <button
            type="button"
            className="card-btn"
            aria-label="Add to cart"
            onClick={() => handleAddProductsToCart(product)}
          >
            <img className="icon-card-add" src={addToCartIconSrc} alt="Add to cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
