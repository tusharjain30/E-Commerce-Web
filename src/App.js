import React from 'react';
import Home from './componants/Home';
import Contact from './componants/Contact';
import About from './componants/About';
import ErrorPage from './componants/ErrorPage';
import Products from './componants/ProductPage/Products';
import CartPage from './componants/CartPage';
import { Routes, Route } from 'react-router-dom';


let App = () => {

  return (
    <>

      <Routes>
          <Route exact path = "/" element = {<Home />}></Route>
          <Route exact path = "/contact" element = {<Contact />}></Route>
          <Route exact path = "/about" element = {<About />}></Route>
          <Route exact path = "/products" element = {<Products />}></Route>
          <Route exact path = "/cart" element = {<CartPage />}></Route>
          <Route path = "*" element = {<ErrorPage />}></Route>
      </Routes>
  
    </>
  )
}

export default App;