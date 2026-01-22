import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Shield, Clock, Award, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - BRIGHT BLUE */}
      <section className="bg-blue-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Injured or Need to Clear Your Record?
          </h1>
          <p className="text-2xl md:text-3xl mb-10 font-light">
            Houston's trusted personal injury and expungement attorney. No fees unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Link href="/contact">
              <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg w-full sm:w-auto min-h-[60px]">
                Free Consultation
              </button>
            </Link>
            <Link href="/expungement">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-5 rounded-lg text-xl font-bold shadow-lg w-full sm:w-auto min-h-[60px]">
                Clean My Record
              </button>
            </Link>
          </div>
          <a href="tel:7132825871" className="inline-flex items-center text-3xl font-bold bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100">
            <Phone className="w-8 h-8 mr-3" />
            (713) 282-5871
          </a>
        </div>
      </section>

      {/* Practice Areas - WHITE BACKGROUND */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How We Can Help</h2>
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Personal Injury Card */}
            <div className="bg-white p-10 rounded-xl shadow-xl border-4 border-blue-600 hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold mb-6 text-blue-600">Personal Injury</h3>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Injured in an accident? We fight for victims of 18-wheeler accidents, car crashes, rideshare incidents, and industrial explosions. No fees unless we win your case.
              </p>
              <Link href="/personal-injury">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold">
                  Learn More →
                </button>
              </Link>
            </div>

            {/* Expungement Card */}
            <div className="bg-white p-10 rounded-xl shadow-xl border-4 border-green-500 hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold mb-6 text-green-600">Criminal Expungement</h3>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Clear your record and move forward. $1,495 all-inclusive with a money-back guarantee if we cannot expunge your charges. Get a fresh start today.
              </p>
              <Link href="/expungement">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-blue-50 rounded-xl">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">No Win, No Fee</h3>
              <p className="text-gray-700 text-lg">Personal injury cases on contingency. You pay nothing unless we win.</p>
            </div>
            <div className="p-8 bg-green-50 rounded-xl">
              <Clock className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Same-Day Consultations</h3>
              <p className="text-gray-700 text-lg">Free consultations available. We respond within 24 hours.</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-xl">
              <Award className="w-16 h-16 mx-auto mb-6 text-orange-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Money-Back Guarantee</h3>
              <p className="text-gray-700 text-lg">100% refund on expungements if we cannot clear your record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Consultation</h3>
              <p className="text-gray-700 text-lg">We review your case at no cost and explain your options.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">We Fight For You</h3>
              <p className="text-gray-700 text-lg">We handle all paperwork and legal proceedings on your behalf.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Results</h3>
              <p className="text-gray-700 text-lg">Receive the compensation or record clearance you deserve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-2xl mb-10">Contact us today for a free consultation. No obligations, no fees unless we win.</p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-gray-100 shadow-lg">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
