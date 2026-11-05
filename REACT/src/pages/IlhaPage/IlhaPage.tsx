import { HeroComponent } from '../../components/Hero/HeroComponent';
import { PropertySectionComponent } from '../../components/PropertySection/PropertySectionComponent';
import { FeatureSectionComponent } from '../../components/FeatureSection/FeatureSectionComponent';
import { LocalLifeSectionComponent } from '../../components/LocalLifeSection/LocalLifeSectionComponent';
import { LocalLifeDetailComponent } from '../../components/LocalLifeDetail/LocalLifeDetailComponent';
import { LotsSectionComponent } from '../../components/LotsSection/LotsSectionComponent';
import { CtaSectionComponent } from '../../components/CtaSection/CtaSectionComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import {
  ilhaAuthorialProperties,
  ilhaHeroSlides,
  ilhaLocalLife,
  ilhaPageCopy,
  ilhaProperties,
} from '../../data/ilhaContent';
import './style.css';

type IlhaPageProps = {
  detail?: boolean;
};

export function IlhaPage({ detail = false }: IlhaPageProps) {
  const copy = ilhaPageCopy;

  return (
    <>
      {detail ? (
        <LocalLifeDetailComponent
          items={ilhaLocalLife}
          homePath="/ilha"
          content={copy.detail}
        />
      ) : (
        <main>
          <HeroComponent slides={ilhaHeroSlides} description={copy.heroDescription} />

          <PropertySectionComponent
            id="autorais"
            kicker={copy.authorial.kicker}
            title={copy.authorial.title}
            description={copy.authorial.description}
            items={ilhaAuthorialProperties}
          />

          <FeatureSectionComponent content={copy.feature} />

          <PropertySectionComponent
            id="propriedades"
            kicker={copy.properties.kicker}
            title={copy.properties.title}
            description={copy.properties.description}
            items={ilhaProperties}
          />

          <LocalLifeSectionComponent
            items={ilhaLocalLife}
            basePath="/ilha"
            content={copy.localLife}
          />

          <LotsSectionComponent content={copy.lots} />
        </main>
      )}

      <CtaSectionComponent content={copy.cta} />
      <FooterComponent blueTheme content={copy.footer} />
    </>
  );
}
