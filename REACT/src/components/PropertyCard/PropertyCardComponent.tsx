import type { Property } from '../../data/serraContent';
import './style.css';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCardComponent({ property }: PropertyCardProps) {
  return (
    <article className="card">
      {property.image ? (
        <img src={property.image} alt={property.title} loading="lazy" />
      ) : (
        <div className="cardPlaceholder" aria-label={property.title} />
      )}
      <div className="cardBody">
        <div className="tag">{property.tag}</div>
        <h3>{property.title}</h3>
        <p>{property.text}</p>
        <div className="meta">
          <span>{property.meta}</span>
          <strong>{property.value}</strong>
        </div>
      </div>
    </article>
  );
}
