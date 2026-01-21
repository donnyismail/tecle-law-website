'use client';

import { Scale, Heart, Shield, Users, User } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { FadeIn } from '@/components/ui/fade-in';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-dark to-primary text-white py-20 px-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fighting for Justice in Houston</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/90">Dedicated to protecting your rights and securing your future</p>
          </FadeIn>
        </div>
      </section>

      {/* Attorney Section */}
      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm">Attorney Photo</p>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              </div>
            </FadeIn>

            {/* Bio */}
            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold text-navy mb-2">Meet Your Attorney</h2>
                <p className="text-primary font-semibold mb-6">Founder, TECLE LAW, PLLC</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With years of experience in personal injury and criminal expungement law, our founding attorney
                  is committed to providing aggressive representation while maintaining personalized attention
                  to every client.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Having helped hundreds of Texans recover compensation and clear their records, we understand
                  the life-changing impact that quality legal representation can have on individuals and families.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-500">Education</span>
                    <p className="font-semibold text-navy">Texas Law School</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-500">Bar Admission</span>
                    <p className="font-semibold text-navy">State Bar of Texas</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission */}
      <AnimatedSection className="py-16 px-4 bg-gray-50">
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
      <AnimatedSection className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-navy">Why Choose TECLE LAW</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:scale-[1.02]">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-5 group-hover:bg-primary/20 transition-colors">
                  <Scale className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Experienced Legal Representation</h3>
                <p className="text-gray-600">Years of experience handling personal injury and expungement cases in Houston</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-success/20 hover:scale-[1.02]">
                <div className="flex items-center justify-center w-14 h-14 bg-success/10 rounded-xl mb-5 group-hover:bg-success/20 transition-colors">
                  <Heart className="w-7 h-7 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Personalized Attention</h3>
                <p className="text-gray-600">You are not just a case number. We treat every client with respect and care</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 hover:scale-[1.02]">
                <div className="flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-5 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Proven Results</h3>
                <p className="text-gray-600">Track record of successful outcomes for our clients</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:scale-[1.02]">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-5 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Client-Focused Service</h3>
                <p className="text-gray-600">We keep you informed every step of the way and respond promptly to your concerns</p>
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
