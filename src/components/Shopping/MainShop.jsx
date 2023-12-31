import React from 'react';
import ProductCard from './ProductCard';

export default function MainShop({ products, categoryChosen }) {
  const filteredProducts = categoryChosen === 'All' ? products : products?.filter((product) => product.category === categoryChosen);

  return (
    <div className="main-shop-container">
      <div className="main-top">
        <p className="main-shop-title">
          Productos/
          {categoryChosen}
        </p>
      </div>
      <div className="main-bottom">
        { filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        )) }
      </div>
    </div>
  );
}
