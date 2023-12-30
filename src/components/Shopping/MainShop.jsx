import React from 'react';

export default function MainShop({ categories, categoryChosen }) {
  return (
    <div className="main-shop-container">
      <div className="main-top">
        <p className="main-shop-title">
          Productos/
          {categoryChosen}
        </p>
      </div>
      <div className="main-bottom" />
    </div>
  );
}
