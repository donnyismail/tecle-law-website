import type { Metadata } from 'next';
import ContactForm from '@/components/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact TECLE LAW | Free Legal Consultation Houston',
  description: 'Contact TECLE LAW for a free consultation. Call (713) 282-5871. Houston personal injury and expungement attorney. We respond within 24 hours.',
  openGraph: {
    title: 'Contact TECLE LAW | Free Consultation',
    description: 'Call (713) 282-5871 for free legal consultation.',
  },
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90">
            Free consultations • We respond within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
