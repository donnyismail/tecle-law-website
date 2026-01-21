'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Cases Won' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Success Rate' },
  { value: '24hr', label: 'Response Time' },
];

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
