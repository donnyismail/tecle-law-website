import Button from '@/components/ui/Button';
import { Truck, Car, Users, Flame, Building, User, Phone } from 'lucide-react';

export default function PersonalInjury() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Injured? You Deserve Justice.</h1>
          <p className="text-xl md:text-2xl">We fight for victims of serious accidents. No fees unless we win.</p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Types of Cases We Handle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">18-Wheeler Accidents</h3>
              <p className="text-gray-700">Serious truck accidents causing devastating injuries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Car className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Car Accidents</h3>
              <p className="text-gray-700">Motor vehicle collisions and intersection crashes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Rideshare Accidents</h3>
              <p className="text-gray-700">Uber and Lyft accident injuries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Flame className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Plant Explosions</h3>
              <p className="text-gray-700">Industrial and refinery explosion injuries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Slip & Fall</h3>
              <p className="text-gray-700">Premises liability and property injuries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <User className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Workplace Injuries</h3>
              <p className="text-gray-700">On-the-job accidents and work-related injuries</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Win No Fee */}
      <section className="bg-success text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">No Win, No Fee Guarantee</h2>
          <p className="text-xl mb-8">
            We work on contingency. You pay nothing unless we recover compensation for you. 
            Free consultation and case evaluation.
          </p>
          <a href="tel:7132825871">
            <Button variant="primary" className="bg-white text-success hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2 inline" />
              Get Free Case Review
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
