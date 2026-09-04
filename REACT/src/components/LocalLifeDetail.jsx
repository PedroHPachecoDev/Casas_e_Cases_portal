import { Link, useParams } from 'react-router-dom';
import { localLife } from '../data/content';

export function LocalLifeDetail() {
  const { slug } = useParams();
  const item = localLife.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <section className="localLifeDetail">
        <div className="localLifeDetailInner">
          <p className="eyebrow">Vida local</p>
          <h1>Imagem não encontrada.</h1>
          <Link to="/" className="buttonLink">
            Voltar para o início
          </Link>
        </div>
      </section>
    );
  }

  const gallery = item.gallery ?? [{ src: item.image, caption: item.title }];

  return (
    <section className="localLifeDetail">
      <div className="localLifeDetailHeader">
        <Link to="/" className="backLink">
          ← Voltar
        </Link>
      </div>

      <div className="localLifeDetailLayout">
        <div className="localLifeDetailGallery">
          {gallery.map((photo, index) => (
            <figure key={`${photo.src}-${index}`} className="localLifeDetailPhoto">
              {/\.(mp4|mov|webm)$/i.test(photo.src) ? (
                <video
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(event) => event.currentTarget.play().catch(() => {})}
                  onMouseLeave={(event) => {
                    event.currentTarget.pause();
                    event.currentTarget.currentTime = 0;
                  }}
                >
                  <source src={photo.src} />
                  Seu navegador não suporta vídeos.
                </video>
              ) : (
                <img src={photo.src} alt={`${item.title} - ${index + 1}`} loading="lazy" />
              )}
              {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
            </figure>
          ))}
        </div>

        <aside className="localLifeDetailInfo">
          <div className="tag">{item.tag}</div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>

          {item.highlights?.length ? (
            <ul className="localLifeHighlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
