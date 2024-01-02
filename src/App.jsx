import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Head/Header';
import Home from './components/Home/Home';
import Shop from './components/Shopping/Shop';
import Cart from './components/Cart/Cart';
import ProductPage from './components/Product/ProductPage';

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProductsToCart = (product) => {
    setCartProducts((prevProducts) => ([
      ...prevProducts,
      product,
    ]));
  };

  useEffect(() => {
    const handleAddPriceToTotal = () => {
      const sumOfPrices = cartProducts.reduce((acc, product) => acc + product.price, 0);
      setTotalPrice(sumOfPrices);
    };
    handleAddPriceToTotal();
  }, [cartProducts]);

  const handleEliminateProductsToCart = (product) => {
    setCartProducts((prevProducts) => {
      const index = prevProducts.findIndex((prod) => prod.id === product.id);
      if (index !== -1) {
        const newProducts = [...prevProducts];
        newProducts.splice(index, 1);
        return newProducts;
      }
      return prevProducts;
    });
  };

  return (
    <>
      <Header cartProducts={cartProducts} totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleAddProductsToCart={handleAddProductsToCart} />} />
        <Route
          path="/cart"
          element={(
            <Cart
              totalPrice={totalPrice}
              cartProducts={cartProducts}
              handleAddProductsToCart={handleAddProductsToCart}
              handleEliminateProductsToCart={handleEliminateProductsToCart}
            />
          )}
        />
        <Route path="/product:product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
