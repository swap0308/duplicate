import React from "react";
import ac_image from '../images/Ac_image.jpg';
import refri from '../images/regerigerator_image.jpg';
import earbuds from '../images/tree.jpg';
import '../Carousel.css';

const Corousel = () => {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed:0.000000005,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   arrows: true
    // };

    return (
        
          
           <div className="slider">
            <div className="slide_track">
            <div className="slide">
              <img src={earbuds}  />
            </div>
            <div className="slide">
              <img src={earbuds}  />
            </div>
            <div className="slide">
              <img src={earbuds}  />
            </div>
            </div>
            </div>
        
      );
    };
    
    export default Corousel;