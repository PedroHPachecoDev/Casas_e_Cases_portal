import { MessageCircle } from 'lucide-react';
import type { SerraPageContent } from '../../data/serraContent';
import './style.css';

type CtaSectionProps = {
  content: SerraPageContent['cta'];
};

export function CtaSectionComponent({ content }: CtaSectionProps) {
  return (
    <section className="cta" id="contato">
      <div className="ctain">
        <div>
          <div className="kicker">{content.kicker}</div>
          <h2>{content.title}</h2>
        </div>

        <div>
          <p>{content.description}</p>
          <a className="button" href={content.buttonHref} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> {content.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
