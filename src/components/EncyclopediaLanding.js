import React from 'react';
import { Link } from 'react-router-dom';
import './encyclopediaLanding.css';

const scrollGalleryImages = [
  {
    src: require('../assets/GettyImages_514704088_header.jpg'),
    alt: 'toni morrison'
  },
  {
    src: require('../assets/gettyimages-694880169-copy.jpg'),
    alt: 'audry lorde'
  },
  {
    src: require('../assets/Sylvia-Plath.jpg'),
    alt: 'sylvia plath'
  },
  {
    src: require('../assets/Liv_Stromquist.png'),
    alt: 'liv stromquist'
  },
  {
    src: require('../assets/simone-de-beauvoir.png'),
    alt: 'simone de beauvoir'
  },
  {
    src: require('../assets/Butler.jpg'),
    alt: 'judith butler'
  },
  {
    src: require('../assets/bettyF.png'),
    alt: 'betty friedan'
  },
  {
    src: require('../assets/crf.png'),
    alt: 'caroline ringskog ferrada-noli'
  }
];

export const EncyclopediaLanding = () => {
  return (
    <div className="landing_encyclopedia">
      <Link to="/encyclopedia">
        <h2 className="encyclopedia">enter encyclopedia</h2>
      </Link>
      <div className="horizontal__scroll-wrapper">
        <div>
          <p className="horizontal__scroll-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu
          </p>
          <div className="arrow__container">
            <div className="col s3 m3 l3">
              <div className="opty__arrow">
                <div className="arrow__line">
                  <div className="scroll">
                    <p className="arrow__text">scroll</p>
                  </div>
                </div>
                <div className="arrow__head"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal__scroll-gallery">
          {scrollGalleryImages.map((image, index) => (
            <div className="horizontal__scroll-gallery-container" key={index}>
              <img
                className="horizontal__scroll__gallery-img"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
