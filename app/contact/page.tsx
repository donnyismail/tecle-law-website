import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl">Free consultations. We respond within 24 hours.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-navy">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:7132825871" className="text-xl text-primary hover:text-primary-dark">
                      (713) 282-5871
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:intake@teclelaw.com" className="text-lg text-primary hover:text-primary-dark">
                      intake@teclelaw.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hours</h3>
                    <p className="text-gray-700">Monday - Friday</p>
                    <p className="text-gray-700">9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">Houston, Texas</p>
                    <p className="text-gray-700">Serving Greater Houston Area</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-navy">Ready to Get Started?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Call us now for a free consultation. We will review your case and explain your options at no cost.
              </p>
              <a href="tel:7132825871" className="block w-full bg-success text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-success-dark transition-colors">
                <Phone className="w-5 h-5 inline mr-2" />
                Call (713) 282-5871
              </a>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 text-center">
                  Personal Injury: No fees unless we win<br />
                  Expungement: $1,495 with money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
