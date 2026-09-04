export function PropertyCard({ property }) {
  return (
    <article className="card">
      <img src={property.image} alt={property.title} loading="lazy" />
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
