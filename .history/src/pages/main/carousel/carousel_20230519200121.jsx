import c1 from '../../../assets/carousel/c1.jpg'
import c2 from '../../../assets/carousel/c2.jpg'
import c3 from '../../../assets/carousel/c3.jpg'
import c4 from '../../../assets/carousel/c4.jpg'
import c5 from '../../../assets/carousel/c5.jpg'
import c6 from '../../../assets/carousel/c6.jpg'
import c7 from '../../../assets/carousel/c7.jpg'
import c8 from '../../../assets/carousel/c8.jpg'
import c9 from '../../../assets/carousel/c9.jpg'
import c10 from '../../../assets/carousel/c10.jpg'
import { motion, useTransform, useScroll, circOut } from "framer-motion";
import React from "react";
import './carousel.css'

const images = [
  "https://picsum.photos/id/237/300/200",
  "https://picsum.photos/id/238/300/200",
  "https://picsum.photos/id/239/300/200",
  "https://picsum.photos/id/240/300/200",
  "https://picsum.photos/id/241/300/200",
  "https://picsum.photos/id/242/300/200",
  "https://picsum.photos/id/243/300/200",
  "https://picsum.photos/id/244/300/200",
  "https://picsum.photos/id/245/300/200",
  "https://picsum.photos/id/246/300/200",
];

const HorizontalParallax = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress,
     [0, 1],
      [0, -1000],
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
