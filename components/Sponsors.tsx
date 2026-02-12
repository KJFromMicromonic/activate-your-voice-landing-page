
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

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPONSORS.map(sponsor => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-12 md:p-16 bg-[#05070a] border border-white/10 hover:border-[#00f2ff]/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/5 via-transparent to-[#7000ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Logo Container */}
                <div className="h-48 md:h-64 flex items-center justify-center mb-8 relative z-10 w-full">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ${sponsor.name === 'STATION F' ? '' : 'brightness-0 invert'}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const textFallback = document.createElement('span');
                        textFallback.innerText = sponsor.name;
                        textFallback.className = "fallback-text text-white font-orbitron font-bold text-2xl md:text-3xl tracking-widest text-center";
                        parent.appendChild(textFallback);
                      }
                    }}
                  />
                </div>

                {/* Partner Info */}
                <div className="text-center relative z-10 space-y-3">
                  <h3 className="font-orbitron font-bold text-lg text-white/90 group-hover:text-[#00f2ff] transition-colors tracking-wider uppercase">
                    {sponsor.name}
                  </h3>

                  {/* Description based on sponsor */}
                  <p className="text-slate-400 font-mono-space text-sm leading-relaxed max-w-md mx-auto">
                    {sponsor.name === 'Speechmatics' && 'Real-time speech recognition and voice AI technology'}
                    {sponsor.name === 'Backboard.io' && 'AI-powered development tools to streamline your workflow'}
                    {sponsor.name === 'STATION F' && "World's largest startup campus and innovation hub"}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-[#00f2ff]/60 group-hover:text-[#00f2ff] transition-colors text-xs font-mono-space pt-2">
                    <span>🔗</span>
                    <span className="tracking-wider">{sponsor.url.replace('https://', '').replace('www.', '')}</span>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#7000ff] group-hover:w-full transition-all duration-700"></div>
              </a>
            ))}

            {/* TBA Card */}
            <div className="group relative flex flex-col items-center justify-center p-12 md:p-16 bg-[#05070a]/50 border-2 border-dashed border-white/10 hover:border-[#7000ff]/30 transition-all">
               <div className="text-5xl font-orbitron font-bold text-white/10 group-hover:text-[#7000ff]/40 transition-colors mb-6">TBA</div>
               <span className="font-mono-space text-sm text-slate-600 tracking-widest uppercase text-center">
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
