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
      <div className="heading__container">
        <span>
          <svg
            viewBox="0 0 914 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M827.462 37.0851C827.462 37.0851 122 7.99999 41.9992 47.7234C-38.0012 87.4468 20.9998 148 50.9998 155C80.9998 162 778 193 822 173C866 153 931.395 74.851 857 37.0851C782.605 -0.680893 149.999 24 56.044 56.7659C-37.9113 89.5319 27.0879 166 56.044 173C85 180 825.394 178.234 864.394 162C903.394 145.766 916.451 85.0035 879.999 47.7234C860.071 27.342 812.897 19 812.897 19"
              className="path"
            />
          </svg>
        </span>
        <Link to="/encyclopedia">
          <h2 className="encyclopedia">encyclopedia</h2>
        </Link>
      </div>
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
