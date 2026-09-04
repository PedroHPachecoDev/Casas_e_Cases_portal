import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header open={menuOpen} setOpen={setMenuOpen} />

      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        <Route path="/vida-local/:slug" element={<LocalLifeDetail />} />
      </Routes>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
