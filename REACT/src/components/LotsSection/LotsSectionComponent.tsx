import { ArrowRight } from 'lucide-react';
import type { SerraPageContent } from '../../data/serraContent';
import { SectionHeadingComponent } from '../SectionHeading/SectionHeadingComponent';
import './style.css';

type LotsSectionProps = {
  content: SerraPageContent['lots'];
};

export function LotsSectionComponent({ content }: LotsSectionProps) {
  return (
    <section className="contentSection lotsSection" id="lotes">
      <SectionHeadingComponent kicker={content.kicker} title={content.title}>
        {content.description}
      </SectionHeadingComponent>

      <div className="lots">
        <article className="lotHero">
          <img src={content.heroImage} alt={content.heroImageAlt} loading="lazy" />
          <div className="lotText">
            <div className="tag">{content.heroTag}</div>
            <h3>{content.heroTitle}</h3>
            <p>{content.heroDescription}</p>
            <a className="button darkButton" href="#contato">
              {content.heroLinkLabel} <ArrowRight size={15} />
            </a>
          </div>
        </article>

        <div className="lotSide">
          {content.sideItems.map((item) => (
            <article className="mini" key={item.title}>
              <div className="tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.linkLabel ? (
                <a className="textLink" href="#contato">
                  {item.linkLabel} <ArrowRight size={15} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
