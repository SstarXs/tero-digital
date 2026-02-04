import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                  src="/assets/logo.png" 
                  alt="Tero Logo" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div style="background-color: #c21f40; padding: 0.75rem; border-radius: 0.75rem; color: white; font-weight: bold; font-size: 1.25rem;">T</div>';
                  }}
                />
              </div>
              <span className="footer-brand-text">Tero <span style={{ color: '#c21f40' }}>Digital</span></span>
            </div>
            <h4 className="footer-title">¿Listo para volar más alto con nosotros?</h4>
            <div className="contact-grid">
              <div>
                <p className="contact-label">Escríbenos</p>
                <a href="mailto:terodigitalsolutions@gmail.com" className="contact-link">
                  terodigitalsolutions@gmail.com
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div>
                <p className="contact-label">Llámanos</p>
                <a href="tel:+541165766186" className="contact-link">
                  +54 11 6576-6186
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Tero Digital Solutions.
          </p>
          <div className="footer-links">
            <Link to="/privacidad" className="footer-link">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="footer-link">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;