import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/content';

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="slides" aria-label="Imagens em destaque">
        {heroSlides.map((slide, index) => (
          <div
            className={`slide ${index === active ? 'active' : ''}`}
            key={slide.image}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7,17,28,.78), rgba(7,17,28,.12)), url(${slide.image})`,
            }}
            aria-hidden={index !== active}
          />
        ))}
      </div>

      <div className="heroCopy">
        <div className="eyebrow">{heroSlides[active].label}</div>
        <h1>{heroSlides[active].text}</h1>
        <p>Uma curadoria de residências, propriedades e lotes para quem procura mais do que um endereço.</p>
        <a className="heroLink" href="#propriedades">
          Conheça a curadoria <ArrowRight size={16} />
        </a>
      </div>

      <div className="heroControls">
        <button
          onClick={() => setActive((active - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <span>
          {String(active + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => setActive((active + 1) % heroSlides.length)}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <a className="scrollhint" href="#autorais">
        Explore <ArrowDown size={14} />
      </a>
    </section>
  );
}
