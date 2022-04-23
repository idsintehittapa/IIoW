import React from 'react';
import bell from '../assets/h1380-0cce1.jpg';
import woolf from '../assets/087dacdb43f5bf5cca958d9100145272.jpg';
import woolfOverlay from '../assets/Woolf_Overlay.png';
import bellOverlay from '../assets/bellOverlay.png';

import '../components/galleryLanding.css';

export const GalleryLanding = () => {
  return (
    <section className="gallery__wrapping">
      <div className="gallery__images">
        <div className="img__wrapper">
          <img className="landing__woolf" src={woolf} alt="virginia woolf" />
          <img
            alt="virginia woolf overlay"
            className="overlay"
            src={woolfOverlay}
          />
        </div>
        <div className="img__wrapper">
          <img className="landing__bell" src={bell} alt="bell hooks" />
          <img
            alt="bell hooks overlay"
            className="overlay__bell"
            src={bellOverlay}
          />
        </div>
      </div>
    </section>
    // <section className="gallery__wrapping">
    //   <div className="gallery__images">
    //     <div className="woolf__wrapper">
    //       <img className="landing__woolf" src={woolf} alt="##" />
    //       <img alt="##" className="overlay" src={woolfOverlay} />
    //     </div>
    //     <div className="woolf2__wrapper">
    //       <img className="landing__woolf2" src={bell} alt="##" />
    // <img alt="##" className="overlay" src={woolfOverlay} />
    // </div>
    //   </div>
    // </section>
  );
};
