
import React from 'react';
import { SPONSORS } from '../constants';
import GlitchText from './GlitchText';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-[#030406]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GlitchText 
            text="INDUSTRIAL PARTNERS" 
            tag="h2" 
            className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-[#00f2ff]/50" 
          />
          <div className="h-[1px] w-12 bg-[#00f2ff]/30 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {SPONSORS.map(sponsor => (
              <a 
                key={sponsor.id} 
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-8 md:p-12 bg-[#05070a] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="h-16 md:h-24 flex items-center justify-center mb-6 relative z-10 w-full px-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 brightness-0 invert" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const textFallback = document.createElement('span');
                        textFallback.innerText = sponsor.name;
                        textFallback.className = "fallback-text text-white font-orbitron font-bold text-sm md:text-lg tracking-widest text-center";
                        parent.appendChild(textFallback);
                      }
                    }}
                  />
                </div>
                
                <span className="font-mono-space text-[9px] text-slate-500 tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 group-hover:text-[#00f2ff] transition-all relative z-10">
                  {sponsor.name}
                </span>
                
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00f2ff]/20 -translate-y-full group-hover:translate-y-[400%] transition-transform duration-[1500ms] ease-linear"></div>
              </a>
            ))}
            
            <div className="group relative flex flex-col items-center justify-center p-8 md:p-12 bg-[#05070a]/50 border-2 border-dashed border-white/5 hover:border-[#7000ff]/30 transition-all">
               <div className="text-2xl font-orbitron font-bold text-white/10 group-hover:text-[#7000ff]/60 transition-colors">TBA</div>
               <span className="mt-4 font-mono-space text-[9px] text-slate-600 tracking-widest uppercase text-center">
                 More Partners<br/>Initializing...
               </span>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-center font-mono-space text-[10px] text-slate-700 tracking-[0.5em] uppercase">
          Neural Link Infrastructure Support
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
