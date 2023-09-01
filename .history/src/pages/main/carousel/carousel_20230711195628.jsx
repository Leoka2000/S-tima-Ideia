import C2 from '../../../assets/carousel/c2.jpg'
import C5 from '../../../assets/carousel/c5.jpg'
import C7 from '../../../assets/carousel/c7.jpg'
import C11 from '../../../assets/carousel/c11.jpg'
import C15 from '../../../assets/carousel/c15.jpg'
import C17 from '../../../assets/carousel/c17.jpg'
import C19 from '../../../assets/carousel/c19.jpg'
import C21 from '../../../assets/carousel/c21.jpg'





import React, {useState, useEffect} from "react";
import './carousel.css'

const images = [
  C2,
 C5,
 C7,
 C11,
 C15,
 C17,
C19,
C21

  
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