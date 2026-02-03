
export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  url: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Prize {
  id: string;
  category: string;
  description: string;
  value: string;
  isGrand?: boolean;
}
