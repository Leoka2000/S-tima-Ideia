import C2 from '../../../assets/carousel/c2.jpg'
import C5 from '../../../assets/carousel/c5.jpg'
import C7 from '../../../assets/carousel/c7.jpg'
import C11 from '../../../assets/carousel/c11.jpg'
import C15 from '../../../assets/carousel/c15.jpg'




import React, {useState, useEffect} from "react";
import './carousel.css'

const images = [
  


  
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