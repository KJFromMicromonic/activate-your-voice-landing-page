
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
    bio: 'I investigate the foundations of LLM generalization to design far more sample-efficient training paradigms.',
    image: '/Partners/Kartik-Ahuja.jpeg',
    socials: { linkedin: 'https://www.linkedin.com/in/kartik-ahuja/' }
  },
  {
    id: '2',
    name: 'Ekta Sengar',
    role: 'Product Manager',
    company: 'Atlassian',
    bio: 'A developer-turned-PM with 10+ years of experience driving Product Led Growth in SaaS and IoT by fusing data-driven strategy with deep user empathy.',
    image: '/Partners/Ekta-Sengar.jpeg',
    socials: { linkedin: 'https://www.linkedin.com/in/ektasengar/' }
  },
  {
    id: '3',
    name: 'Edgars Adamovics',
    role: 'Developer Relations Specialist',
    company: 'Speechmatics',
    bio: 'A strategic Developer Relations leader who scales vibrant ecosystems and drives technical advocacy across Immersive Tech, Game Dev, and AI technologies.',
    image: '/Partners/85f63cc9-17b5-4e7a-af3d-caa8b6d3c76a.jpeg',
    socials: { linkedin: 'https://www.linkedin.com/in/edgars-adamovics/' }
  },
  {
    id: '4',
    name: 'Tharsan Senthivel PhD',
    role: 'Lead AI',
    company: 'PMU',
    bio: 'A Lead AI driving the integration of AI within enterprise processes to transform technical innovation into scalable, high-impact business solutions.',
    image: '/Partners/Tharsan.jpeg',
    socials: { linkedin: 'https://www.linkedin.com/in/tharsansenthivel/' }
  },
  {
    id: '5',
    name: 'Mohamed Ahmednah',
    role: 'Founder & CTO',
    company: 'Quicksort',
    bio: ' AI Builder, Software Architect & Team Enabler Experienced in scaling engineering teams and implementing end-to-end Software and AI solutions across cloud and on-premise environments.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0zeV3pTztiQ/profile-displayphoto-scale_400_400/B4EZvYAKgJGgAk-/0/1768855481205?e=1772668800&v=beta&t=0GNc1wJg3IAIndAQThnbBQMLAT1BvGceRe1KbH4fNNs',
    socials: { linkedin: 'https://www.linkedin.com/in/mohamed-ahmednah-19313116/' }
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
