
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

        {/* Winning Teams Section */}
        <div className="mb-16 border border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🏆</span>
            <h3 className="text-[#00f2ff] font-orbitron font-bold text-2xl md:text-3xl tracking-widest">WINNING TEAMS</h3>
          </div>
          <div className="h-px bg-gradient-to-r from-[#00f2ff] to-transparent mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <div className="text-white font-audiowide text-xl mb-2">3 Winning Teams</div>
              <p className="text-slate-400 font-mono-space text-sm">1 winner per track</p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <div className="text-[#00f2ff] font-audiowide text-3xl mb-2">€3,300</div>
              <p className="text-slate-400 font-mono-space text-sm">€1,000 per winning team</p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <div className="text-white font-audiowide text-xl mb-2">Speaking at FOST</div>
              <p className="text-slate-400 font-mono-space text-sm">Invitation to speak at API Days&apos; FOST Conferences + 5 tickets to FOST per winning team</p>
            </div>
          </div>
        </div>

        {/* Tooling & API Credits Section */}
        <div className="mb-16 border border-[#7000ff]/30 bg-gradient-to-br from-[#7000ff]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7000ff] to-transparent"></div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎁</span>
              <h3 className="text-[#7000ff] font-orbitron font-bold text-2xl md:text-3xl tracking-widest">TOOLING & API CREDITS</h3>
            </div>
            <div className="text-[#7000ff] font-audiowide text-2xl md:text-3xl">€90,000+</div>
          </div>
          <div className="h-px bg-gradient-to-r from-[#7000ff] to-transparent mb-8"></div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-white/10 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
              <div className="flex items-center">
                <span className="text-white font-orbitron font-bold text-lg">Speechmatics</span>
              </div>
              <div>
                <p className="text-slate-300 font-mono-space text-lg mb-1">$3,000 credits</p>
                <p className="text-slate-500 font-mono-space text-sm">per winning team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-white/10 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
              <div className="flex items-center">
                <span className="text-white font-orbitron font-bold text-lg">Backboard</span>
              </div>
              <div>
                <p className="text-slate-300 font-mono-space text-lg mb-1">$100 credits</p>
                <p className="text-slate-500 font-mono-space text-sm">per person per winning team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-white/10 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
              <div className="flex items-center">
                <span className="text-white font-orbitron font-bold text-lg">OpenAI</span>
              </div>
              <div>
                <p className="text-slate-300 font-mono-space text-lg mb-1">$1,000 API credits</p>
                <p className="text-slate-500 font-mono-space text-sm">per winning team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-white/10 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
              <div className="flex items-center">
                <span className="text-white font-orbitron font-bold text-lg">ChatGPT Pro</span>
              </div>
              <div>
                <p className="text-slate-300 font-mono-space text-lg mb-1">1 year access</p>
                <p className="text-slate-500 font-mono-space text-sm">per person per winning team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border border-white/10 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
              <div className="flex items-center">
                <span className="text-white font-orbitron font-bold text-lg">Station F</span>
              </div>
              <div>
                <p className="text-slate-300 font-mono-space text-lg mb-1">1 month access</p>
                <p className="text-slate-500 font-mono-space text-sm">per person per winning team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor Special Awards Section */}
        <div className="mb-16 border border-[#ff10f0]/30 bg-gradient-to-br from-[#ff10f0]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff10f0] to-transparent"></div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">💰</span>
            <h3 className="text-[#ff10f0] font-orbitron font-bold text-2xl md:text-3xl tracking-widest">SPONSOR SPECIAL AWARDS</h3>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff10f0] to-transparent mb-8"></div>

          <div className="space-y-6">
            <div className="border border-white/10 bg-white/[0.02] p-8 hover:border-[#ff10f0]/30 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">🥇</span>
                <div className="flex-grow">
                  <h4 className="text-white font-audiowide text-xl mb-2">Backboard Special Prize</h4>
                  <p className="text-[#ff10f0] font-orbitron text-2xl mb-2">€300</p>
                  <p className="text-slate-400 font-mono-space text-sm">Cash prize for 1 outstanding team</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8 hover:border-[#ff10f0]/30 transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">🥈</span>
                <div className="flex-grow">
                  <h4 className="text-white font-audiowide text-xl mb-2">Speechmatics Excellence Award</h4>
                  <p className="text-[#ff10f0] font-orbitron text-2xl mb-2">$3,000</p>
                  <p className="text-slate-400 font-mono-space text-sm">Additional credits for 1 exceptional team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="border border-[#00ff95]/30 bg-gradient-to-br from-[#00ff95]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00ff95] to-transparent"></div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🤝</span>
            <h3 className="text-[#00ff95] font-orbitron font-bold text-2xl md:text-3xl tracking-widest">RECOGNITION & NETWORK</h3>
          </div>
          <div className="h-px bg-gradient-to-r from-[#00ff95] to-transparent mb-6"></div>

          <p className="text-slate-300 font-mono-space text-lg leading-relaxed">
            Recognition from industry leaders, VCs and the global AI Collective community
          </p>
          <div className="mt-6 p-4 border border-[#00ff95]/20 bg-white/[0.02]">
            <p className="text-slate-300 font-mono-space text-sm">
              <span className="text-[#00ff95] font-orbitron font-semibold">QuickSort</span> has agreed to interview and is open to hire selected winners.
            </p>
          </div>
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
