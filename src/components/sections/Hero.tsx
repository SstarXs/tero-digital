import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg"></div>
      
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-container">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Soluciones Digitales</span>
          </div>
          
          <h1 className="hero-title">
            Un sitio web es la línea entre una <span>pyme local</span> y una empresa <span>internacional</span>
          </h1>
          
          <p className="hero-subtitle">
            En <span>Tero Digital Solutions</span>, fusionamos profesionalismo y confianza para ofrecer soluciones tecnológicas que impulsan tu negocio al siguiente nivel. Somos tu socio estratégico en el mundo digital.
          </p>
          
          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">
              Contactanos ahora
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#servicios" className="btn-secondary">
              Nuestras Habilidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;