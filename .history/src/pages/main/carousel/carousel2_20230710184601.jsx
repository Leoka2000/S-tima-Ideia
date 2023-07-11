import React, {useState, useEffect} from "react";
import './carousel.css'
import C1 from '../../../assets/carousel/c1.jpg'
import C2 from '../../../assets/carousel/c2.jpg'
import C13 from '../../../assets/carousel/c4.jpg'
import C4 from '../../../assets/carousel/c5.jpg'
import C5 from '../../../assets/carousel/c6.jpg'
import C6 from '../../../assets/carousel/c7.jpg'
// import C7 from '../../../assets/carousel/c10.jpg'
import C8 from '../../../assets/carousel/c11.jpg'
import C9 from '../../../assets/carousel/c12.jpg'
// import C10 from '../../../assets/carousel/c13.jpg'
import C11 from '../../../assets/carousel/c15.jpg'
import C12 from '../../../assets/carousel/c16.jpg'
// import C13 from '../../../assets/carousel/c17.jpg'
import C15 from '../../../assets/carousel/c19.jpg'
import C16 from '../../../assets/carousel/c21.jpg'




const images = [
  C1,
  C5,
  C4,
  // C7,
  C2,
  C6,
  C13,
  C8,
  C9,
  // C10,
  C11,
  C12,
  // C13,
  C15,
  C16,
  // C17,
  // C18,
];

const HorizontalParallax2 = () => {
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

export default HorizontalParallax2;
