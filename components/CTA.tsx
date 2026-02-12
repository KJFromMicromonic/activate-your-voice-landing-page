
import React from 'react';
import GlitchText from './GlitchText';

const CTA: React.FC = () => {
  return (
    <section id="register" className="py-24 bg-[#0a0e27] relative">
      {/* Background neon dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-[#00f2ff] rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite` 
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#050816] border border-[#00f2ff]/30 p-8 md:p-16 text-center shadow-[0_0_100px_rgba(112,0,255,0.05)]">
          <GlitchText
            text="JOIN THE HACKATHON"
            tag="h2"
            color="#00f2ff"
            className="text-3xl md:text-6xl font-orbitron font-bold mb-6"
          />
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto font-mono-space">
            Secure your node in the network.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="border border-[#00f2ff]/20 bg-[#00f2ff]/5 p-6">
              <div className="text-[#00f2ff] font-audiowide text-4xl mb-2">100</div>
              <div className="text-slate-400 font-mono-space text-sm uppercase tracking-wider">Elite Builders</div>
            </div>
            <div className="border border-[#7000ff]/20 bg-[#7000ff]/5 p-6">
              <div className="text-[#7000ff] font-audiowide text-4xl mb-2">24h</div>
              <div className="text-slate-400 font-mono-space text-sm uppercase tracking-wider">Duration</div>
            </div>
            <div className="border border-[#00ff95]/20 bg-[#00ff95]/5 p-6">
              <div className="text-[#00ff95] font-audiowide text-4xl mb-2">€100K</div>
              <div className="text-slate-400 font-mono-space text-sm uppercase tracking-wider">Prize Pool</div>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://luma.com/activateyourvoice" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-6 bg-transparent border-2 border-[#00f2ff] text-[#00f2ff] font-bold font-orbitron tracking-widest hover:bg-[#00f2ff] hover:text-[#0a0e27] transition-all shadow-[0_0_25px_rgba(0,242,255,0.2)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] group overflow-hidden relative"
            >
              <span className="relative z-10">INITIALIZE REGISTRATION</span>
              <div className="absolute inset-0 bg-[#00f2ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
            </a>
          </div>
          
          <p className="mt-8 text-[10px] text-gray-500 font-mono-space tracking-[0.2em] uppercase">
            STATUS: ACTIVE // CAPACITY: LIMITED // PROTOCOL: OPEN_ENROLLMENT
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
