import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Form = () => {
  const { ref: imgRef, inView } = useInView();
  const { scrollYProgress } = useViewportScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const scrollPosition = window.pageYOffset;
        const bgPosition = `${scrollPosition}px`;
        imgRef.current.style.backgroundPosition = `0px ${bgPosition}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, imgRef]);

  return (
    <section id="form" className="form-section">
      <div className="cauan-img" ref={imgRef}></div>
      {/* Rest of your form code */}
    </section>
  );
};

export default Form;
