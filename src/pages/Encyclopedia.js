import React from 'react';
import { motion } from 'framer-motion';

import './encyclopedia.css';
import { Thinkers } from '../components/Thinkers';

export const Encyclopedia = () => {
  //TODO: page Transition only renders once
  // TODO: page Transition css instead?

  // const blackBox = {
  //   initial: {
  //     height: '100vh',
  //     bottom: 0
  //   },
  //   animate: {
  //     height: 0,
  //     transition: {
  //       duration: 1.5,
  //       easeInOut: [0.87, 0.5, 1, 1]
  //     }
  //   }
  // };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* // className="test" // initial="initial" // animate="animate" // variants=
      {blackBox} */}
      <section className="encyclopedia__wrapper">
        <div className="encyclopedia__wrapper-title">
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
        </div>
        <Thinkers />
      </section>
    </motion.div>
  );
};
