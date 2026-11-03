import { ArrowRight } from 'lucide-react';
import type { SerraPageContent } from '../../data/serraContent';
import './style.css';

type FeatureSectionProps = {
  content: SerraPageContent['feature'];
};

export function FeatureSectionComponent({ content }: FeatureSectionProps) {
  return (
    <section className="featureStrip" id="institucional">
      <div className="featureGrid">
        <img src={content.image} alt={content.imageAlt} loading="lazy" />
        <div>
          <div className="kicker">{content.kicker}</div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <a className="textLink lightLink" href="#contato">
            {content.linkLabel} <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
