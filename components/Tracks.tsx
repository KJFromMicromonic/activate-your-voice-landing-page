
import React from 'react';
import GlitchText from './GlitchText';

const Tracks: React.FC = () => {
  const themeFocusAreas = [
    {
      id: '001',
      title: 'Real-World Actions',
      description: 'Go beyond simple dialogue. Build agents that execute tasks, trigger workflows, and interact with external APIs to bridge the gap between talk and action.',
      icon: '🛠️',
      color: '#00f2ff'
    },
    {
      id: '002',
      title: 'Persistent Memory',
      description: 'Engineer sophisticated memory architectures that allow agents to recognize returning users and recall past context for seamless, continuous interactions.',
      icon: '💾',
      color: '#7000ff'
    },
    {
      id: '003',
      title: 'Behavioral Adaptation',
      description: 'Design dynamic systems that adapt their persona and response logic over time, tailoring behavior to specific user needs and preferences.',
      icon: '📈',
      color: '#00ff95'
    },
    {
      id: '004',
      title: 'Iterative Learning',
      description: 'Implement feedback loops that allow your conversational models to improve across sessions, learning from mistakes and optimizing for better outcomes.',
      icon: '🔄',
      color: '#ff10f0'
    }
  ];

  return (
    <section id="tracks" className="py-32 bg-[#030406] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GlitchText 
            text="HACKATHON THEME" 
            tag="h2" 
            color="#00f2ff" 
            className="text-3xl md:text-5xl font-orbitron font-bold mb-4" 
          />
          <p className="text-slate-500 font-mono-space text-sm tracking-widest uppercase">
            Building the next generation of Agentic Voice Systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themeFocusAreas.map((area) => (
            <div 
              key={area.id} 
              className="group relative p-8 glass-card border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h3 className="text-lg font-orbitron font-bold text-white mb-4 tracking-tight">
                {area.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {area.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="font-mono-space text-[10px] text-slate-600 tracking-widest uppercase">CRITERIA_{area.id}</span>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse" 
                  style={{ backgroundColor: area.color, boxShadow: `0 0 10px ${area.color}` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="inline-block p-4 border border-[#7000ff]/20 bg-[#7000ff]/5 font-mono-space text-xs text-center">
            <span className="text-[#00f2ff]">MISSION_OBJECTIVE:</span> CREATE SYSTEMS THAT LISTEN, REMEMBER, AND ACT.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
