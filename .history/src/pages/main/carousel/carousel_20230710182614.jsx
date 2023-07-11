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




import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import React, { useRef } from 'react';
import './carousel.css';

const HorizontalParallax = () => {
  const containerRef = useRef(null);
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  useDrag(
    ({ offset: [x] }) => {
      set({ x });
    },
    { domTarget: containerRef }
  );

  return (
    <div className="horizontal-parallax">
      <animated.div
        className="images-container"
        ref={containerRef}
        style={{
          transform: x.interpolate((value) => `translateX(${value}px)`),
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default HorizontalParallax;
