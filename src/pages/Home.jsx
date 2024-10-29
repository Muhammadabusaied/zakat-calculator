import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

function Home() {
  return (
    <div className="container mx-auto text-center">
      <Carousel />
      <Calculator/>
      <Footer />
    </div>
  );
}

export default Home;
