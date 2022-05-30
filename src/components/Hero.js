import React from 'react';
import './hero.css';

export const Hero = () => {
  const scrollGalleryImages = [
    {
      src: require('../assets/toniMorrison.png'),
      alt: 'toni morrison'
    },
    {
      src: require('../assets/audryLorde.png'),
      alt: 'audry lorde'
    },
    {
      src: require('../assets/Sylvia-Plath.png'),
      alt: 'sylvia plath'
    },
    {
      src: require('../assets/Liv_Stromquist.png'),
      alt: 'liv stromquist'
    },
    {
      src: require('../assets/crf.png'),
      alt: 'caroline ringskog ferrada-noli'
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
      src: require('../assets/simone-de-beauvoir.png'),
      alt: 'simone de beauvoir'
    },
    {
      src: require('../assets/Sylvia-Plath.png'),
      alt: 'sylvia plath'
    },
    {
      src: require('../assets/toniMorrison.png'),
      alt: 'toni morrison'
    },
    {
      src: require('../assets/audryLorde.png'),
      alt: 'audry lorde'
    },
    {
      src: require('../assets/sontage.jpg'),
      alt: 'susan sontage'
    },
    {
      src: require('../assets/Liv_Stromquist.png'),
      alt: 'liv stromquist'
    },
    {
      src: require('../assets/simone-de-beauvoir.png'),
      alt: 'simone de beauvoir'
    }
  ];

  return (
    <>
      <header className="hero__image">
        {scrollGalleryImages.map((image, index) => (
          <div className="hero__gallery" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
        <h1 className="hero__title">Intellectual Influence of Women</h1>
      </header>
    </>
  );
};
