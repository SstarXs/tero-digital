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
  <div className="bg-tero-cream p-8 rounded-[2rem] border border-tero-dark/10 shadow-lg shadow-tero-dark/5 flex flex-col h-full hover:border-tero-red/30 transition-all duration-300">
    <div className="w-14 h-14 bg-tero-dark/5 rounded-2xl flex items-center justify-center text-tero-red mb-8">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-tero-dark mb-4">{title}</h3>
    <p className="text-tero-dark/70 text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="space-y-3 pt-6 border-t border-tero-dark/10">
      {tags.map((tag, i) => (
        <div key={i} className="flex items-center gap-2 text-xs font-bold text-tero-dark/60 uppercase tracking-tight">
          <CheckCircle2 className="w-4 h-4 text-tero-red" />
          {tag}
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-tero-cream-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-tero-red font-black uppercase tracking-[0.2em] text-sm mb-4">Nuestro Expertise</h2>
          <h3 className="text-4xl font-extrabold text-tero-dark sm:text-5xl">Soluciones Digitales Integrales</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Desarrollo Web Profesional"
            description="Potenciamos tu presencia online con sitios web optimizados, rápidos y diseñados para convertir visitantes en clientes internacionales."
            icon={<Code className="w-7 h-7" />}
            tags={['Tienda Digital', 'UI/UX Design', 'React / Next.js']}
          />
          <ServiceCard 
            title="Inteligencia Operativa"
            description="Fusionamos la logística avanzada con el análisis de datos para la generación de reportes estratégicos que optimizan tu negocio."
            icon={<Database className="w-7 h-7" />}
            tags={['Tango Gestión', 'Generación de Reportes', 'Power BI']}
          />
          <ServiceCard 
            title="Soporte IT & Sistemas"
            description="Garantizamos la continuidad operativa de tu empresa mediante soporte técnico especializado y seguridad de sistemas."
            icon={<Shield className="w-7 h-7" />}
            tags={['Reparación de PC', 'Seguridad Digital', 'Soporte Técnico']}
          />
          <ServiceCard 
            title="Comunicación Digital"
            description="Elevamos el impacto visual de tu marca a través de producción multimedia y estrategias de comunicación efectivas."
            icon={<MonitorPlay className="w-7 h-7" />}
            tags={['Edición Multimedia', 'Redes Sociales', 'Estrategia de Marca']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;