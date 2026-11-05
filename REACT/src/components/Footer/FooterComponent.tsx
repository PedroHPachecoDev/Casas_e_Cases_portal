import { FaInstagram } from 'react-icons/fa';
import type { SerraPageContent } from '../../data/serraContent';
import { BrandComponent } from '../Brand/BrandComponent';
import './style.css';

type FooterProps = {
  blueTheme?: boolean;
  content: SerraPageContent['footer'];
};

export function FooterComponent({ blueTheme = false, content }: FooterProps) {
  return (
    <footer>
      <div className="footgrid">
        <div>
          <BrandComponent blueTheme={blueTheme} />
          <p>{content.description}</p>
          <div className="socials">
            <a href={content.instagramHref} aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <div className="footTitle">{content.navigationTitle}</div>
          <ul>
            {content.links.map(([label, href]) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footTitle">{content.contactTitle}</div>
          <ul>
            <li>
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </li>
            <li>
              <a href={`tel:${content.phone.replace(/\D/g, '')}`}>{content.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">© 2026 Casas &amp; Cases {blueTheme ? 'Ilha' : 'Serra'}</div>
    </footer>
  );
}
