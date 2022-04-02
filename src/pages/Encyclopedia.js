import React from 'react';
import { motion } from 'framer-motion';

import './encyclopedia.css';

export const Encyclopedia = () => {
  const blackBox = {
    initial: {
      height: '100vh',
      bottom: 0
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        easeInOut: [0.87, 0.5, 1, 1]
      }
    }
  };

  return (
    <>
      <motion.div
        className="test"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
      <section className="encyclopedia__wrapper">
        <h1 className="encyclopedia__title">Encyclopedia</h1>
        <div>
          <div className="arrow__container-encyclopedia ">
            <div className="col s3 m3 l3">
              <div className="first__opty-arrow">
                <div className="first__arrow-line">
                  <div className="arrow__text-wrapper">
                    <p className="arrow__text">choose</p>
                  </div>
                </div>
                <div className="first__arrow-head"></div>
                <div className="second__opty-arrow">
                  <div className="second__arrow-line"></div>
                  <div className="second__arrow-head"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="encyclopedia__searchbar">
          <div className="encyclopedia__searchbar-filter">
            <p>nr 1</p>
            <p>nr 2</p>
            <p>nr 3</p>
            <p>nr 4</p>
          </div>
          <div className="encyclopedia__searchbar-search">
            <p>SEARCH</p>
          </div>
        </div>
        <div className="encyclopedia__photos">
          <p>helooo</p>
        </div>
      </section>
    </>
  );
};
