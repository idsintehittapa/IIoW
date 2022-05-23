import React, { useLayoutEffect, useRef, useState } from 'react';
import './footer.css';

export const Footer = () => {
  const [show, doShow] = useState({
    footer: false
  });
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const footerDiv = topPos(scrollRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (footerDiv < scrollPos) {
        doShow((state) => ({ ...state, footer: true }));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer
      ref={scrollRef}
      className={`${show.footer ? 'landing__footer' : ''}`}
    >
      <div className="footer__eye-container">
        <p>Don't be a stranger...</p>
      </div>
    </footer>
  );
};
