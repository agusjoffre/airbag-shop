import React, { useState } from 'react';
import DeliveryCard from './DeliveryCard';
import '../../styles/shop.css';
import SidebarShop from './SidebarShop';
import MainShop from './MainShop';
import useFetch from '../../hooks/useFetch';

const deliveryProps = [
  {
    id: 1,
    icon: 'public/assets/icons/truck.svg',
    title: 'Enviamos tu compra',
    description: 'Entregas a todo el pais',
  },
  {
    id: 2,
    icon: 'public/assets/icons/credit-card.svg',
    title: 'Paga como quieras',
    description: 'Tarjetas de credito o efectivo',
  },
  {
    id: 3,
    icon: 'public/assets/icons/lock.svg',
    title: 'Compra con seguridad',
    description: 'Tus datos siempre protegidos',
  },
];

function Shop({ handleAddProductsToCart }) {
  const { products, isLoading } = useFetch('src/utils/products.json');
  const [categoryChosen, setCategoryChosen] = useState('All');

  const handleCategoryChosen = (category) => {
    setCategoryChosen(category || 'All');
  };

  const categories = products?.map((product) => product.category)
    .reduce((unique, item) => {
      if (!unique.includes(item)) {
        unique.push(item);
      }
      return unique;
    }, []);

  return (
    <section className="shop-section">
      <div className="shop-top">
        <h1 className="shop-title">TIENDA</h1>
        <div className="delivery-info">
          <DeliveryCard deliveryProps={deliveryProps[0]} />
          <DeliveryCard deliveryProps={deliveryProps[1]} />
          <DeliveryCard deliveryProps={deliveryProps[2]} />
        </div>
      </div>
      <div className="shop-bottom">
        { !isLoading ? (
          <>
            <SidebarShop
              categories={categories}
              handleCategoryChosen={handleCategoryChosen}
            />
            <MainShop
              categoryChosen={categoryChosen}
              products={products}
              handleAddProductsToCart={handleAddProductsToCart}
            />
          </>
        ) : (
          <h1 style={{ color: 'white' }}>Cargando la tienda...</h1>
        )}

      </div>
    </section>
  );
}

export default Shop;
