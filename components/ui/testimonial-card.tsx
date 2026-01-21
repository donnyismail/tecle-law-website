'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title?: string;
  rating?: number;
  delay?: number;
}

export function TestimonialCard({ quote, author, title, rating = 5, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-secondary fill-secondary' : 'text-gray-200'}`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div>
        <div className="font-semibold text-navy">{author}</div>
        {title && <div className="text-gray-500 text-sm">{title}</div>}
      </div>
    </motion.div>
  );
}

// Placeholder testimonials for demonstration
export const placeholderTestimonials = [
  {
    quote: "TECLE LAW fought for me when no one else would. They got me the compensation I deserved after my accident.",
    author: "Maria G.",
    title: "Personal Injury Client",
    rating: 5,
  },
  {
    quote: "They cleared my record quickly and professionally. Now I can finally move forward with my life.",
    author: "James T.",
    title: "Expungement Client",
    rating: 5,
  },
  {
    quote: "Responsive, caring, and effective. I couldn't have asked for better representation.",
    author: "Sarah M.",
    title: "Car Accident Client",
    rating: 5,
  },
];
