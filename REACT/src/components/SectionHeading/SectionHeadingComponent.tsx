type SectionHeadingProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
};

export function SectionHeadingComponent({ kicker, title, children }: SectionHeadingProps) {
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
