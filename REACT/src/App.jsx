import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Camera, ChevronLeft, ChevronRight, Mail, Menu, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = {
  mountain: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85',
  house: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  cabin: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85',
  interior: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  land: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
};

const heroSlides = [
  { image: images.mountain, label: 'A serra como cenário', text: 'Espaços para respirar fundo e viver com mais presença.' },
  { image: images.house, label: 'Arquitetura com propósito', text: 'Propriedades que combinam patrimônio, natureza e uma forma melhor de viver.' },
  { image: images.cabin, label: 'Rancho Queimado · SC', text: 'Uma curadoria de residências, propriedades e lotes para quem procura mais do que um endereço.' },
];

const authorialProperties = [
  { image: images.house, tag: 'Casa autoral', title: 'Casa Araucária', text: 'Uma casa de campo desenhada para acolher encontros e contemplar a paisagem.', meta: 'Rancho Queimado · SC', value: 'Em breve' },
  { image: images.cabin, tag: 'Refúgio', title: 'Casa do Vale', text: 'Arquitetura, silêncio e natureza em uma implantação que respeita o terreno.', meta: 'Serra Catarinense', value: 'Consulte' },
  { image: images.interior, tag: 'Projeto C&C', title: 'Casa Horizonte', text: 'Uma experiência de moradia pensada nos mínimos detalhes para viver a serra.', meta: 'Rancho Queimado · SC', value: 'Em breve' },
];

const properties = [
  { image: images.interior, tag: 'Residência', title: 'Casa Pinhão', text: 'Linhas limpas, materiais naturais e uma vista que muda a cada estação.', meta: '3 quartos · 280 m²', value: 'R$ 2,4 mi' },
  { image: images.cabin, tag: 'Sítio', title: 'Morada do Cedro', text: 'Um refúgio completo entre mata nativa, água e caminhos para explorar.', meta: '5 ha · Rancho Queimado', value: 'R$ 1,8 mi' },
  { image: images.house, tag: 'Casa de campo', title: 'Casa dos Ipês', text: 'O conforto de uma casa contemporânea com o ritmo tranquilo da serra.', meta: '4 quartos · 320 m²', value: 'R$ 2,9 mi' },
];

const localLife = [
  { image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80', tag: 'Mercado', title: 'O bairro em movimento', text: 'Cafés, mercadinhos e conversas ao longo do dia dão ao lugar o seu ritmo mais genuíno.' },
  { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80', tag: 'Cultura', title: 'Encontros que marcam a cidade', text: 'A vida local se revela nas ruas, nos pequenos eventos e nas pessoas que tornam cada esquina familiar.' },
  { image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80', tag: 'Rotina', title: 'Dias com sabor e presença', text: 'A rotina da cidade tem identidade própria: música, comida, paisagem e uma convivência que acontece sem pressa.' },
  { image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80', tag: 'Paisagem', title: 'Um lugar para viver bem', text: 'Entre montanhas, trilhas e calçadas de bairro, a sensação de pertencimento nasce nos detalhes do cotidiano.' },
];

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Casas & Cases Serra, início"><span className="brandMark">C<span>&</span>C</span><span className="slogan">Casas & Cases<br />Serra</span></a>;
}

function Header({ open, setOpen }) {
  const links = [['Propriedades', '#propriedades'], ['Lotes', '#lotes'], ['Autorais', '#autorais'], ['Institucional', '#institucional']];
  return <header className="topbar"><Brand /><button className="menuToggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button><nav className={open ? 'nav navOpen' : 'nav'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<span className="language">PT <span aria-hidden="true">⌄</span></span><a href="mailto:contato@casasecases.com.br" className="navContact"><Mail size={14} /> Contato</a><a href="#contato" className="pill">Conversar</a></nav></header>;
}

function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 7000); return () => clearInterval(timer); }, []);
  return <section className="hero" id="inicio"><div className="slides" aria-label="Imagens em destaque">{heroSlides.map((slide, index) => <div className={`slide ${index === active ? 'active' : ''}`} key={slide.image} style={{ backgroundImage: `linear-gradient(90deg, rgba(7,17,28,.78), rgba(7,17,28,.12)), url(${slide.image})` }} aria-hidden={index !== active} />)}</div><div className="heroCopy"><div className="eyebrow">{heroSlides[active].label}</div><h1>{heroSlides[active].text}</h1><p>Uma curadoria de residências, propriedades e lotes para quem procura mais do que um endereço.</p><a className="heroLink" href="#propriedades">Conheça a curadoria <ArrowRight size={16} /></a></div><div className="heroControls"><button onClick={() => setActive((active - 1 + heroSlides.length) % heroSlides.length)} aria-label="Imagem anterior"><ChevronLeft size={18} /></button><span>{String(active + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span><button onClick={() => setActive((active + 1) % heroSlides.length)} aria-label="Próxima imagem"><ChevronRight size={18} /></button></div><a className="scrollhint" href="#autorais">Explore <ArrowDown size={14} /></a></section>;
}

function SectionHeading({ kicker, title, children }) { return <div className="sectionHead"><div><div className="kicker">{kicker}</div><h2>{title}</h2></div><p>{children}</p></div>; }

function PropertyCard({ property }) { return <article className="card"><img src={property.image} alt={property.title} loading="lazy" /><div className="cardBody"><div className="tag">{property.tag}</div><h3>{property.title}</h3><p>{property.text}</p><div className="meta"><span>{property.meta}</span><strong>{property.value}</strong></div></div></article>; }

function PropertySection({ id, kicker, title, description, items }) { return <section className="contentSection" id={id}><SectionHeading kicker={kicker} title={title}>{description}</SectionHeading><div className="cards">{items.map((property) => <PropertyCard key={property.title} property={property} />)}</div></section>; }

function LotsSection() { return <section className="contentSection lotsSection" id="lotes"><SectionHeading kicker="Lotes" title="Para quem prefere começar pelo potencial.">Terrenos selecionados não apenas por metragem, mas por implantação, paisagem, acesso e possibilidades reais de desenvolvimento.</SectionHeading><div className="lots"><article className="lotHero"><img src={images.land} alt="Paisagem de um terreno na serra" loading="lazy" /><div className="lotText"><div className="tag">Serra Catarinense</div><h3>Terrenos com horizonte aberto</h3><p>Escolhas para quem quer construir com calma, intenção e uma relação verdadeira com a paisagem.</p><a className="button darkButton" href="#contato">Ver oportunidades <ArrowRight size={15} /></a></div></article><div className="lotSide"><article className="mini"><div className="tag">Condomínios</div><h3>Lotes selecionados</h3><p>Opções em condomínios de Rancho Queimado para diferentes perfis de projeto e investimento.</p><a className="textLink" href="#contato">Ver lotes <ArrowRight size={15} /></a></article><article className="mini"><div className="tag">Consultoria C&C</div><h3>Você vê o terreno. Nós vemos o que ele pode se tornar.</h3><p>Análise de implantação, potencial construtivo e estratégia antes da decisão de compra.</p></article></div></div></section>; }

function LocalLifeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = localLife[activeIndex];

  const showPrevious = () => setActiveIndex((current) => (current - 1 + localLife.length) % localLife.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % localLife.length);

  return (
    <section className="localLifeSection" id="vida-local">
      <SectionHeading kicker="Vida local" title="A cidade em seus pequenos detalhes.">A identidade de um lugar é feita por pessoas, serviços, comercios e experiências que acontecem no dia a dia, longe do foco do mercado e perto da vida real.</SectionHeading>
      <div className="localLifeCarousel">
        <button type="button" className="carouselArrow" onClick={showPrevious} aria-label="Imagem anterior">&#10094;</button>
        <Link className="localLifeFeature" to={`/vida-local/${currentItem.slug}`}>
          <img src={currentItem.image} alt={currentItem.title} loading="lazy" />
          <div className="localLifeFeatureBody">
            <div className="tag">{currentItem.tag}</div>
            <h3>{currentItem.title}</h3>
            <p>{currentItem.text}</p>
          </div>
        </Link>
        <button type="button" className="carouselArrow" onClick={showNext} aria-label="Próxima imagem">&#10095;</button>
      </div>
      <div className="localLifeThumbs" aria-label="Navegação por imagens da vida local">
        {localLife.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            className={`thumbButton ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Selecionar imagem ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}

function App() { const [menuOpen, setMenuOpen] = useState(false); return <><Header open={menuOpen} setOpen={setMenuOpen} /><main><Hero /><PropertySection id="autorais" kicker="Propriedades autorais" title="Projetadas para carregar a nossa visão." description="Projetos em que a Casas & Cases participa da concepção, desenvolvimento e valorização do ativo, da ideia à experiência final." items={authorialProperties} /><section className="featureStrip" id="institucional"><div className="featureGrid"><img src={images.mountain} alt="Paisagem da Serra Catarinense" loading="lazy" /><div><div className="kicker">O jeito C&C de olhar</div><h2>Uma propriedade começa muito antes da chave.</h2><p>Nosso trabalho é aproximar pessoas de lugares que tenham verdade. Olhamos para arquitetura, paisagem, contexto e para o que cada escolha pode construir ao longo do tempo.</p><a className="textLink lightLink" href="#contato">Conheça a Casas & Cases <ArrowRight size={15} /></a></div></div></section><PropertySection id="propriedades" kicker="Propriedades" title="Casas que merecem ser apresentadas de outra maneira." description="Em cada seleção, mostramos a residência, a propriedade como um todo e o contexto em que ela está inserida." items={properties} /><LocalLifeSection /><LotsSection /></main><section className="cta" id="contato"><div className="ctain"><div><div className="kicker">Casas & Cases Serra</div><h2>Não vendemos apenas imóveis. Ajudamos você a tomar decisões que façam sentido.</h2></div><div><p>Comprar, vender, investir ou desenvolver uma propriedade começa por entender o que você quer construir para a sua vida e para o seu patrimônio.</p><a className="button" href="https://wa.me/5548999358523" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Falar com a C&C</a></div></div></section><footer><div className="footgrid"><div><Brand /><p>Curadoria imobiliária na Serra Catarinense.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={17} /></a><a href="https://wa.me/5548999358523" aria-label="WhatsApp"><MessageCircle size={17} /></a></div></div><div><b>Navegação</b><a href="#autorais">Propriedades autorais</a><a href="#propriedades">Propriedades</a><a href="#lotes">Lotes</a><a href="#institucional">Institucional</a><a href="#contato">Contato</a></div><div><b>Atendimento</b><span>Mateus Machado</span><span>CRECI/SC 18.494 · CNAI 7.622</span><span>(48) 99935-8523</span><span>Português · English</span></div></div><div className="copyright">© {new Date().getFullYear()} Casas & Cases Serra. Todos os direitos reservados.</div></footer></>; }

export default App;