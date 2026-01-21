import type { NavLink } from './types';

export const COMPANY = {
  name: 'TECLE LAW, PLLC',
  phone: '(713) 282-5871',
  phoneLink: 'tel:7132825871',
  email: 'intake@teclelaw.com',
  emailLink: 'mailto:intake@teclelaw.com',
  location: 'Houston, Texas',
  hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
} as const;

export const PRICING = {
  expungement: '$1,495',
  personalInjury: 'No Win, No Fee',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/personal-injury', label: 'Personal Injury' },
  { href: '/expungement', label: 'Expungement' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
