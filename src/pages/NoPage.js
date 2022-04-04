import React from 'react';
// import Hannah from '../assets/HannahArendt2.png';
import './noPage.css';

export const NoPage = () => {
  return (
    <>
      <div className="noPage__wrapper">
        <div className="speech-bubble">
          <p className="speech__content">
            This is not the page you are looking for
          </p>
        </div>
        {/* <div className="hannah__wrapper">
          <img src={Hannah} alt="hannah" className="hannah__404" />
        </div> */}
      </div>
    </>
  );
};
