
import React from 'react';
import GlitchText from './GlitchText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#05070a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <GlitchText 
              text="THE RESONANCE" 
              tag="h2" 
              color="#7000ff" 
              className="text-3xl md:text-5xl font-orbitron font-bold mb-8" 
            />
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                In 2026, the interface is no longer a screen—it is a conversation. <span className="text-[#00f2ff] font-bold">Activate Your Voice</span> at 42 Ecole is an intensive <span className="text-white font-semibold">24-hour hackathon</span> designed to push the boundaries of Voice Agent technology.
              </p>
              <p>
                From Feb 28 to March 1, join a collective of builders in Paris to solve the most complex challenges in real-time vocal synthesis and neural dialogue. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                <div className="p-6 glass-card border-l-4 border-l-[#00ff95]">
                  <h4 className="font-orbitron font-bold text-white mb-2 text-sm tracking-widest uppercase">The Window</h4>
                  <p className="font-mono-space text-xs text-slate-400">Feb 28 - Mar 1, 2026<br/>24-Hour Total Cycle</p>
                </div>
                <div className="p-6 glass-card border-l-4 border-l-[#00f2ff]">
                  <h4 className="font-orbitron font-bold text-white mb-2 text-sm tracking-widest uppercase">The Venue</h4>
                  <p className="font-mono-space text-xs text-slate-400">42 Ecole<br/>96 Boulevard Bessières, Paris</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 group shadow-2xl h-[400px] w-full">
              <iframe 
                src="https://maps.google.com/maps?q=42%20Ecole%2096%20Boulevard%20Bessi%C3%A8res%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale invert-[0.9] hue-rotate-[180deg] contrast-[1.2] brightness-[0.8] opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-[#00f2ff]/10"></div>
              <div className="absolute bottom-6 left-6 p-4 bg-[#05070a]/95 backdrop-blur-md border border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.1)] z-20">
                <span className="font-mono-space text-[10px] text-[#00f2ff] tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-ping"></span>
                  SIGNAL_DETECTED: 42 Ecole, Paris
                </span>
              </div>
            </div>
            {/* Minimal geometric accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-[#7000ff]/50"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-[#00f2ff]/50"></div>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
            <h3 className="text-[#7000ff] font-orbitron font-bold mb-4 tracking-widest">PHASE 01: START</h3>
            <p className="text-white font-audiowide text-xl mb-2">SAT, FEB 28 @ 2:00PM</p>
            <p className="text-slate-500 font-mono-space text-xs uppercase tracking-tight">Registration, Keynote & Team Formation</p>
          </div>
          <div className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
            <h3 className="text-[#00f2ff] font-orbitron font-bold mb-4 tracking-widest">PHASE 02: THE VOID</h3>
            <p className="text-white font-audiowide text-xl mb-2">SAT, FEB 28 - MAR 1</p>
            <p className="text-slate-500 font-mono-space text-xs uppercase tracking-tight">24-Hour Intensive Development Cycle</p>
          </div>
          <div className="p-8 border border-[#00ff95]/30 bg-[#00ff95]/5 transition-colors">
            <h3 className="text-[#00ff95] font-orbitron font-bold mb-4 tracking-widest">PHASE 03: JUDGMENT</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-audiowide text-xl">SUN, MAR 1 @ 5:00PM</p>
                <p className="text-slate-500 font-mono-space text-xs uppercase">Hacking Ends & Demo Pitches</p>
              </div>
              <div>
                <p className="text-[#00ff95] font-audiowide text-xl">SUN, MAR 1 @ 7:00PM</p>
                <p className="text-slate-500 font-mono-space text-xs uppercase">Winner Announcement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
