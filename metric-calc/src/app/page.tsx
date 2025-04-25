import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { 
  BarChart4, 
  Ruler, 
  Thermometer, 
  Droplet, 
  HardDrive, 
  Scale 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4 text-gray-900 dark:text-white font-bold text-4xl">Unit Conversion Made Easy</h1>
          <p className="text-xl text-gray-800 dark:text-gray-100 mb-8 font-medium">
            Fast, accurate, and easy-to-use unit converter for all your measurement needs.
            Convert between different units of measurement with just a few clicks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/volume-mass" 
              className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Get Started
            </Link>
            <Link 
              href="#converters" 
              className="bg-secondary hover:bg-secondary/80 text-gray-900 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Explore Converters
            </Link>
          </div>
        </div>
      </section>

      <section id="converters" className="py-12">
        <h2 className="text-center mb-12 text-3xl font-bold text-gray-900 dark:text-white">Choose a Converter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            href="/volume-mass" 
            title="Volume & Mass" 
            description="Convert between liters, gallons, kilograms, pounds, and more."
            icon={<Droplet className="h-6 w-6" />}
          />
          <Card 
            href="/length-area" 
            title="Length & Area" 
            description="Convert between meters, feet, square meters, acres, and more."
            icon={<Ruler className="h-6 w-6" />}
          />
          <Card 
            href="/temperature" 
            title="Temperature" 
            description="Convert between Celsius, Fahrenheit, Kelvin, and more."
            icon={<Thermometer className="h-6 w-6" />}
          />
          <Card 
            href="/data-storage" 
            title="Data Storage" 
            description="Convert between bytes, kilobytes, megabytes, and more."
            icon={<HardDrive className="h-6 w-6" />}
          />
          <Card 
            href="/density" 
            title="Density" 
            description="Calculate and convert density measurements."
            icon={<BarChart4 className="h-6 w-6" />}
          />
          <Card 
            href="/mixtures" 
            title="Mixtures" 
            description="Calculate mixture ratios and proportions."
            icon={<Scale className="h-6 w-6" />}
          />
        </div>
      </section>

      <section className="py-12 bg-secondary/30 rounded-xl mt-12 p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8 text-3xl font-bold text-gray-900 dark:text-white">Why Choose MetricCalc?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Fast & Accurate</h3>
              <p className="text-gray-800 dark:text-gray-100 font-medium">Instant conversions with high precision results</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Privacy-Focused</h3>
              <p className="text-gray-800 dark:text-gray-100 font-medium">No ads, no tracking, and no data collection</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"></path><path d="M2 13h10"></path><path d="m9 16 3-3-3-3"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Comprehensive</h3>
              <p className="text-gray-800 dark:text-gray-100 font-medium">All the unit converters you need in one place</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}