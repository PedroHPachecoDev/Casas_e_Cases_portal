import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { ilhaPageCopy } from './data/ilhaContent';
import { serraPageCopy } from './data/serraContent';
import { IlhaPage } from './pages/IlhaPage/IlhaPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { SerraPage } from './pages/SerraPage/SerraPage';

export function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const blueTheme = location.pathname.startsWith('/ilha');
  const landingPage = location.pathname === '/';

  useEffect(() => {
    document.title = landingPage
      ? 'Casas & Cases | Serra e Ilha'
      : blueTheme
        ? ilhaPageCopy.documentTitle
        : serraPageCopy.documentTitle;
  }, [blueTheme, landingPage]);

  return (
    <div className="siteShell" data-theme={blueTheme ? 'blue' : 'default'}>
      {!landingPage && (
        <HeaderComponent
          open={menuOpen}
          setOpen={setMenuOpen}
          blueTheme={blueTheme}
          content={blueTheme ? ilhaPageCopy.header : serraPageCopy.header}
        />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ilha" element={<IlhaPage />} />
        <Route path="/ilha/vida-local/:slug" element={<IlhaPage detail />} />
        <Route path="/serra" element={<SerraPage />} />
        <Route path="/vida-local/:slug" element={<SerraPage detail />} />
      </Routes>
    </div>
  );
}

export default App;
