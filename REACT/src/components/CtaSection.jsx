import { MessageCircle } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="cta" id="contato">
      <div className="ctain">
        <div>
          <div className="kicker">Casas & Cases Serra</div>
          <h2>Não vendemos apenas imóveis. Ajudamos você a tomar decisões que façam sentido.</h2>
        </div>

        <div>
          <p>
            Comprar, vender, investir ou desenvolver uma propriedade começa por entender o que você quer construir para a sua vida e para o seu patrimônio.
          </p>
          <a className="button" href="https://wa.me/5548999358523" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Falar com a C&C
          </a>
        </div>
      </div>
    </section>
  );
}
