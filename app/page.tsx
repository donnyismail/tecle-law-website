'use client';

import Link from 'next/link';
import { Shield, Clock, Award, Phone, ArrowRight, Scale, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/constants';
import { StatsCounter } from '@/components/ui/stats-counter';
import { TestimonialCard, placeholderTestimonials } from '@/components/ui/testimonial-card';

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

export default function Home() {
  return (
    <div>
      {/* Hero Section - Premium Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-dark to-primary text-white py-24 md:py-32 px-4">
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating accent shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Scale className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Houston&apos;s Trusted Law Firm</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Injured or Need to
            <span className="block text-secondary">Clear Your Record?</span>
            We Fight For You.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto"
          >
            Personal injury and expungement attorney. No fees unless we win.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-success text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-success/25 hover:shadow-xl hover:shadow-success/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-success to-success-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/expungement"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white hover:text-navy transition-all duration-300"
            >
              Clean My Record
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Phone CTA */}
          <motion.a
            href={COMPANY.phoneLink}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 text-2xl font-bold hover:text-secondary transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            {COMPANY.phone}
          </motion.a>
        </div>
      </section>

      {/* Practice Areas - Enhanced Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">How We Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expert legal representation for personal injury and expungement cases in Texas</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Personal Injury Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Personal Injury</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Injured in an accident? We fight for victims of 18-wheeler accidents, car crashes, rideshare incidents, and industrial explosions. No fees unless we win your case.
              </p>
              <Link
                href="/personal-injury"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Expungement Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-success/20 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-2xl mb-6 group-hover:bg-success/20 transition-colors">
                <FileCheck className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Criminal Expungement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Clear your record and move forward. $1,495 all-inclusive with a money-back guarantee if we cannot expunge your charges. Get a fresh start today.
              </p>
              <Link
                href="/expungement"
                className="inline-flex items-center text-success font-semibold hover:text-success-dark group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals - Card Based Design */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* No Win No Fee */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center border border-gray-100"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">No Win, No Fee</h3>
              <p className="text-gray-600">Personal injury cases on contingency. You pay nothing unless we win.</p>
            </motion.div>

            {/* Same-Day Consultations */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center border border-gray-100"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mx-auto mb-6">
                <Clock className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Same-Day Consultations</h3>
              <p className="text-gray-600">Free consultations available. We respond within 24 hours.</p>
            </motion.div>

            {/* Money-Back Guarantee */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center border border-gray-100"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-6">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Money-Back Guarantee</h3>
              <p className="text-gray-600">100% refund on expungements if we cannot clear your record.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Simple 3-Step Process</h2>
            <p className="text-gray-600">Getting started is easy</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/25 mx-auto">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Free Consultation</h3>
              <p className="text-gray-600">We review your case at no cost and explain your options.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-success to-success-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-success/25 mx-auto">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">We Fight For You</h3>
              <p className="text-gray-600">We handle all paperwork and legal proceedings on your behalf.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-secondary/25 mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">Get Results</h3>
              <p className="text-gray-600">Receive the compensation or record clearance you deserve.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real results from real people we have helped</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {placeholderTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-navy" />
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
          className="relative max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-white/90">
            Contact us today for a free consultation. No obligations, no fees unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={COMPANY.phoneLink}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {COMPANY.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
