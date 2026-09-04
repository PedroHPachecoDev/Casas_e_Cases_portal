import { ArrowRight } from 'lucide-react';
import { images } from '../data/content';

export function FeatureSection() {
  return (
    <section className="featureStrip" id="institucional">
      <div className="featureGrid">
        <img src={images.paisagemP4} alt="Paisagem da Serra Catarinense" loading="lazy" />
        <div>
          <div className="kicker">O jeito C&C de olhar</div>
          <h2>Uma propriedade começa muito antes da chave.</h2>
          <p>
            Nosso trabalho é aproximar pessoas de lugares que tenham verdade. Olhamos para arquitetura, paisagem,
            contexto e para o que cada escolha pode construir ao longo do tempo.
          </p>
          <a className="textLink lightLink" href="#contato">
            Conheça a Casas & Cases <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
