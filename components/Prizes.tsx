
import React from 'react';
import { PRIZES } from '../constants';
import GlitchText from './GlitchText';

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7000ff]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GlitchText 
            text="THE REWARDS" 
            tag="h2" 
            color="#00f2ff" 
            className="text-3xl md:text-5xl font-orbitron font-bold mb-4" 
          />
          <p className="text-slate-500 font-mono-space text-sm tracking-widest">Excellence in vocal intelligence rewarded.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRIZES.map((prize) => (
            <div 
              key={prize.id} 
              className={`relative p-10 glass-card border flex flex-col ${prize.isGrand ? 'border-[#00f2ff]/40 shadow-[0_0_40px_rgba(0,242,255,0.05)]' : 'border-white/5'} transition-all group`}
            >
              {prize.isGrand && (
                <div className="absolute top-0 right-0 bg-[#00f2ff] text-[#05070a] font-mono-space text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
                  Primary_Grant
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-orbitron font-bold mb-2 tracking-tight ${prize.isGrand ? 'text-[#00f2ff]' : 'text-white'}`}>
                  {prize.category}
                </h3>
                <div className={`h-[1px] w-8 ${prize.isGrand ? 'bg-[#00f2ff]' : 'bg-slate-700'}`}></div>
              </div>

              <p className="text-slate-400 text-sm mb-12 leading-relaxed flex-grow">
                {prize.description}
              </p>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono-space text-[#7000ff] tracking-[0.3em] uppercase opacity-60">Allocation</span>
                <span className={`text-3xl font-audiowide tracking-tighter ${prize.isGrand ? 'text-white' : 'text-[#00f2ff]'}`}>
                  {prize.value}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f2ff] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 border border-white/5 bg-white/[0.01] text-center max-w-4xl mx-auto">
          <p className="text-slate-500 font-mono-space text-[11px] tracking-[0.2em] leading-loose">
            PROTOTYPE_STIPEND // API_SUBSIDIES // GLOBAL_COLLECTIVE_CREDENTIALS <br/>
            STATUS: ACTIVE // SELECTION_CRITERIA: INNOVATION_SYNERGY_LATENCY
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
