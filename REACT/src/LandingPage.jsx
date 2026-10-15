import {
  ArrowRight,
  FileText,
  Handshake,
  House,
  PanelsTopLeft,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './landing.css';

const services = [
  { icon: TrendingUp, label: <>Investimentos<br />imobiliários</> },
  { icon: PanelsTopLeft, label: <>Projetos<br />personalizados</> },
  { icon: Handshake, label: <>Compra e venda<br />de imóveis</> },
  { icon: UsersRound, label: <>Assessoria<br />completa</> },
  { icon: House, label: <>Imóveis<br />selecionados</> },
  { icon: FileText, label: <>Suporte em<br />todas as etapas</> },
];

function RegionPanel({ region, location, to, image, side }) {
  return (
    <section
      className={`landingRegion landingRegion-${side}`}
      style={{ '--region-image': `url("${image}")` }}
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
          to="/azul"
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
          <span>Sobre</span>
          <span>Serviços</span>
          <span>Conteúdo</span>
          <span>Contato</span>
        </nav>
      </header>

      <div className="landingServices" aria-label="Serviços Casas & Cases">
        {services.map(({ icon: Icon, label }, index) => (
          <div className="landingService" key={index}>
            <Icon size={34} strokeWidth={1.35} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
