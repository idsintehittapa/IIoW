import React from 'react';
import { Hero } from '../components/Hero';
import bell from '../assets/h1380-0cce1.jpg';
import woolf from '../assets/087dacdb43f5bf5cca958d9100145272.jpg';
import './landingPage.css';
import { LandingPageImage } from '../Animations/LandingPageImage';

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
      <div className="landing__images">
        <img className="landing_woolf" src={woolf} alt="##" />
        <img className="landing_bell" src={bell} alt="##" />
      </div>
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
      <div className="landing_encyclopedia">
        <h2 className="encyclopedia">encyclopedia</h2>
      </div>
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
