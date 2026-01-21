'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type FadeDirection = 'up' | 'down' | 'left' | 'right';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'li';
}

const directionVariants: Record<FadeDirection, { initial: { x?: number; y?: number }; animate: { x: number; y: number } }> = {
  up: { initial: { y: 20 }, animate: { x: 0, y: 0 } },
  down: { initial: { y: -20 }, animate: { x: 0, y: 0 } },
  left: { initial: { x: 20 }, animate: { x: 0, y: 0 } },
  right: { initial: { x: -20 }, animate: { x: 0, y: 0 } },
};

export function FadeIn({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  as = 'div'
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const { initial, animate } = directionVariants[direction];

  const variants: Variants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, ...initial },
    visible: shouldReduceMotion ? {} : { opacity: 1, ...animate },
  };

  const Component = motion[as];

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Stagger container for child elements
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: 'div' | 'ul' | 'ol';
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  as = 'div'
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: shouldReduceMotion ? 0 : staggerDelay }}
      className={className}
    >
      {children}
    </Component>
  );
}
