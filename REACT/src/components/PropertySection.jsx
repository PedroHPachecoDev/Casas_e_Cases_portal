import { PropertyCard } from './PropertyCard';
import { SectionHeading } from './SectionHeading';

export function PropertySection({ id, kicker, title, description, items }) {
  return (
    <section className="contentSection" id={id}>
      <SectionHeading kicker={kicker} title={title}>
        {description}
      </SectionHeading>
      <div className="cards">
        {items.map((property) => (
          <PropertyCard key={property.title} property={property} />
        ))}
      </div>
    </section>
  );
}
