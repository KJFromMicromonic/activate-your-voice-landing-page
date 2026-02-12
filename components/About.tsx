
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
                In 2026, the interface is no longer a screen—it is a conversation. <span className="text-[#00f2ff] font-bold">Activate Your Voice</span> is an intensive <span className="text-white font-semibold">24-hour hackathon</span> designed to push the boundaries of Voice Agent technology.
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
                  <p className="font-mono-space text-xs text-slate-400">École 42<br/>96 Boulevard Bessières, Paris</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
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

        {/* Detailed Schedule Section */}
        <div className="mt-32">
          <GlitchText
            text="DETAILED SCHEDULE"
            tag="h2"
            color="#00f2ff"
            className="text-3xl md:text-4xl font-orbitron font-bold mb-16 text-center"
          />

          {/* Phase 0: Preparation */}
          <div className="mb-16 border border-[#7000ff]/30 bg-gradient-to-br from-[#7000ff]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7000ff] to-transparent"></div>
            <h3 className="text-[#7000ff] font-orbitron font-bold text-2xl md:text-3xl mb-2 tracking-widest">PHASE 0: PREPARATION</h3>
            <div className="h-px bg-gradient-to-r from-[#7000ff] to-transparent mb-8"></div>

            <div className="space-y-6">
              <div className="border border-white/5 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📅</span>
                  <h4 className="text-white font-audiowide text-lg">MONDAY, FEB 23</h4>
                </div>
                <ul className="space-y-2 ml-11 text-slate-400 font-mono-space text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7000ff] mt-1">•</span>
                    <span>Announcement of 3 tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7000ff] mt-1">•</span>
                    <span>Team formation facilitation on Discord</span>
                  </li>
                </ul>
              </div>

              <div className="border border-white/5 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📅</span>
                  <h4 className="text-white font-audiowide text-lg">WEDNESDAY, FEB 25</h4>
                </div>
                <ul className="space-y-2 ml-11 text-slate-400 font-mono-space text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7000ff] mt-1">•</span>
                    <span>Partners demo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7000ff] mt-1">•</span>
                    <span>Dorahack team submission</span>
                  </li>
                </ul>
              </div>

              <div className="border border-white/5 bg-white/[0.02] p-6 hover:border-[#7000ff]/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📅</span>
                  <h4 className="text-white font-audiowide text-lg">THURSDAY, FEB 26</h4>
                </div>
                <ul className="space-y-2 ml-11 text-slate-400 font-mono-space text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7000ff] mt-1">•</span>
                    <span>Deadline team submission & perks redeem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 1: Saturday */}
          <div className="mb-16 border border-[#00f2ff]/30 bg-gradient-to-br from-[#00f2ff]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
            <h3 className="text-[#00f2ff] font-orbitron font-bold text-2xl md:text-3xl mb-2 tracking-widest">PHASE 1: SATURDAY, FEB 28</h3>
            <div className="h-px bg-gradient-to-r from-[#00f2ff] to-transparent mb-8"></div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">2:00 PM – 3:00 PM</div>
                <div className="text-slate-300 font-mono-space">Check-in & welcome coffee</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">3:00 PM – 3:30 PM</div>
                <div>
                  <div className="text-white font-bold mb-2">Opening ceremony</div>
                  <ul className="space-y-1 text-slate-400 font-mono-space text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Welcome speech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Introduction to hackathon rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Introduction to tracks and mentors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Agenda overview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Perks from sponsors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2ff] mt-1">•</span>
                      <span>Introduction to jury and criteria</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">3:30 PM – 4:15 PM</div>
                <div className="text-slate-300 font-mono-space">Partners workshop</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">4:15 PM – 8:00 PM</div>
                <div className="text-slate-300 font-mono-space">Working session #1</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">8:00 PM – 9:00 PM</div>
                <div className="text-slate-300 font-mono-space">Dinner</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">8:30 PM – 11:00 PM</div>
                <div className="text-slate-300 font-mono-space">Working session #2</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00f2ff]/30 transition-colors">
                <div className="text-[#00f2ff] font-audiowide text-lg">11:00 PM</div>
                <div className="text-slate-300 font-mono-space">Venue closes</div>
              </div>
            </div>
          </div>

          {/* Phase 2: Sunday */}
          <div className="mb-16 border border-[#00ff95]/30 bg-gradient-to-br from-[#00ff95]/5 to-transparent p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00ff95] to-transparent"></div>
            <h3 className="text-[#00ff95] font-orbitron font-bold text-2xl md:text-3xl mb-2 tracking-widest">PHASE 2: SUNDAY, MARCH 1</h3>
            <div className="h-px bg-gradient-to-r from-[#00ff95] to-transparent mb-8"></div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">9:00 AM</div>
                <div className="text-slate-300 font-mono-space">Check-in and coffee</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">9:00 AM – 12:30 PM</div>
                <div className="text-slate-300 font-mono-space">Working session #3</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">12:30 PM – 1:30 PM</div>
                <div className="text-slate-300 font-mono-space">Lunch</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">12:30 PM – 5:00 PM</div>
                <div className="text-slate-300 font-mono-space">Final working session</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">4:30 PM</div>
                <div className="text-slate-300 font-mono-space">Jury arrival time</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">5:00 PM</div>
                <div className="text-slate-300 font-mono-space">Project submission</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">5:00 PM – 6:00 PM</div>
                <div>
                  <div className="text-white font-bold mb-2">Demo & jury fire</div>
                  <ul className="space-y-1 text-slate-400 font-mono-space text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00ff95] mt-1">•</span>
                      <span>3 min pitch per team + Q&A</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00ff95] mt-1">•</span>
                      <span>2 best teams selected per track</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">6:00 PM – 6:30 PM</div>
                <div className="text-slate-300 font-mono-space">Top 6 teams final demo</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">6:30 PM – 7:00 PM</div>
                <div className="text-slate-300 font-mono-space">Jury deliberation & networking</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">7:00 PM</div>
                <div className="text-slate-300 font-mono-space">Result announcement and sponsor specific prizes</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 border border-white/5 bg-white/[0.02] p-6 hover:border-[#00ff95]/30 transition-colors">
                <div className="text-[#00ff95] font-audiowide text-lg">7:00 PM – 8:00 PM</div>
                <div className="text-slate-300 font-mono-space">Cocktail celebration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
