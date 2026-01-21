'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Shield, CheckCircle, Clock, Award, ChevronDown, Users, FileCheck, Scale } from 'lucide-react';
import { COMPANY, PRICING } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const faqs = [
  {
    question: 'What charges can be expunged in Texas?',
    answer: 'In Texas, you may be eligible for expungement if you were arrested but not charged, your case was dismissed, you were acquitted at trial, you completed a pretrial diversion program, or you received a pardon. Certain misdemeanors and some felonies may also qualify depending on the circumstances.',
  },
  {
    question: 'How long does the expungement process take?',
    answer: 'The expungement process typically takes 3-6 months from filing to completion. This includes preparing and filing the petition, serving all parties, waiting for the mandatory waiting period, and obtaining the court order.',
  },
  {
    question: 'What does the $1,495 fee include?',
    answer: 'Our flat fee includes everything: consultation, eligibility review, petition preparation, court filing fees, serving all parties, court appearances, and obtaining the final order. There are no hidden costs or surprise fees.',
  },
  {
    question: 'What happens if my expungement is denied?',
    answer: 'If we determine you are eligible but the court denies your expungement, you receive 100% of your money back. We thoroughly review your case before accepting it to ensure you have a strong chance of success.',
  },
  {
    question: 'Will my record be completely erased?',
    answer: 'Yes. Once expunged, the arrest and all related records are destroyed. You can legally deny the arrest ever occurred on job applications, housing applications, and most other situations.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold text-navy pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Expungement() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section - Premium Landing */}
      <section className="relative overflow-hidden bg-gradient-to-br from-success via-success-dark to-navy text-white py-20 md:py-28 px-4">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Credibility badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Users className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Trusted by 500+ Texans</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Clear Your Record.
            <span className="block text-secondary">Move Forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
          >
            Remove past criminal charges and restore your reputation. Start fresh today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={COMPANY.phoneLink}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-success font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call For Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Box - Premium Design */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            {/* Price header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="line-through">Regular $2,500</span>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-success mb-2">{PRICING.expungement}</div>
              <div className="text-xl font-semibold text-navy">All-Inclusive Flat Fee</div>
            </div>

            {/* Money-back guarantee badge */}
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-4 rounded-xl mb-8 shadow-lg shadow-secondary/25">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-bold">100% Money-Back Guarantee</span>
            </div>

            {/* What&apos;s included */}
            <div className="space-y-4 mb-8">
              {[
                'Free eligibility consultation',
                'Complete petition preparation',
                'All court filing fees included',
                'Court appearances handled',
                'Final order obtained',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={COMPANY.phoneLink}
              className="group flex items-center justify-center w-full px-8 py-5 bg-success text-white font-bold text-xl rounded-xl shadow-lg shadow-success/25 hover:shadow-xl hover:shadow-success/30 hover:bg-success-dark transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call {COMPANY.phone}
            </a>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>Licensed Attorney</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Can Be Expunged */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">What Can Be Expunged?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Texas law allows expungement in several situations</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {[
              'Cases that were dismissed',
              'Arrests without charges filed',
              'Acquittals at trial',
              'Completed pretrial diversion',
              'Pardoned offenses',
              'Certain Class C misdemeanors',
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-full flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <span className="text-navy font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Simple 3-Step Process</h2>
            <p className="text-gray-600">We handle everything for you</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-success/25 mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Free Consultation</h3>
              <p className="text-gray-600">We review your case and confirm eligibility at no cost.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-success/25 mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">We File Your Petition</h3>
              <p className="text-gray-600">We prepare and file all paperwork with the court.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-success/25 mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Record Cleared</h3>
              <p className="text-gray-600">Your record is expunged and you get a fresh start.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 divide-y divide-gray-100 p-2"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-success via-success-dark to-navy text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Scale className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Clear Your Record?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Don&apos;t let your past hold you back. Call now for a free consultation and take the first step toward a fresh start.
          </p>
          <a
            href={COMPANY.phoneLink}
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-success font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call {COMPANY.phone}
          </a>
        </motion.div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4"
          >
            <a
              href={COMPANY.phoneLink}
              className="flex items-center justify-center w-full px-6 py-4 bg-success text-white font-bold text-lg rounded-xl shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now - Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
