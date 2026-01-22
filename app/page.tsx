import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Shield, Clock, Award, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Injured or Need to Clear Your Record? We Fight For You.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Houston's trusted personal injury and expungement attorney. No fees unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact">
              <Button variant="primary" className="w-full sm:w-auto bg-success hover:bg-success-dark text-white">Free Consultation</Button>
            </Link>
            <Link href="/expungement">
              <Button variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Clean My Record</Button>
            </Link>
          </div>
          <a href="tel:7132825871" className="inline-flex items-center text-2xl font-bold hover:text-secondary transition-colors">
            <Phone className="w-6 h-6 mr-2" />
            (713) 282-5871
          </a>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">How We Can Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Injury */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-primary">Personal Injury</h3>
              <p className="text-gray-700 mb-4">
                Injured in an accident? We fight for victims of 18-wheeler accidents, car crashes, rideshare incidents, and industrial explosions. No fees unless we win your case.
              </p>
              <Link href="/personal-injury" className="text-primary font-semibold hover:text-primary-dark">
                Learn More →
              </Link>
            </div>

            {/* Expungement */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-success">Criminal Expungement</h3>
              <p className="text-gray-700 mb-4">
                Clear your record and move forward. $1,495 all-inclusive with a money-back guarantee if we cannot expunge your charges. Get a fresh start today.
              </p>
              <Link href="/expungement" className="text-success font-semibold hover:text-success-dark">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">No Win, No Fee</h3>
              <p className="text-gray-700">Personal injury cases on contingency. You pay nothing unless we win.</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 text-success" />
              <h3 className="text-xl font-bold mb-2">Same-Day Consultations</h3>
              <p className="text-gray-700">Free consultations available. We respond within 24 hours.</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-700">100% refund on expungements if we cannot clear your record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-gray-700">We review your case at no cost and explain your options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">We Fight For You</h3>
              <p className="text-gray-700">We handle all paperwork and legal proceedings on your behalf.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-gray-700">Receive the compensation or record clearance you deserve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation. No obligations, no fees unless we win.</p>
          <Link href="/contact">
            <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">Get Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
