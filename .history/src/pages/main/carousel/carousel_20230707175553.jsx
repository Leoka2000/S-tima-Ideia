import C1 from '../../../assets/carousel/c1.jpg'
import C2 from '../../../assets/carousel/c2.jpg'
import C3 from '../../../assets/carousel/c4.jpg'
import C4 from '../../../assets/carousel/c5.jpg'
import C5 from '../../../assets/carousel/c6.jpg'
import C6 from '../../../assets/carousel/c7.jpg'
import C7 from '../../../assets/carousel/c10.jpg'
import C8 from '../../../assets/carousel/c11.jpg'
import C9 from '../../../assets/carousel/c12.jpg'
import C10 from '../../../assets/carousel/c13.jpg'
import C11 from '../../../assets/carousel/c15.jpg'
import C12 from '../../../assets/carousel/c16.jpg'
import C13 from '../../../assets/carousel/c17.jpg'
import C15 from '../../../assets/carousel/c19.jpg'
import C16 from '../../../assets/carousel/c21.jpg'




import { motion, useTransform, useScroll, circOut } from "framer-motion";
import React from "react";
import './carousel.css'

const images = [
  C1,
  C5,
  C4,
  C3,
  C7,
  C2,
  C6,
  C8,
  C9,
  C10,
  C11,
  C12,
  // C14,
  C13,
  C15,
  C16,
  // C17,


  
];

const HorizontalParallax = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress,
     [0, 1],
      [0, -2000],
      { clamp: false, velocity: 0.1, ease: circOut });

  return (
    <div className="horizontal-parallax">
      <motion.div
        className="images-container"
        style={{ x }}
      >
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalParallax;
