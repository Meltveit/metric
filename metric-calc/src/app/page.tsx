import Link from 'next/link';
import { 
  Beaker, 
  Ruler, 
  Thermometer, 
  HardDrive, 
  BarChart4, 
  Scale 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4 text-gray-900 dark:text-white font-bold text-4xl">Unit Conversion Made Easy</h1>
          <p className="text-xl text-gray-800 dark:text-gray-100 mb-8 font-medium">
            Fast, accurate, and easy-to-use unit converter for all your measurement needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/volume-mass" 
              className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section id="converters" className="py-8">
        <h2 className="text-center mb-10 text-3xl font-bold text-gray-900 dark:text-white">Choose a Converter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Volume & Mass */}
          <Link href="/volume-mass">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Beaker className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Volume & Mass</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Convert between liters, gallons, kilograms, pounds, and more.
              </p>
            </div>
          </Link>
          
          {/* Card 2: Length & Area */}
          <Link href="/length-area">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Ruler className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Length & Area</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Convert between meters, feet, square meters, acres, and more.
              </p>
            </div>
          </Link>
          
          {/* Card 3: Temperature */}
          <Link href="/temperature">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Thermometer className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Temperature</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Convert between Celsius, Fahrenheit, Kelvin, and more.
              </p>
            </div>
          </Link>
          
          {/* Card 4: Data Storage */}
          <Link href="/data-storage">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <HardDrive className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Data Storage</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Convert between bytes, kilobytes, megabytes, and more.
              </p>
            </div>
          </Link>
          
          {/* Card 5: Density */}
          <Link href="/density">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <BarChart4 className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Density</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Calculate and convert density measurements.
              </p>
            </div>
          </Link>
          
          {/* Card 6: Mixtures */}
          <Link href="/mixtures">
            <div className="h-64 bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">Mixtures</h3>
              </div>
              <p className="text-gray-200 font-medium text-base flex-grow">
                Calculate mixture ratios and proportions.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-12 mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fast, Accurate Conversions</h2>
        <p className="text-gray-800 dark:text-gray-100 font-medium max-w-3xl mx-auto">
          MetricCalc provides instant conversion between different units of measurement.
          Choose from a variety of converters for your everyday calculation needs.
        </p>
      </section>
      
    </div>
  );
}