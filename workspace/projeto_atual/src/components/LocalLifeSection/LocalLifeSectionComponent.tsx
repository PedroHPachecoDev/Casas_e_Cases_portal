import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LocalLifeItem } from '../../data/serraContent';
import { SectionHeadingComponent } from '../SectionHeading/SectionHeadingComponent';
import './style.css';

type LocalLifeSectionContent = {
  kicker: string;
  title: string;
  description: string;
};

type LocalLifeSectionProps = {
  items: LocalLifeItem[];
  basePath: string;
  content: LocalLifeSectionContent;
};

export function LocalLifeSectionComponent({ items, basePath, content }: LocalLifeSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = items[activeIndex];

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length);

  const showNext = () =>
    setActiveIndex((current) => (current + 1) % items.length);

  return (
    <section className="localLifeSection" id="vida-local">
      <SectionHeadingComponent kicker={content.kicker} title={content.title}>
        {content.description}
      </SectionHeadingComponent>

      <div className="localLifeCarousel">
        <button type="button" className="carouselArrow" onClick={showPrevious} aria-label="Imagem anterior">
          &#10094;
        </button>

        <Link className="localLifeFeature" to={`${basePath}/vida-local/${currentItem.slug}`}>
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
