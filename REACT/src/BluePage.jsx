import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PropertySection } from './components/PropertySection';
import { FeatureSection } from './components/FeatureSection';
import { LocalLifeDetail } from './components/LocalLifeDetail';
import { LotsSection } from './components/LotsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { SectionHeading } from './components/SectionHeading';
import {
  ilhaAuthorialProperties,
  ilhaHeroSlides,
  ilhaLocalLife,
  ilhaPageCopy,
  ilhaProperties,
} from './data/ilhaContent';
import './blue.css';

function BlueLocalLifeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = ilhaLocalLife[activeIndex];
  const section = ilhaPageCopy.localLife;

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + ilhaLocalLife.length) % ilhaLocalLife.length);

  const showNext = () =>
    setActiveIndex((current) => (current + 1) % ilhaLocalLife.length);

  return (
    <section className="localLifeSection" id="vida-local">
      <SectionHeading kicker={section.kicker} title={section.title}>
        {section.description}
      </SectionHeading>

      <div className="localLifeCarousel">
        <button type="button" className="carouselArrow" onClick={showPrevious} aria-label="Imagem anterior">
          &#10094;
        </button>

        <Link className="localLifeFeature" to={`/ilha/vida-local/${currentItem.slug}`}>
          <img src={currentItem.image} alt={currentItem.title} loading="lazy" />
          <div className="localLifeFeatureBody">
            <div className="tag">{currentItem.tag}</div>
            <h3>{currentItem.title}</h3>
            <p>{currentItem.text}</p>
          </div>
        </Link>

        <button type="button" className="carouselArrow" onClick={showNext} aria-label="Próxima imagem">
          &#10095;
        </button>
      </div>
    </section>
  );
}

function BlueHome() {
  const copy = ilhaPageCopy;

  return (
    <main>
      <Hero slides={ilhaHeroSlides} description={copy.heroDescription} />

      <PropertySection
        id="autorais"
        kicker={copy.authorial.kicker}
        title={copy.authorial.title}
        description={copy.authorial.description}
        items={ilhaAuthorialProperties}
      />

      <FeatureSection content={copy.feature} />

      <PropertySection
        id="propriedades"
        kicker={copy.properties.kicker}
        title={copy.properties.title}
        description={copy.properties.description}
        items={ilhaProperties}
      />

      <BlueLocalLifeSection />
      <LotsSection content={copy.lots} />
    </main>
  );
}

export function BluePage({ detail = false }) {
  return (
    <>
      {detail ? (
        <LocalLifeDetail
          items={ilhaLocalLife}
          homePath="/ilha"
          content={ilhaPageCopy.detail}
        />
      ) : (
        <BlueHome />
      )}
      <CtaSection blueTheme content={ilhaPageCopy.cta} />
      <Footer blueTheme content={ilhaPageCopy.footer} />
    </>
  );
}