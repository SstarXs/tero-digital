import React from 'react';

const projects = [
  {
    title: "Diseñar el sitio web para tu negocio",
    category: "Diseño Web",
    image: "/assets/proyecto1.png",
    description: "Podemos diseñar el sitio web para que tu negocio crezca."
  },
  {
    title: "Creacion de tienda Online.",
    category: "Tiendas Digitales",
    image: "/assets/proyecto2.png",
    description: "Podemos crear tu tienda para ampliar tu negocio internacionalmente."
  },
  {
    title: "Administración y automatizacion",
    category: "Administracion",
    image: "/assets/proyecto3.png",
    description: "Podemos administrar y organizar diferentes aspectos de tu empresa, como desarrollar graficas o archivos."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="portfolio">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="portfolio-header">
          <h2 className="portfolio-subtitle">Con lo que trabajamos</h2>
          <h3 className="portfolio-title">¿Que podemos hacer por vos?</h3>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800";
                  }}
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">
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