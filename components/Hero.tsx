
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tero-dark/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tero-red/10 border border-tero-red/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-tero-red animate-pulse"></span>
            <span className="text-tero-red text-xs font-bold uppercase tracking-widest">Expertos en Transformación Digital</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-tero-dark leading-[1.1] mb-8">
            Un sitio web es la línea entre una <span className="text-tero-red underline decoration-tero-red/30">pyme local</span> y una empresa <span className="italic">internacional</span>.
          </h1>
          
          <p className="text-xl text-tero-dark/80 mb-12 max-w-2xl leading-relaxed font-medium">
            En <span className="text-tero-dark font-bold">Tero Digital Solutions</span>, fusionamos profesionalismo y confianza para ofrecer soluciones tecnológicas que impulsan tu negocio al siguiente nivel. Somos tu socio estratégico en el mundo digital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a 
              href="#contacto" 
              className="group w-full sm:w-auto px-10 py-5 bg-tero-dark text-tero-cream rounded-2xl font-bold hover:bg-tero-dark-light transition-all flex items-center justify-center gap-3 shadow-2xl shadow-tero-dark/20"
            >
              Contactanos ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-tero-dark border-2 border-tero-dark/20 rounded-2xl font-bold hover:bg-tero-dark/5 transition-all text-center"
            >
              Nuestras Habilidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
