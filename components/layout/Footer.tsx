import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, ArrowRight, Linkedin, Facebook } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="relative bg-gradient-to-br from-navy via-navy-light to-navy">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Top Section - Logo and CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/the-new-logo.png"
                alt="TECLE LAW"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 py-3 bg-success text-white font-semibold rounded-xl hover:bg-success-dark transition-colors shadow-lg shadow-success/25"
            >
              Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-white">Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/personal-injury" className="text-white/70 hover:text-secondary transition-colors">
                    Personal Injury
                  </Link>
                </li>
                <li>
                  <Link href="/expungement" className="text-white/70 hover:text-secondary transition-colors">
                    Criminal Expungement
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href={COMPANY.phoneLink} className="flex items-center text-white/70 hover:text-secondary transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </div>
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={COMPANY.emailLink} className="flex items-center text-white/70 hover:text-secondary transition-colors">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center text-white/70">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  {COMPANY.hours}
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-white">Location</h3>
              <div className="flex items-start text-white/70">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p>{COMPANY.location}</p>
                  <p className="text-sm mt-2 text-white/50">
                    Serving Houston and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Trust */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-white">Connect With Us</h3>
              <div className="flex gap-3 mb-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-white/50">
                Licensed to practice in the State of Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
