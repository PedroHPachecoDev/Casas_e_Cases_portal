import { MessageCircle } from 'lucide-react';

export function CtaSection({ blueTheme = false, content }) {
  const section = content ?? {
    kicker: `Casas & Cases ${blueTheme ? 'Ilha' : 'Serra'}`,
    title: 'Não vendemos apenas imóveis. Ajudamos você a tomar decisões que façam sentido.',
    description: 'Comprar, vender, investir ou desenvolver uma propriedade começa por entender o que você quer construir para a sua vida e para o seu patrimônio.',
    buttonLabel: 'Falar com a C&C',
    buttonHref: 'https://wa.me/5548999358523',
  };

  return (
    <section className="cta" id="contato">
      <div className="ctain">
        <div>
          <div className="kicker">{section.kicker}</div>
          <h2>{section.title}</h2>
        </div>

        <div>
          <p>{section.description}</p>
          <a className="button" href={section.buttonHref} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> {section.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
