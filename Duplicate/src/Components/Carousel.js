import React, { useEffect, useState } from 'react';
import '../Carousel.css';

const images = [
  '../images/Ac_image.jpg',
  '../images/Earbuds_image.jpg',
  '../images/regerigerator_image.jpg'
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)`}}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

