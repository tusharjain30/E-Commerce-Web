import React from 'react';
import Header from './Header';
import Navbar from './Nav';
import Slider from './Slider';
import Categories from './Categories';
import Footer from './Footer';
import ProductsSlider from './ProductsSlider';
import TshirtItems from './TshirtItems';
import MobileItems from './MobileItems';
import LaptopItems from './LaptopItems';
import MensJeansItems from './MensJeansItems';
import PerfumeItems from './PerfumeItems';

let Home = () => {

  return (
    <>
      <Navbar />
      <Header/>
      <Slider />
      <Categories />
      <ProductsSlider items = {TshirtItems} height = '400px'/>
      <ProductsSlider items = {MensJeansItems} height = '400px'/>
      <ProductsSlider items = {MobileItems} height = '300px'/>
      <ProductsSlider items = {LaptopItems} height = '200px'/>
      <ProductsSlider items = {PerfumeItems} height = '300px'/>
      <Footer />
  
    </>
  )
}

export default Home;