
// Fix: Added React import to satisfy the React namespace requirements for types
import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface PriceTier {
  id: string;
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
