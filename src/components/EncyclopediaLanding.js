import React from 'react';
import './encyclopediaLanding.css';

import toniMorrison from '../assets/GettyImages_514704088_header.jpg';
import audryLorde from '../assets/gettyimages-694880169-copy.jpg';
import simoneDeBeauvoir from '../assets/simone-de-beauvoir.png';
import sylviaPlath from '../assets/Sylvia-Plath.jpg';

export const EncyclopediaLanding = () => {
  return (
    <div className="landing_encyclopedia">
      <h2 className="encyclopedia">enter encyclopedia</h2>
      <div className="horizontal__scroll-wrapper">
        <div>
          <p className="horizontal__scroll-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu
          </p>
          <div className="arrow__container">
            <div class="col s3 m3 l3">
              <div class="opty__arrow">
                <div class="arrow__line">
                  <div class="scroll">
                    <p className="arrow__text">scroll</p>
                  </div>
                </div>
                <div class="arrow__head"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal__scroll-gallery">
          <div className="horizontal__scroll-gallery-container">
            <img
              className="horizontal__scroll__gallery-img"
              src={toniMorrison}
              alt="toni morrison"
            />
          </div>
          <div className="horizontal__scroll-gallery-container">
            <img
              className="horizontal__scroll__gallery-img"
              src={simoneDeBeauvoir}
              alt="simone de beauvoir"
            />
          </div>
          <div className="horizontal__scroll-gallery-container">
            <img
              className="horizontal__scroll__gallery-img"
              src={sylviaPlath}
              alt="sylvia plath"
            />
          </div>
          <div className="horizontal__scroll-gallery-container">
            <img
              className="horizontal__scroll__gallery-img"
              src={audryLorde}
              alt="audry lorde"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
