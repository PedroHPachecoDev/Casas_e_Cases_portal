import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BluePage } from './BluePage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertySection } from './components/PropertySection';
import { FeatureSection } from './components/FeatureSection';
import { LocalLifeSection } from './components/LocalLifeSection';
import { LocalLifeDetail } from './components/LocalLifeDetail';
import { LotsSection } from './components/LotsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { authorialProperties, properties } from './data/content';
import { ilhaPageCopy } from './data/ilhaContent';
import { LandingPage } from './LandingPage';

function OriginalSite({ detail = false }) {
  return (
    <>
      {detail ? (
        <LocalLifeDetail />
      ) : (
        <main>
              <Hero />

              <PropertySection
                id="autorais"
                kicker="Propriedades autorais"
                title="Projetadas para carregar a nossa visão."
                description="Projetos em que a Casas & Cases participa da concepção, desenvolvimento e valorização do ativo, da ideia à experiência final."
                items={authorialProperties}
              />

              <FeatureSection />

              <PropertySection
                id="propriedades"
                kicker="Propriedades"
                title="Casas que merecem ser apresentadas de outra maneira."
                description="Em cada seleção, mostramos a residência, a propriedade como um todo e o contexto em que ela está inserida."
                items={properties}
              />

              <LocalLifeSection />
              <LotsSection />
        </main>
      )}

      <CtaSection />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const blueTheme = location.pathname.startsWith('/azul');
  const landingPage = location.pathname === '/';

  useEffect(() => {
    document.title = landingPage
      ? 'Casas & Cases | Serra e Ilha'
      : blueTheme
        ? ilhaPageCopy.documentTitle
        : 'Casas & Cases Serra | Rancho Queimado';
  }, [blueTheme, landingPage]);

  return (
    <div className="siteShell" data-theme={blueTheme ? 'blue' : 'default'}>
      {!landingPage && (
        <Header
          open={menuOpen}
          setOpen={setMenuOpen}
          blueTheme={blueTheme}
          content={blueTheme ? ilhaPageCopy.header : undefined}
        />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/azul" element={<BluePage />} />
        <Route path="/azul/vida-local/:slug" element={<BluePage detail />} />
        <Route path="/serra" element={<OriginalSite />} />
        <Route path="/vida-local/:slug" element={<OriginalSite detail />} />
      </Routes>
    </div>
  );
}

export default App;
