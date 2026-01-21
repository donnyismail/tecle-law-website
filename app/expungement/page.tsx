import Button from '@/components/ui/Button';
import { CheckCircle, Shield, Clock, FileText, Phone } from 'lucide-react';

export default function Expungement() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-success to-success-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Clear Your Record. Move Forward.</h1>
          <p className="text-xl md:text-2xl mb-8">Remove past criminal charges and restore your reputation</p>
        </div>
      </section>

      {/* Pricing Box */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-xl border-4 border-success text-center">
            <div className="text-5xl font-bold text-success mb-4">$1,495</div>
            <div className="text-2xl font-semibold mb-4">All-Inclusive</div>
            <div className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-bold mb-6">
              Money-Back Guarantee
            </div>
            <p className="text-lg text-gray-700 mb-6">If we cannot expunge your record, you get 100% of your money back.</p>
            <a href="tel:7132825871">
              <Button variant="primary" className="w-full">Call (713) 282-5871</Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-navy">Ready to Clear Your Record?</h2>
          <p className="text-xl mb-8 text-gray-700">Call now for a free consultation.</p>
          <a href="tel:7132825871">
            <Button variant="primary" className="text-xl px-12 py-4">
              <Phone className="w-6 h-6 mr-2 inline" />
              Call (713) 282-5871
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
