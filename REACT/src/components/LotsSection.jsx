import { ArrowRight } from 'lucide-react';
import { images } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function LotsSection({ content }) {
  const section = content ?? {
    kicker: 'Lotes',
    title: 'Para quem prefere começar pelo potencial.',
    description: 'Terrenos selecionados não apenas por metragem, mas por implantação, paisagem, acesso e possibilidades reais de desenvolvimento.',
    heroImage: images.paisagemP3,
    heroImageAlt: 'Paisagem de um terreno na serra',
    heroTag: 'Serra Catarinense',
    heroTitle: 'Terrenos com horizonte aberto',
    heroDescription: 'Escolhas para quem quer construir com calma, intenção e uma relação verdadeira com a paisagem.',
    heroLinkLabel: 'Ver oportunidades',
    sideItems: [
      {
        tag: 'Condomínios',
        title: 'Lotes selecionados',
        description: 'Opções em condomínios de Rancho Queimado para diferentes perfis de projeto e investimento.',
        linkLabel: 'Ver lotes',
      },
      {
        tag: 'Consultoria C&C',
        title: 'Você vê o terreno. Nós vemos o que ele pode se tornar.',
        description: 'Análise de implantação, potencial construtivo e estratégia antes da decisão de compra.',
      },
    ],
  };

  return (
    <section className="contentSection lotsSection" id="lotes">
      <SectionHeading kicker={section.kicker} title={section.title}>
        {section.description}
      </SectionHeading>

      <div className="lots">
        <article className="lotHero">
          <img src={section.heroImage} alt={section.heroImageAlt} loading="lazy" />
          <div className="lotText">
            <div className="tag">{section.heroTag}</div>
            <h3>{section.heroTitle}</h3>
            <p>{section.heroDescription}</p>
            <a className="button darkButton" href="#contato">
              {section.heroLinkLabel} <ArrowRight size={15} />
            </a>
          </div>
        </article>

        <div className="lotSide">
          {section.sideItems.map((item) => (
            <article className="mini" key={item.title}>
              <div className="tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.linkLabel ? (
                <a className="textLink" href="#contato">
                  {item.linkLabel} <ArrowRight size={15} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
