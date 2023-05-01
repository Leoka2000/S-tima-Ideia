import React, { useState } from 'react';
import './portfolio.css';
import { COMMON } from '../../data/database-common';
import LoopContent from './loop-content';

const Portfolio = () => {
  const photos = COMMON;
  const [filterType, setFilterType] = useState('');
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleFilter = (value, index) => {
    setFilterType(value);
    setSelectedButtonIndex(index);
  };

  console.log(filterType);
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
          Colored
        </button>
        <button
          className={selectedButtonIndex === 2 ? 'selected' : ''}
          onClick={() => handleFilter('black and white', 2)}
        >
          Black and White
        </button>
      </div>
      <main className='photos-wrapper'>
        {photos
          .filter((val) => filterType === '' || val.type === filterType)
          .map((val, key) => {
            return (
              <div key={key}>
                <LoopContent data={val} keyNumber={key} id={val.id} />
              </div>
            );
          })}
      </main>
    </section>
  );
};

export default Portfolio;
