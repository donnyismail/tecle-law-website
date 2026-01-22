'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold transition-all duration-200 min-h-[56px] text-lg shadow-lg';
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
