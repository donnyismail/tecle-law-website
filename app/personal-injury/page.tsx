'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Car, Users, Flame, Building, HardHat, Phone, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const caseTypes = [
  {
    icon: Truck,
    title: '18-Wheeler Accidents',
    description: 'Serious truck accidents causing devastating injuries. We hold trucking companies accountable.',
  },
  {
    icon: Car,
    title: 'Car Accidents',
    description: 'Motor vehicle collisions, intersection crashes, and rear-end accidents.',
  },
  {
    icon: Users,
    title: 'Rideshare Accidents',
    description: 'Uber and Lyft accident injuries. We navigate the complex insurance claims.',
  },
  {
    icon: Flame,
    title: 'Plant Explosions',
    description: 'Industrial and refinery explosion injuries. Fighting for worker safety.',
  },
  {
    icon: Building,
    title: 'Slip & Fall',
    description: 'Premises liability and dangerous property condition injuries.',
  },
  {
    icon: HardHat,
    title: 'Workplace Injuries',
    description: 'On-the-job accidents, construction injuries, and occupational hazards.',
  },
];

export default function PersonalInjury() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-dark to-primary text-white py-24 md:py-32 px-4">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">No Win, No Fee Guarantee</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Injured?
            <span className="block text-secondary">You Deserve Justice.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto"
          >
            We fight for victims of serious accidents. No fees unless we win your case.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={COMPANY.phoneLink}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-success text-white font-semibold rounded-xl shadow-lg shadow-success/25 hover:shadow-xl hover:shadow-success/30 hover:bg-success-dark transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Free Case Review
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white hover:text-navy transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Types of Cases We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From car accidents to industrial explosions, we have experience with serious injury cases</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {caseTypes.map((caseType, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-5 group-hover:bg-primary/20 transition-colors">
                  <caseType.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{caseType.title}</h3>
                <p className="text-gray-600">{caseType.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* No Win No Fee - Prominent Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-success via-success-dark to-navy" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Shield icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-xl">
                  <Shield className="w-12 h-12 text-success" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left text-white">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">No Win, No Fee Guarantee</h2>
                <p className="text-xl text-white/90 mb-6">
                  We work on contingency. You pay nothing unless we recover compensation for you. Free consultation and case evaluation.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {['Free Consultation', 'No Upfront Costs', 'Pay Only If We Win'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/90">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center md:text-left">
              <a
                href={COMPANY.phoneLink}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-success font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call {COMPANY.phone}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Why Choose Us?</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Personal Attention', description: 'Your case is handled directly by an attorney, not passed off to paralegals.' },
              { title: 'Aggressive Advocacy', description: 'We fight hard to maximize your compensation against insurance companies.' },
              { title: 'Clear Communication', description: 'We keep you informed every step of the way with regular updates.' },
              { title: 'Proven Results', description: 'Track record of successful settlements and verdicts for our clients.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Contact us today for a free, no-obligation consultation. We&apos;ll review your case and explain your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={COMPANY.phoneLink}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary-dark transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-navy font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
