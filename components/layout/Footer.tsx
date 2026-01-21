import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/personal-injury" className="hover:text-secondary">Personal Injury</Link></li>
              <li><Link href="/expungement" className="hover:text-secondary">Criminal Expungement</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                <a href={COMPANY.phoneLink} className="hover:text-secondary">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                <a href={COMPANY.emailLink} className="hover:text-secondary">{COMPANY.email}</a>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
            <p className="text-sm mb-4">{COMPANY.location}</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
