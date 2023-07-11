import C1 from '../../../assets/carousel/c1.jpg'
import C2 from '../../../assets/carousel/c2.jpg'
import C3 from '../../../assets/carousel/c4.jpg'
import C4 from '../../../assets/carousel/c5.jpg'
import C5 from '../../../assets/carousel/c6.jpg'
import C6 from '../../../assets/carousel/c7.jpg'
import C7 from '../../../assets/carousel/c20.jpg'
import C8 from '../../../assets/carousel/c11.jpg'
import C9 from '../../../assets/carousel/c12.jpg'

import C11 from '../../../assets/carousel/c15.jpg'
import C12 from '../../../assets/carousel/c16.jpg'
import C13 from '../../../assets/carousel/c17.jpg'
import C15 from '../../../assets/carousel/c19.jpg'
import C16 from '../../../assets/carousel/c21.jpg'




import { motion, useTransform, useScroll, circOut } from "framer-motion";
import React, {useState, useEffect} from "react";
import './carousel.css'

const images = [
  C1,
  C5,
  C4,
  C3,
  C7,
  C2,
  C6,
  //  C10,
  C8,
  C9,
 
  C11,
  C12,
  // C14,
  C13,
  C15,
  C16,
  // C17,


  
];

const HorizontalParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateX = (scrollY) => {

    const minScroll = 0;
    const maxScroll = 2000;
    const minX = 0;
    const maxX = -2000;

    return (scrollY - minScroll) * ((maxX - minX) / (maxScroll - minScroll)) + minX;
  };

  const x = calculateX(scrollY);

  return (
    <div className="horizontal-parallax">
      <div className="images-container" style={{ transform: `translateX(${x}px)` }}>
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalParallax;