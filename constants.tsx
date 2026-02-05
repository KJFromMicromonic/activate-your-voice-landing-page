
import React from 'react';
import { Sponsor, Speaker, Track, Prize } from './types';

// Target start time: Friday, Feb 28, 2026 at 6:00 PM (18:00)
export const EVENT_DATE = new Date('2026-02-28T18:00:00+01:00'); // Paris is UTC+1 (CET)

export const COLORS = {
  bg: '#05070a',
  cyan: '#00f2ff',
  magenta: '#7000ff',
  lime: '#00ff95',
  purple: '#b300ff',
  pink: '#ff10f0',
};

export const SPONSORS: Sponsor[] = [
  { 
    id: '1', 
    name: 'Speechmatics', 
    logo: 'Partners/SM-Black@2500xTransparent.png', 
    tier: 'Platinum', 
    url: 'https://www.speechmatics.com' 
  },
  {
    id: '2',
    name: 'Backboard.io',
    logo: 'Partners/backboard.png',
    tier: 'Platinum',
    url: 'https://backboard.io'
  },
  {
    id: '3',
    name: 'STATION F',
    logo: 'Partners/StationF.png',
    tier: 'Platinum',
    url: 'https://www.stationf.co'
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Kartik Ahuja PhD',
    role: 'Research Scientist',
    company: 'Meta',
    bio: 'I investigate the causal and optimization foundations of LLM generalization to design far more sample-efficient training paradigms.',
    image: 'https://ui-avatars.com/api/?name=Kartik+Ahuja&background=7000ff&color=fff&size=400&bold=true',
    socials: { linkedin: 'https://www.linkedin.com/in/kartik-ahuja/' }
  },
  {
    id: '2',
    name: 'Ekta Sengar',
    role: 'Product Manager',
    company: 'Atlassian',
    bio: 'A developer-turned-PM with 10+ years of experience driving Product Led Growth in SaaS and IoT by fusing data-driven strategy with deep user empathy.',
    image: 'https://media.licdn.com/dms/image/v2/C5103AQGtISKK8l8WEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1554705977611?e=1772064000&v=beta&t=JDIGdnAp7bvDBKggIEs8Uq3jrX5Py-XRPP3yujP9KUY',
    socials: { linkedin: 'https://www.linkedin.com/in/ektasengar/' }
  },
  {
    id: '3',
    name: 'Edgars Adamovics',
    role: 'Developer Relations Specialist',
    company: 'Speechmatics',
    bio: 'A strategic Developer Relations leader who scales vibrant ecosystems and drives technical advocacy across AR, Game Dev, blockchain, and AI technologies.',
    image: 'https://ui-avatars.com/api/?name=Edgar+Adamovics&background=7000ff&color=fff&size=400&bold=true',
    socials: { linkedin: 'www.linkedin.com/in/edgars-adamovics/' }
  },
  {
    id: '4',
    name: 'Tharsan Senthivel PhD',
    role: 'Lead AI',
    company: 'PMU',
    bio: 'I bridge the gap between scientific AI excellence and business ROI to drive strategic organizational transformation and sustainable growth.',
    image: 'https://ui-avatars.com/api/?name=Tharasan+Senthivel&background=7000ff&color=fff&size=400&bold=true',
    socials: { linkedin: 'https://www.linkedin.com/in/tharsansenthivel/' }
  }
];

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Digital Sovereignty',
    description: 'Workshops focused on owning your data and protecting your digital identity in an AI-driven world.',
    icon: '🛡️',
    color: COLORS.cyan
  },
  {
    id: '2',
    title: 'Neural Arts',
    description: 'Exploring the intersection of generative AI and human creativity through collaborative performance.',
    icon: '🎨',
    color: COLORS.magenta
  },
  {
    id: '3',
    title: 'Code Rebellion',
    description: 'Developing open-source tools to counteract centralized surveillance and bias.',
    icon: '💻',
    color: COLORS.lime
  },
];

export const PRIZES: Prize[] = [
  {
    id: '1',
    category: 'Monetary Awards',
    description: 'Direct funding to support the development of winning voice-agent prototypes.',
    value: 'UPTO €3300',
    isGrand: true
  },
  {
    id: '2',
    category: 'Partner Ecosystem',
    description: 'Premium Tooling & API Credits provided by our industrial and research partners.',
    value: 'API ACCESS'
  },
  {
    id: '3',
    category: 'Global Influence',
    description: 'Formal recognition from Industry Leaders and the Global AI Collective community.',
    value: 'RECOGNITION'
  },
];
