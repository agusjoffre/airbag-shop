import React from 'react';
import { Link } from 'react-router-dom';

const cartSrc = 'public/assets/icons/cart.svg';

function HeaderCart({ cartProducts, totalPrice }) {
  const cartCount = cartProducts.length;
  const price = totalPrice.toLocaleString();

  return (
    <div className="header-cart">
      <div className="header-cart-left-container">
        <Link className="header-cart-linkIcon" to="/cart">
          <img src={cartSrc} alt="Shopping cart" />
        </Link>
        <span className="header-cart-count">{cartCount}</span>
      </div>
      <div className="header-subtotal-count">
        $
        {' '}
        {price}
      </div>

    </div>

  );
}

export default HeaderCart;
