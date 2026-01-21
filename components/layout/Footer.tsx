import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

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
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:7132825871" className="hover:text-secondary">(713) 282-5871</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:intake@teclelaw.com" className="hover:text-secondary">intake@teclelaw.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">TECLE LAW, PLLC</h3>
            <p className="text-sm mb-4">Houston, Texas</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} TECLE LAW, PLLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
