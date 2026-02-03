
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050816] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="Logos/AICWhite.png"
                alt="The AI Collective Paris"
                className="h-36 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              We are a decentralized community of builders, engineers, and researchers dedicated to a free and transparent digital future. Join the collective.
            </p>
            <div className="flex gap-4">
              <a href="https://discord.gg/sN6k5mtbXG" target="_blank" rel="noopener noreferrer" className="text-xs font-mono-space text-gray-500 hover:text-[#00d4ff] transition-colors tracking-widest uppercase">
                Discord
              </a>
              <a href="https://www.aicollective.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono-space text-gray-500 hover:text-[#00d4ff] transition-colors tracking-widest uppercase">
                Website
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-6 text-sm tracking-widest uppercase">NAVIGATION</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-mono-space">
              <li><a href="#about" className="hover:text-white transition-colors">// MISSION</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">// TRACKS</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">// ARCHITECTS</a></li>
              <li><a href="#prizes" className="hover:text-white transition-colors">// REWARDS</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono-space text-gray-600 tracking-tighter">
            © 2026 THE AI COLLECTIVE. ALL RIGHTS RESERVED. OPERATING IN THE VOID.
          </p>
          <div className="flex gap-6 text-[10px] font-mono-space text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Nodes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
