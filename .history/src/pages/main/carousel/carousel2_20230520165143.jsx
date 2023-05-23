import { motion, useTransform, useScroll, circOut } from "framer-motion";
import React from "react";
import './carousel.css'
import C1 from '../../../assets/carousel/c10.jpg'
import C2 from '../../../assets/carousel/c9.jpg'
import C3 from '../../../assets/carousel/c8.jpg'
import C4 from '../../../assets/carousel/c7.jpg'
import C5 from '../../../assets/carousel/c6.jpg'
import C6 from '../../../assets/carousel/c5.jpg'
import C7 from '../../../assets/carousel/c4.jpg'
import C8 from '../../../assets/carousel/c3.jpg'
import C9 from '../../../assets/carousel/c2.jpg'
import C10 from '../../../assets/carousel/c1.jpg'

const images = [
  C4,
  C1,
  C2,
  C3,
  C5,
  C6,
  C7,
  C8,
  C9,
  C10,
];

const HorizontalParallax2 = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [1, 0], [0, -2000], {ease: circOut });

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

export default HorizontalParallax2;
