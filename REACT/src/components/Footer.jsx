import { Camera } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { Brand } from './Brand';

export function Footer({ blueTheme = false, content }) {
  const section = content ?? {
    description: 'Curadoria imobiliária na Serra Catarinense.',
    instagramHref: 'https://www.instagram.com/casasecasesserra/',
    navigationTitle: 'Navegação',
    links: [
      ['Propriedades', '#propriedades'],
      ['Lotes', '#lotes'],
      ['Autorais', '#autorais'],
      ['Institucional', '#institucional'],
    ],
    contactTitle: 'Contato',
    email: 'contato@casasecases.com.br',
    phone: '+55 (48) 99935-8523',
  };

  return (
    <footer>
      <div className="footgrid">
        <div>
          <Brand blueTheme={blueTheme} />
          <p>{section.description}</p>
          <div className="socials">
            <a href={section.instagramHref} aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <div className="footTitle">{section.navigationTitle}</div>
          <ul>
            {section.links.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footTitle">{section.contactTitle}</div>
          <ul>
            <li><a href={`mailto:${section.email}`}>{section.email}</a></li>
            <li><a href={`tel:${section.phone.replace(/\D/g, '')}`}>{section.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© 2026 Casas & Cases {blueTheme ? 'Ilha' : 'Serra'}</div>
    </footer>
  );
}
