import React from 'react';
import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-tero-cream pt-32 pb-12 border-t border-tero-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="assets/logo.png" 
                  alt="Tero Logo" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="bg-tero-red p-3 rounded-xl text-white font-bold text-xl">T</div>';
                  }}
                />
              </div>
              <span className="text-3xl font-black text-tero-dark tracking-tighter uppercase">Tero <span className="text-tero-red">Digital</span></span>
            </div>
            <h4 className="text-5xl font-black text-tero-dark mb-10 leading-tight">¿Listo para volar más alto con nosotros?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs font-bold text-tero-dark/40 uppercase tracking-widest">Escríbenos</p>
                <a href="mailto:facundofleitas2805@gmail.com" className="group flex items-center gap-2 text-lg font-bold text-tero-dark hover:text-tero-red transition-colors">
                  terodigitalsolutions@gmail.com
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-tero-dark/40 uppercase tracking-widest">Llámanos</p>
                <a href="tel:+541165766186" className="group flex items-center gap-2 text-lg font-bold text-tero-dark hover:text-tero-red transition-colors">
                  +54 11 6576-6186
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          
        </div>

        <div className="pt-12 border-t border-tero-dark/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-tero-dark/40 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Tero Digital Solutions.
          </p>
          <div className="flex gap-8">
  <Link 
    to="/privacidad"
    className="text-xs font-bold uppercase tracking-widest text-tero-dark/40 hover:text-tero-red transition-colors"
  >
    Política de Privacidad
  </Link>

  <Link 
    to="/terminos"
    className="text-xs font-bold uppercase tracking-widest text-tero-dark/40 hover:text-tero-red transition-colors"
  >
    Términos y Condiciones
  </Link>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;