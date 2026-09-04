import { ArrowRight } from 'lucide-react';
import { images } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function LotsSection() {
  return (
    <section className="contentSection lotsSection" id="lotes">
      <SectionHeading kicker="Lotes" title="Para quem prefere começar pelo potencial.">
        Terrenos selecionados não apenas por metragem, mas por implantação, paisagem, acesso e possibilidades reais de desenvolvimento.
      </SectionHeading>

      <div className="lots">
        <article className="lotHero">
          <img src={images.paisagemP3} alt="Paisagem de um terreno na serra" loading="lazy" />
          <div className="lotText">
            <div className="tag">Serra Catarinense</div>
            <h3>Terrenos com horizonte aberto</h3>
            <p>
              Escolhas para quem quer construir com calma, intenção e uma relação verdadeira com a paisagem.
            </p>
            <a className="button darkButton" href="#contato">
              Ver oportunidades <ArrowRight size={15} />
            </a>
          </div>
        </article>

        <div className="lotSide">
          <article className="mini">
            <div className="tag">Condomínios</div>
            <h3>Lotes selecionados</h3>
            <p>
              Opções em condomínios de Rancho Queimado para diferentes perfis de projeto e investimento.
            </p>
            <a className="textLink" href="#contato">
              Ver lotes <ArrowRight size={15} />
            </a>
          </article>

          <article className="mini">
            <div className="tag">Consultoria C&C</div>
            <h3>Você vê o terreno. Nós vemos o que ele pode se tornar.</h3>
            <p>
              Análise de implantação, potencial construtivo e estratégia antes da decisão de compra.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
