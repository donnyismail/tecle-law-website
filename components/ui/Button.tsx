'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-colors duration-200 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';
  const variants = {
    primary: 'bg-success text-white hover:bg-success-dark',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
