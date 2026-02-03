
import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  color?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', tag = 'h1', color = 'white' }) => {
  const Tag = tag;
  
  return (
    <div className={`relative group inline-block ${className}`}>
      <Tag 
        className="relative z-10 transition-colors duration-500 group-hover:text-white"
        style={{ color }}
      >
        {text}
      </Tag>
      <Tag 
        className="absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 text-[#7000ff] blur-[1px]"
        aria-hidden="true"
      >
        {text}
      </Tag>
      <Tag 
        className="absolute top-0 left-0 -z-20 opacity-0 group-hover:opacity-40 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-150 text-[#00f2ff] blur-[1px]"
        aria-hidden="true"
      >
        {text}
      </Tag>
    </div>
  );
};

export default GlitchText;
