import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-tero-cream/90 backdrop-blur-md z-50 border-b border-tero-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="@/assets/logo.png" 
                alt="Tero Logo" 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="bg-tero-red p-2 rounded-lg text-white font-bold">T</div>';
                }}
              />
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-tero-dark uppercase">
              <span className="text-tero-red">Tero</span>  Digital  Solutions
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-sm font-bold text-tero-dark/70 hover:text-tero-red transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-bold text-tero-dark/70 hover:text-tero-red transition-colors">Soluciones</a>
            <a href="#proyectos" className="text-sm font-bold text-tero-dark/70 hover:text-tero-red transition-colors">Proyectos</a>
          </div>
          <a 
            href="#contacto" 
            className="bg-tero-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-tero-red-hover transition-all shadow-lg shadow-tero-red/20 active:scale-95"
          >
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;