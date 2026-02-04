import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <img 
              src="/assets/logo.png" 
              alt="Tero Logo" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div style="background-color: #c21f40; padding: 0.5rem; border-radius: 0.5rem; color: white; font-weight: bold;">T</div>';
              }}
            />
          </div>
          <span className="brand-text">
            <span style={{ color: '#c21f40' }}>Tero</span> Digital Solutions
          </span>
        </div>
        <div className="navbar-links">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Soluciones</a>
          <a href="#proyectos" className="nav-link">Nuestras Propuestas</a>
        </div>
        <a href="#contacto" className="nav-button">
          Contactanos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;