'use client';

import { Shield, Clock, DollarSign, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  {
    icon: Shield,
    title: 'No Win, No Fee',
    description: 'Pay nothing unless we win',
    color: 'primary',
  },
  {
    icon: DollarSign,
    title: 'Money-Back Guarantee',
    description: 'On expungement services',
    color: 'success',
  },
  {
    icon: Clock,
    title: 'Free Consultation',
    description: 'Review your case at no cost',
    color: 'secondary',
  },
  {
    icon: Phone,
    title: '24hr Response',
    description: 'We respond within one day',
    color: 'primary',
  },
];

const colorMap = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  secondary: 'bg-secondary/10 text-secondary',
};

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        const colorClasses = colorMap[badge.color as keyof typeof colorMap];

        return (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${colorClasses}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-navy text-sm md:text-base">{badge.title}</h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">{badge.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
