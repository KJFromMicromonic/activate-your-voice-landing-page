
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05070a]/95 backdrop-blur-md border-b border-[#00f2ff]/30 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Collaboration Logo Section */}
        <div 
          className="flex items-center gap-3 md:gap-4 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Speechmatics Logo */}
          <div className="flex items-center h-6 md:h-8">
            <img
              src="Logos/Speechmatics.png"
              alt="Speechmatics"
              className="h-full w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              onError={(e) => (e.currentTarget.className = 'hidden')}
            />
          </div>

          {/* Separator */}
          <span className="text-[#00f2ff] font-mono-space text-sm md:text-base animate-pulse mx-1">✕</span>

          {/* AI Collective Logo */}
          <div className="flex items-center">
            <img
              src="Logos/AICWhite.png"
              alt="The AI Collective Paris"
              className="h-20 md:h-20 w-35 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-box')) {
                  const box = document.createElement('div');
                  box.className = "fallback-box w-6 h-6 bg-gradient-to-br from-[#00f2ff] to-[#7000ff] rounded-sm rotate-45 flex items-center justify-center";
                  box.innerHTML = '<span class="text-white font-bold -rotate-45 text-[8px]">AI</span>';
                  parent.appendChild(box);
                }
              }}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono-space text-sm tracking-widest">
          <a href="#about" className="hover:text-[#00f2ff] transition-colors uppercase">Mission</a>
          <a href="#tracks" className="hover:text-[#7000ff] transition-colors uppercase">Theme</a>
          <a href="#speakers" className="hover:text-[#00ff95] transition-colors uppercase">Judges</a>
          <a href="#prizes" className="hover:text-[#ff10f0] transition-colors uppercase">Rewards</a>
          <a 
            href="https://luma.com/activateyourvoice" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-[#05070a] transition-all shadow-[0_0_10px_rgba(0,242,255,0.3)] hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] font-bold tracking-widest"
          >
            REGISTER
          </a>
        </div>
        
        {/* Mobile menu icon */}
        <button
          className="md:hidden text-[#00f2ff] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>

    {/* Mobile Menu - Outside nav to prevent stacking context issues */}
    <div className={`md:hidden fixed inset-0 bg-[#05070a]/98 backdrop-blur-lg z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="flex flex-col items-center justify-center h-full gap-8 font-mono-space text-lg tracking-widest">
        <a href="#about" onClick={closeMobileMenu} className="hover:text-[#00f2ff] transition-colors uppercase">Mission</a>
        <a href="#tracks" onClick={closeMobileMenu} className="hover:text-[#7000ff] transition-colors uppercase">Theme</a>
        <a href="#speakers" onClick={closeMobileMenu} className="hover:text-[#00ff95] transition-colors uppercase">Judges</a>
        <a href="#prizes" onClick={closeMobileMenu} className="hover:text-[#ff10f0] transition-colors uppercase">Rewards</a>
        <a
          href="https://luma.com/activateyourvoice"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
          className="mt-4 px-8 py-3 border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-[#05070a] transition-all shadow-[0_0_10px_rgba(0,242,255,0.3)] font-bold tracking-widest"
        >
          REGISTER
        </a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
