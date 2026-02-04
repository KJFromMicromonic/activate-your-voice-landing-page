
import React from 'react';
import { SPEAKERS } from '../constants';
import GlitchText from './GlitchText';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-24 bg-[#05070a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <GlitchText 
              text="THE JUDGES" 
              tag="h2" 
              color="#7000ff" 
              className="text-3xl md:text-5xl font-orbitron font-bold mb-4" 
            />
            <p className="text-gray-400 font-mono-space">Voice leaders evaluating the future of digital resonance.</p>
          </div>
          <button className="px-8 py-3 border border-[#7000ff] text-[#7000ff] hover:bg-[#7000ff] hover:text-white transition-all font-orbitron text-sm tracking-widest uppercase">
            MEET THE JURY
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="group flex flex-col md:flex-row items-center md:items-start text-center md:text-left glass-card p-8 border border-white/5 hover:border-[#7000ff]/30 transition-all duration-500 gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff] to-[#7000ff] rotate-45 scale-105 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-40 h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-none relative z-10 border border-white/10"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#7000ff] px-3 py-1 text-[9px] font-mono-space text-white z-20 tracking-tighter shadow-lg uppercase">
                  {speaker.company}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-orbitron font-bold mb-1 group-hover:text-[#00f2ff] transition-colors uppercase tracking-tight">
                  {speaker.name}
                </h3>
                <p className="text-[#00f2ff] font-mono-space text-xs mb-4 tracking-[0.2em] uppercase">
                  {speaker.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                  {speaker.bio}
                </p>
                
                <div className="flex gap-4 mt-auto opacity-40 group-hover:opacity-100 transition-opacity justify-center md:justify-start">
                  <a href={speaker.socials.linkedin} className="text-white hover:text-[#00f2ff] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
