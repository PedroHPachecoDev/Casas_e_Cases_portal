import { Camera } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer>
      <div className="footgrid">
        <div>
          <Brand />
          <p>Curadoria imobiliária na Serra Catarinense.</p>
          <div className="socials">
            <a href="https://www.instagram.com/casasecasesserra/" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <div className="footTitle">Navegação</div>
          <ul>
            <li><a href="#propriedades">Propriedades</a></li>
            <li><a href="#lotes">Lotes</a></li>
            <li><a href="#autorais">Autorais</a></li>
            <li><a href="#institucional">Institucional</a></li>
          </ul>
        </div>

        <div>
          <div className="footTitle">Contato</div>
          <ul>
            <li><a href="mailto:contato@casasecases.com.br">contato@casasecases.com.br</a></li>
            <li><a href="tel:+5548999358523">+55 (48) 99935-8523</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© 2026 Casas & Cases Serra</div>
    </footer>
  );
}
