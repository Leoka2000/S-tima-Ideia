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

const HorizontalParallax2 = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [1, 0], [0, -1000], {ease: circOut });

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
