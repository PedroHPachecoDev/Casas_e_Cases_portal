import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/content';

export function Hero({
  slides = heroSlides,
  description = 'Uma curadoria de residências, propriedades e lotes para quem procura mais do que um endereço.',
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides]);

  const activeSlide = slides[active % slides.length];

  return (
    <section className="hero" id="inicio">
      <div className="slides" aria-label="Imagens em destaque">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === active ? 'active' : ''}`}
            key={slide.image}
            style={{
              backgroundImage: `linear-gradient(90deg, var(--hero-shade), rgba(7,17,28,.12)), url(${slide.image})`,
            }}
            aria-hidden={index !== active}
          />
        ))}
      </div>

      <div className="heroCopy">
        <div className="eyebrow">{activeSlide.label}</div>
        <h1>{activeSlide.text}</h1>
        <p>{description}</p>
        <a className="heroLink" href="#propriedades">
          Conheça a curadoria <ArrowRight size={16} />
        </a>
      </div>

      <div className="heroControls">
        <button
          onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <span>
          {String((active % slides.length) + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => setActive((current) => (current + 1) % slides.length)}
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
