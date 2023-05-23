import { useState, useEffect } from 'react';
import './portfolio.css';
import { COMMON } from '../../data/database-common';
import LoopContent from './loop-content';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Portfolio = () => {
  const controls = useAnimation();
  const [filterType, setFilterType] = useState('');
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const { ref, inView } = useInView();

  const handleFilter = (value, index) => {
    setFilterType(value);
    setSelectedButtonIndex(index);
  };
  const photos = COMMON;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className='portfolio-section'>
      <header>
        <h1>Tattoo Portfolio</h1>
        <p>
          Praesent ut vitae tempus sollicitudin pharetra ipsum molestie
          scelerisque aliquam vitae magna
        </p>
      </header>
      <div className='buttons-wrapper-portfolio'>
        <button
          className={selectedButtonIndex === 0 ? 'selected' : ''}
          onClick={() => handleFilter('', 0)}
        >
          Todas
        </button>
        <button
          className={selectedButtonIndex === 1 ? 'selected' : ''}
          onClick={() => handleFilter('colored', 1)}
        >
          Colorida
        </button>
        <button
          className={selectedButtonIndex === 2 ? 'selected' : ''}
          onClick={() => handleFilter('black and white', 2)}
        >
          Preto e Branco
        </button>
      </div>
      <main ref={ref} className='photos-wrapper'>
        {photos
          .filter((val) => filterType === '' || val.type === filterType)
          .map((val, key) => {
            return (
              <motion.div
                initial='hidden'
                animate={controls}
                variants={{
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                      delay: i * 0.3
                    },
                  }),
                  hidden: {
                    opacity: 0,
                    y: 100,
                  },
                }}
                custom={key}
              >
                <LoopContent data={val} keyNumber={key} id={val.id} />
              </motion.div>
            );
          })}
      </main>
    </section>
  );
};

export default Portfolio;
