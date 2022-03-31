import React from 'react';
import './encyclopedia.css';

// import toniMorrison from '../assets/GettyImages_514704088_header.jpg';
// import audryLorde from '../assets/gettyimages-694880169-copy.jpg';
// import simoneDeBeauvoir from '../assets/simone-de-beauvoir.png';

export const Encyclopedia = () => {
  return (
    <section className="encyclopedia__wrapper">
      <h1 className="encyclopedia__title">Encyclopedia</h1>
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
        <div className="encyclopedia__arrow">
          <div className="first__opty-arrow">
            <div className="first__arrow-line">
              {/* <div class="scroll">
              <p className="arrow__text">scroll</p>
            </div> */}
            </div>
            <div className="first__arrow-head"></div>
          </div>
          <div className="second__opty-arrow">
            <div className="second__arrow-line">
              {/* <div class="scroll">
              <p className="arrow__text">scroll</p>
            </div> */}
            </div>
            <div className="second__arrow_head"></div>
          </div>
        </div>
        {/* <div>
          <div className="polaroid__frame">
            <img className="polaroid__photo" src={toniMorrison} alt="#" />
          </div>
        </div> */}
      </div>
      <div className="horizontal__scroll-p">Pick your poison</div>
      {/* <div className="hanna"></div> */}
    </section>
  );
};
