import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function ButtonLink({
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonLinkProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-200 min-h-[44px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';
  const variants = {
    primary: 'bg-success text-white hover:bg-success-dark',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  // External links, tel:, and mailto: use regular anchor tags
  if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  // Internal links use Next.js Link
  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
