import C1 from '../../../assets/carousel/c1.jpg'
import C4 from '../../../assets/carousel/c4.jpg'
import C6 from '../../../assets/carousel/c6.jpg'
import C12 from '../../../assets/carousel/c12.jpg'
import C16 from '../../../assets/carousel/c16.jpg'
import C20 from '../../../assets/carousel/c20.jpg'


const images = [
 C1,
 C4,
 C6,
 C12,
 C16,
 C20
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
    const maxScroll = 3000;
    const minX = -2000;
    const maxX = 0;

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
