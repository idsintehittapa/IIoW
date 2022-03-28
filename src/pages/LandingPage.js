import React from 'react';
import { Hero } from '../components/Hero';
import './landingPage.css';
import { LandingPageImage } from '../Animations/LandingPageImage';
import { EncyclopediaLanding } from '../components/EncyclopediaLanding';
import { GalleryLanding } from '../components/GalleryLanding';

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
      <LandingPageImage />
      <EncyclopediaLanding />
      <div className="landing__contribute">
        <p className="landing__p">
          <span className="landing__p-span">(xxxx)</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqu
        </p>
      </div>
      <footer>
        <p>share</p>
        <p>tweet</p>
        <p>facebook</p>
        <p>linkedIn</p>
      </footer>
    </>
  );
};
