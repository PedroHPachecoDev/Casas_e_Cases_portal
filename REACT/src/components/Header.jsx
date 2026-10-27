import { Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand } from './Brand';

export function Header({ open, setOpen, blueTheme, content }) {
  const links = content?.links ?? [
    ['Propriedades', '#propriedades'],
    ['Lotes', '#lotes'],
    ['Autorais', '#autorais'],
    ['Institucional', '#institucional'],
  ];

  return (
    <header className="topbar">
      <Brand blueTheme={blueTheme} />
      <div
        className={`locationSwitch ${blueTheme ? '' : 'locationSwitchSerra'}`}
        role="group"
        aria-label="Selecionar versão do site"
      >
        <Link
          to="/ilha"
          className="locationOption"
          aria-current={blueTheme ? 'page' : undefined}
        >
          Ilha
        </Link>
        <Link
          to="/serra"
          className="locationOption"
          aria-current={blueTheme ? undefined : 'page'}
        >
          Serra
        </Link>
      </div>
      <button
        className="menuToggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav navOpen' : 'nav'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <span className="language">
          PT <span aria-hidden="true">⌄</span>
        </span>
        <a href={`mailto:${content?.contactEmail ?? 'contato@casasecases.com.br'}`} className="navContact">
          <Mail size={14} /> {content?.contactLabel ?? 'Contato'}
        </a>
        <a href="#contato" className="pill">
          {content?.actionLabel ?? 'Conversar'}
        </a>
      </nav>
    </header>
  );
}
