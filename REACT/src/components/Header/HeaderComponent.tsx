import { useEffect, useRef } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandComponent } from '../Brand/BrandComponent';
import './style.css';

type HeaderLink = [string, string];

type HeaderContent = {
  links?: HeaderLink[];
  contactEmail?: string;
  contactLabel?: string;
  actionLabel?: string;
};

type HeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  blueTheme?: boolean;
  content?: HeaderContent;
};

export function HeaderComponent({ open, setOpen, blueTheme = false, content }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const links = content?.links ?? [
    ['Propriedades', '#propriedades'],
    ['Lotes', '#lotes'],
    ['Autorais', '#autorais'],
    ['Institucional', '#institucional'],
  ] as HeaderLink[];

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <header className="topbar">
      <BrandComponent blueTheme={blueTheme} />
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
        ref={toggleRef}
        className="menuToggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="main-nav"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        ref={navRef}
        id="main-nav"
        className={open ? 'nav navOpen' : 'nav'}
        aria-hidden={!open}
      >
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <span className="language">
          PT <span aria-hidden="true">⌄</span>
        </span>
        <a
          href={`mailto:${content?.contactEmail ?? 'contato@casasecases.com.br'}`}
          className="navContact"
          onClick={() => setOpen(false)}
        >
          <Mail size={14} /> {content?.contactLabel ?? 'Contato'}
        </a>
        <a href="#contato" className="pill" onClick={() => setOpen(false)}>
          {content?.actionLabel ?? 'Conversar'}
        </a>
      </nav>
    </header>
  );
}
