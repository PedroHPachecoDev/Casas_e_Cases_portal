import { ArrowRight } from 'lucide-react';
import { images } from '../data/content';

export function FeatureSection({ content }) {
  const section = content ?? {
    image: images.paisagemP4,
    imageAlt: 'Paisagem da Serra Catarinense',
    kicker: 'O jeito C&C de olhar',
    title: 'Uma propriedade começa muito antes da chave.',
    description: 'Nosso trabalho é aproximar pessoas de lugares que tenham verdade. Olhamos para arquitetura, paisagem, contexto e para o que cada escolha pode construir ao longo do tempo.',
    linkLabel: 'Conheça a Casas & Cases',
  };

  return (
    <section className="featureStrip" id="institucional">
      <div className="featureGrid">
        <img src={section.image} alt={section.imageAlt} loading="lazy" />
        <div>
          <div className="kicker">{section.kicker}</div>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <a className="textLink lightLink" href="#contato">
            {section.linkLabel} <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
