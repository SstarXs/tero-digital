import React from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  MonitorPlay,
  CheckCircle2
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => (
  <div className="service-card">
    <div className="card-icon">
      {icon}
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">
      {description}
    </p>
    <div className="card-tags">
      {tags.map((tag, i) => (
        <div key={i} className="tag-item">
          <CheckCircle2 size={16} />
          {tag}
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="services">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-subtitle">Nuestro Expertise</h2>
          <h3 className="section-title">Soluciones Digitales Integrales</h3>
        </div>

        <div className="services-grid">
          <ServiceCard 
            title="Desarrollo Web Profesional"
            description="Potenciamos tu presencia online con sitios web optimizados, rápidos y diseñados para convertir visitantes en clientes internacionales."
            icon={<Code size={28} />}
            tags={['Tienda Digital', 'UI/UX Design', 'React / Next.js']}
          />
          <ServiceCard 
            title="Inteligencia Operativa"
            description="Fusionamos la logística avanzada con el análisis de datos para la generación de reportes estratégicos que optimizan tu negocio."
            icon={<Database size={28} />}
            tags={['Tango Gestión', 'Generación de Reportes', 'Power BI']}
          />
          <ServiceCard 
            title="Soporte IT & Sistemas"
            description="Garantizamos la continuidad operativa de tu empresa mediante soporte técnico especializado y seguridad de sistemas."
            icon={<Shield size={28} />}
            tags={['Reparación de PC', 'Seguridad Digital', 'Soporte Técnico']}
          />
          <ServiceCard 
            title="Comunicación Digital"
            description="Elevamos el impacto visual de tu marca a través de producción multimedia y estrategias de comunicación efectivas."
            icon={<MonitorPlay size={28} />}
            tags={['Edición Multimedia', 'Redes Sociales', 'Estrategia de Marca']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;