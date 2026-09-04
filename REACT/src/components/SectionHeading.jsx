export function SectionHeading({ kicker, title, children }) {
  return (
    <div className="sectionHead">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}
