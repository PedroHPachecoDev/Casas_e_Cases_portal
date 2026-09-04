import { useState } from 'react';
import { Link } from 'react-router-dom';
import { localLife } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function LocalLifeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = localLife[activeIndex];

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + localLife.length) % localLife.length);

  const showNext = () =>
    setActiveIndex((current) => (current + 1) % localLife.length);

  return (
    <section className="localLifeSection" id="vida-local">
      <SectionHeading kicker="Vida local" title="A cidade em seus pequenos detalhes.">
        A identidade de um lugar é feita por pessoas, serviços, comercios e experiências que acontecem no dia a dia, longe do foco do mercado e perto da vida real.
      </SectionHeading>

      <div className="localLifeCarousel">
        <button type="button" className="carouselArrow" onClick={showPrevious} aria-label="Imagem anterior">
          &#10094;
        </button>

        <Link className="localLifeFeature" to={`/vida-local/${currentItem.slug}`}>
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
