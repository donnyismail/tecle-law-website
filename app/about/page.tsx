'use client';

import { Scale, Heart, Shield, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { FadeIn } from '@/components/ui/fade-in';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fighting for Justice in Houston</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl">Dedicated to protecting your rights and securing your future</p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8 text-navy">Our Mission</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At TECLE LAW, PLLC, we believe everyone deserves a fair chance and a strong advocate on their side.
              Whether you have been injured in an accident or need to clear your criminal record, we fight tirelessly
              to protect your rights and secure the best possible outcome for your case.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that legal challenges can be overwhelming. That is why we provide personalized attention,
              clear communication, and aggressive representation every step of the way.
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="bg-gray-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-navy">Why Choose TECLE LAW</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Scale className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Experienced Legal Representation</h3>
                <p className="text-gray-700">Years of experience handling personal injury and expungement cases in Houston</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Heart className="w-10 h-10 text-success mb-4" />
                <h3 className="text-xl font-bold mb-3">Personalized Attention</h3>
                <p className="text-gray-700">You are not just a case number. We treat every client with respect and care</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-gray-700">Track record of successful outcomes for our clients</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Client-Focused Service</h3>
                <p className="text-gray-700">We keep you informed every step of the way and respond promptly to your concerns</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Serving Houston */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-navy">Serving Houston and Surrounding Areas</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-700">
              We proudly serve clients throughout the Greater Houston area, including Harris County,
              Fort Bend County, and Montgomery County.
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>
    </div>
  );
}
