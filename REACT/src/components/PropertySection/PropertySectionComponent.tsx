import type { Property } from '../../data/serraContent';
import { SectionHeadingComponent } from '../SectionHeading/SectionHeadingComponent';
import { PropertyCardComponent } from '../PropertyCard/PropertyCardComponent';
import './style.css';

type PropertySectionProps = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  items: Property[];
};

export function PropertySectionComponent({ id, kicker, title, description, items }: PropertySectionProps) {
  return (
    <section className="contentSection" id={id}>
      <SectionHeadingComponent kicker={kicker} title={title}>
        {description}
      </SectionHeadingComponent>
      <div className="cards">
        {items.map((property) => (
          <PropertyCardComponent key={property.title} property={property} />
        ))}
      </div>
    </section>
  );
}
