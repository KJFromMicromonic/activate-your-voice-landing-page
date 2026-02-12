
import React, { useState, useEffect } from 'react';
import { EVENT_DATE } from '../constants';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = EVENT_DATE.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 waveform-bg">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7000ff]/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Refined, static event info */}
        <div className="flex items-center justify-center gap-4 mb-8 text-xs font-mono-space tracking-[0.4em] text-[#00f2ff]/60 uppercase">
          <span className="w-8 h-px bg-[#00f2ff]/30"></span>
          <span>ÉCOLE 42, PARIS // FEB 28 @ 15:00</span>
          <span className="w-8 h-px bg-[#00f2ff]/30"></span>
        </div>
        
        <div className="mb-6">
          <GlitchText 
            text="ACTIVATE YOUR VOICE" 
            tag="h1" 
            className="text-5xl md:text-8xl font-orbitron font-bold tracking-tight"
          />
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed">
          Architecting the future of Neural Dialogue <span className="text-white font-semibold">24-Hours</span> 
          <span className="text-[#7000ff] font-semibold"> 100 Builders</span> <span className="text-[#F52727] font-semibold">€100,000 prize pool.</span>
        </p>

        {/* Countdown Timer - Refined Appearance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINS', value: timeLeft.minutes },
            { label: 'SECS', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-none p-6 md:p-10 border-t-2 border-t-[#00f2ff]/20">
              <span className="block text-4xl md:text-6xl font-audiowide text-white mb-2 tracking-tighter">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono-space tracking-[0.3em] text-[#00f2ff]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Backboard.io Feature */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono-space tracking-[0.3em] text-slate-500 uppercase mb-4">Memory Layer Powered By</span>
          <a
            href="https://backboard.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 border border-white/10 bg-white/[0.02] hover:border-[#7000ff]/50 hover:bg-[#7000ff]/5 transition-all duration-300"
          >
            <img
              src="Partners/backboard.png"
              alt="Backboard.io"
              className="h-8 md:h-10 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-[#7000ff] text-white text-[11px] font-mono-space font-bold tracking-wider shadow-[0_0_15px_rgba(112,0,255,0.5)]">#1 LoCoMo Benchmark</span>
              <span className="text-white text-sm font-mono-space font-medium">Best-in-Class Memory for AI Agents</span>
            </div>
          </a>
        </div>
      </div>

      {/* Futuristic soundwave-like visual at the bottom */}
      <div className="absolute bottom-0 w-full h-32 flex items-end justify-center gap-1 px-4 opacity-30 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i} 
            className="w-1 bg-[#00f2ff]" 
            style={{ 
              height: `${20 + Math.random() * 80}%`,
              animation: `pulse ${1 + Math.random() * 2}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
