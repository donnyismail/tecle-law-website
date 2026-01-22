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
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image src="/the-new-logo.png" alt="TECLE LAW" width={180} height={60} className="h-14 w-auto" priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg">
                  {link.label}
                </Link>
              ))}
              <a href="tel:7132825871" className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
                <Phone className="w-5 h-5 mr-2" />
                (713) 282-5871
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-3 min-h-[48px] min-w-[48px] bg-blue-600 text-white rounded-lg" 
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-3xl text-gray-800 hover:text-blue-600 font-semibold" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:7132825871" 
              className="text-3xl bg-blue-600 text-white font-bold flex items-center justify-center py-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-8 h-8 mr-3" />
              (713) 282-5871
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
