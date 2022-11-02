import React from 'react';

import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = (): JSX.Element => {
  return (
    <div id="home">
      <Hero />
      <Products />
      <Services />
      <Pricing />
      <About />
      <Contact />
    </div>
  );
};

export default Home;