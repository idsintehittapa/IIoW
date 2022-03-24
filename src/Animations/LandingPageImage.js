import React, { useLayoutEffect, useRef, useState } from 'react';
import './landingPageImage.css';

export const LandingPageImage = () => {
  const [show, doShow] = useState({
    hanna: false
  });
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const hannaDiv = topPos(scrollRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (hannaDiv < scrollPos) {
        doShow((state) => ({ ...state, hanna: true }));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`${show.hanna ? 'landing__img-animation' : ''}`}
      ref={scrollRef}
    ></div>
  );
};
