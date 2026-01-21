'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll for glassmorphic effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Focus first link when menu opens, trap focus within menu
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/the-new-logo.png"
                alt="TECLE LAW"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={COMPANY.phoneLink}
                className="flex items-center bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in menu panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-50 bg-white shadow-2xl"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-navy">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-h-[44px] min-w-[44px] rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation links */}
              <nav
                ref={menuRef}
                role="navigation"
                aria-label="Mobile navigation"
                className="flex flex-col p-6"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 text-xl text-navy hover:text-primary border-b border-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Phone CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                  className="mt-8"
                >
                  <a
                    href={COMPANY.phoneLink}
                    className="flex items-center justify-center w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Phone className="w-5 h-5 mr-3" aria-hidden="true" />
                    Call {COMPANY.phone}
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
