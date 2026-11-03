type BrandProps = {
  blueTheme?: boolean;
};

export function BrandComponent({ blueTheme = false }: BrandProps) {
  const region = blueTheme ? 'Ilha' : 'Serra';

  return (
    <a className="brand" href="#inicio" aria-label={`Casas & Cases ${region}, início`}>
      <span className="brandMark">
        C<span>&</span>C
      </span>
      <span className="slogan">
        Casas & Cases
        <br />
        {region}
      </span>
    </a>
  );
}
