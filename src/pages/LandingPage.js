import React from 'react';
import { Hero } from '../components/Hero';
import { Footer } from '../Animations/Footer';
import { EncyclopediaLanding } from '../components/EncyclopediaLanding';
import { GalleryLanding } from '../components/GalleryLanding';

import './landingPage.css';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="landing__content">
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqu
        </p>
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
      <GalleryLanding />
      <div className="landing__content-two">
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqu
        </p>
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqu
        </p>
      </div>
      <div className="hanna"></div>
      <EncyclopediaLanding />

      <div className="landing__contribute">
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqu
        </p>
      </div>
      <Footer />
    </>
  );
};
