import { HeroComponent } from '../../components/Hero/HeroComponent';
import { PropertySectionComponent } from '../../components/PropertySection/PropertySectionComponent';
import { FeatureSectionComponent } from '../../components/FeatureSection/FeatureSectionComponent';
import { LocalLifeSectionComponent } from '../../components/LocalLifeSection/LocalLifeSectionComponent';
import { LocalLifeDetailComponent } from '../../components/LocalLifeDetail/LocalLifeDetailComponent';
import { LotsSectionComponent } from '../../components/LotsSection/LotsSectionComponent';
import { CtaSectionComponent } from '../../components/CtaSection/CtaSectionComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import {
  authorialProperties,
  heroSlides,
  localLife,
  properties,
  serraPageCopy,
} from '../../data/serraContent';
import './style.css';

type SerraPageProps = {
  detail?: boolean;
};

export function SerraPage({ detail = false }: SerraPageProps) {
  const copy = serraPageCopy;

  return (
    <>
      {detail ? (
        <LocalLifeDetailComponent
          items={localLife}
          homePath="/serra"
          content={copy.detail}
        />
      ) : (
        <main>
          <HeroComponent slides={heroSlides} description={copy.heroDescription} />

          <PropertySectionComponent
            id="autorais"
            kicker={copy.authorial.kicker}
            title={copy.authorial.title}
            description={copy.authorial.description}
            items={authorialProperties}
          />

          <FeatureSectionComponent content={copy.feature} />

          <PropertySectionComponent
            id="propriedades"
            kicker={copy.properties.kicker}
            title={copy.properties.title}
            description={copy.properties.description}
            items={properties}
          />

          <LocalLifeSectionComponent
            items={localLife}
            basePath="/serra"
            content={copy.localLife}
          />

          <LotsSectionComponent content={copy.lots} />
        </main>
      )}

      <CtaSectionComponent content={copy.cta} />
      <FooterComponent blueTheme={false} content={copy.footer} />
    </>
  );
}
