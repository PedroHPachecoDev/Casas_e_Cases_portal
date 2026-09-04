import { Mail, Menu, X } from 'lucide-react';
import { Brand } from './Brand';

export function Header({ open, setOpen }) {
  const links = [
    ['Propriedades', '#propriedades'],
    ['Lotes', '#lotes'],
    ['Autorais', '#autorais'],
    ['Institucional', '#institucional'],
  ];

  return (
    <header className="topbar">
      <Brand />
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
        <a href="mailto:contato@casasecases.com.br" className="navContact">
          <Mail size={14} /> Contato
        </a>
        <a href="#contato" className="pill">
          Conversar
        </a>
      </nav>
    </header>
  );
}
