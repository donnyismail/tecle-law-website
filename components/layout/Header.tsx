'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/personal-injury', label: 'Personal Injury' },
    { href: '/expungement', label: 'Expungement' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image src="/the-new-logo.png" alt="TECLE LAW" width={180} height={60} className="h-12 w-auto" priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-navy hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href="tel:7132825871" className="flex items-center text-primary font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                (713) 282-5871
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 min-h-[44px] min-w-[44px]" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-2xl text-navy hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href="tel:7132825871" className="text-2xl text-primary font-semibold flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              (713) 282-5871
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
