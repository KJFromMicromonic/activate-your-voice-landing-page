
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Prizes from './components/Prizes';
import Speakers from './components/Speakers';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-[#e2e8f0] selection:bg-[#00f2ff] selection:text-[#05070a]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Sponsors />
        <Speakers />
        <Prizes />
        <CTA />
      </main>

      <Footer />
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1.8); opacity: 0.8; }
        }
        
        .waveform-bg {
          background-image: 
            radial-gradient(at 0% 0%, rgba(112, 0, 255, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(0, 242, 255, 0.05) 0px, transparent 50%);
        }

        /* Custom Scrollbar - Sleeker */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #05070a;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00f2ff;
        }

        /* Toning down the glitch text for a more professional futuristic feel */
        .glitch-hover:hover {
          animation: none;
        }
      `}</style>
    </div>
  );
};

export default App;
