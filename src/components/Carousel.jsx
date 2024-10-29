// src/components/Carousel.js
import React from 'react';
import one from '../assets/one.jpeg';
import two from '../assets/two.jpeg';
import three from '../assets/three.jpeg';

function Carousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={one} className="w-full" alt="Slide 1" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={two} className="w-full" alt="Slide 2" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={three} className="w-full" alt="Slide 3" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
