import { images } from '../../data/images';
import './style.css';

type BrandProps = {
  blueTheme?: boolean;
};

export function BrandComponent({ blueTheme = false }: BrandProps) {
  const region = blueTheme ? 'Ilha' : 'Serra';
  const logo = blueTheme ? images.logoIlha : images.logoSerra;

  return (
    <a className="brand" href="#inicio" aria-label={`Casas & Cases ${region}, início`}>
      <span className="brandMark">
        <img src={logo} alt={`Casas & Cases ${region}`} />
      </span>
    </a>
  );
}
