import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Head/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shopping/Shop";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/Product/ProductPage";
function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/product:product" element={ <ProductPage /> }/>
      </Routes>
    </>
  )
}

export default App
