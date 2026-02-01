import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Diseñar el sitio web para tu negocio",
    category: "Diseño Web",
    image: "assets/proyecto1.jpg",
    description: "Podemos diseñar el sitio web para que tu negocio crezca."
  },
  {
    title: "Creacion de tienda Online.",
    category: "Tiendas Digitales",
    image: "assets/proyecto2.jpg",
    description: "Podemos crear tu tienda para ampliar tu negocio internacionalmente."
  },
  {
    title: "Administración y automatizacion",
    category: "Administracion",
    image: "assets/proyecto3.jpg",
    description: "Podemos administrar y organizar diferentes aspectos de tu empresa, como desarrollar graficas o archivos."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-32 bg-tero-dark tero-dark-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-tero-red font-black uppercase tracking-[0.2em] text-sm mb-4">Con lo que trabajamos</h2>
          <h3 className="text-4xl font-extrabold text-tero-cream sm:text-5xl">¿Que podemos hacer por vos?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-tero-dark-light rounded-[2.5rem] overflow-hidden border border-white/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800"; // Fallback visual
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tero-dark via-tero-dark/20 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-tero-red text-[10px] font-black text-white uppercase tracking-widest mb-4">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-tero-cream mb-4">{project.title}</h4>
                <p className="text-tero-cream/60 text-sm leading-relaxed line-clamp-4 mb-6">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;