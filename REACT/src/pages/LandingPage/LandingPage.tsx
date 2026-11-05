import {
  ArrowRight,
  Handshake,
  House,
  PanelsTopLeft,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './style.css';

type ServiceItem = {
  icon: LucideIcon;
  label: React.ReactNode;
};

const services: ServiceItem[] = [
  { icon: TrendingUp, label: <>Parcerias em<br />investimentos imobiliários</> },
  { icon: PanelsTopLeft, label: <>Projetos, execuções<br />e projeções de resultados</> },
  { icon: Handshake, label: <>Compra e venda<br />de imóveis</> },
  { icon: UsersRound, label: <>Intermediação<br />imobiliária</> },
  { icon: House, label: <>Compra e venda<br />de imóveis próprios</> },
];

type RegionPanelProps = {
  region: string;
  location: string;
  to: string;
  image: string;
  side: 'serra' | 'ilha';
};

function RegionPanel({ region, location, to, image, side }: RegionPanelProps) {
  return (
    <section
      className={`landingRegion landingRegion-${side}`}
      style={{ '--region-image': `url("${image}")` } as React.CSSProperties}
      aria-labelledby={`region-${region.toLowerCase()}`}
    >
      <div className="landingRegionCopy">
        <span className="landingRegionEyebrow">Casas &amp; Cases</span>
        <h2 id={`region-${region.toLowerCase()}`}>{region}</h2>
        <span className="landingRegionLocation">{location}</span>
        <Link className="landingExplore" to={to}>
          Explorar C&amp;C {region} <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="landingPage">
      <div className="landingSplit">
        <RegionPanel
          region="Serra"
          location="Rancho Queimado"
          to="/serra"
          image="/img/PAISAGEM/Captura de Tela (83).png"
          side="serra"
        />
        <RegionPanel
          region="Ilha"
          location="Florianópolis e região"
          to="/ilha"
          image="/img/MIRANTE/IMG_8019.JPG"
          side="ilha"
        />
      </div>

      <header className="landingHeader">
        <div className="landingBrand" aria-label="Casas & Cases">
          <House className="landingBrandIcon" strokeWidth={1.35} aria-hidden="true" />
          <span className="landingBrandName">Casas &amp; Cases</span>
          <span className="landingBrandSlogan">
            Mais do que intermediação imobiliária,
            <br />
            ajudamos pessoas a tomar boas decisões.
          </span>
        </div>
        <nav className="landingNav" aria-label="Institucional">
          <span>Contato</span>
        </nav>
      </header>

      <div className="landingServices" aria-label="Serviços Casas & Cases">
        {services.map(({ icon: Icon, label }, index) => (
          <div className="landingService" key={index}>
            <Icon className="landingServiceIcon" size={32} strokeWidth={1.35} aria-hidden="true" />
            <span className="landingServiceLabel">{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
