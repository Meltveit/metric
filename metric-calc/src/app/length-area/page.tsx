import type { Metadata } from 'next';
import UnitConverter from '@/components/calculators/UnitConverter';
import InfoBox from '@/components/calculators/InfoBox';
import { lengthAreaUnits } from '@/lib/constants/lengthAreaUnits';
import { Ruler, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Length & Area Converter | MetricCalc',
  description: 'Convert between length units (meters, feet, inches) and area units (square meters, acres, hectares) quickly and accurately with our free calculator.',
  keywords: 'length converter, area converter, meters to feet, square meters to acres, feet to meters, convert length, convert area',
};

export default function LengthAreaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Length & Area Converter</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Convert between different length units (meters, feet, inches) and area units 
          (square meters, acres, hectares) with this free online calculator. Get instant and accurate results.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <UnitConverter unitGroups={lengthAreaUnits} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="Common Length Conversions"
            icon={<Ruler className="h-5 w-5 text-primary" />}
            content={[
              "1 meter = 3.28084 feet",
              "1 foot = 0.3048 meters",
              "1 inch = 2.54 centimeters",
              "1 kilometer = 0.621371 miles",
              "1 mile = 1.60934 kilometers",
              "1 yard = 0.9144 meters"
            ]}
          />
          
          <InfoBox 
            title="Common Area Conversions"
            icon={<MapPin className="h-5 w-5 text-primary" />}
            content={[
              "1 square meter = 10.7639 square feet",
              "1 square foot = 0.092903 square meters",
              "1 acre = 4046.86 square meters",
              "1 hectare = 10,000 square meters",
              "1 square kilometer = 0.386102 square miles",
              "1 square mile = 2.58999 square kilometers"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About Length and Area Units</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>Length Units</h3>
            <p>
              Length is a measure of distance. In the International System of Units (SI),
              the base unit of length is the meter (m). Various civilizations have used different 
              units of length throughout history, leading to the variety of units we have today.
            </p>
            <p>
              The metric system uses the meter as its base unit, with larger and smaller units created 
              by adding prefixes (millimeter, centimeter, kilometer, etc.). The imperial system, used 
              primarily in the United States, uses units like inches, feet, yards, and miles.
            </p>
            
            <h3>Area Units</h3>
            <p>
              Area is a measure of the size of a two-dimensional surface. The SI unit for area is the 
              square meter (m²). Area units are typically derived from length units, usually by squaring them.
            </p>
            <p>
              Common area units include square meters, square feet, square miles, acres, and hectares. 
              The hectare (ha) is a common unit for measuring large areas of land and equals 10,000 square meters.
              The acre is a traditional unit commonly used in the US and UK, approximately equal to 4,047 square meters.
            </p>
            
            <h3>Metric vs. Imperial Systems</h3>
            <p>
              The metric system is based on powers of 10, making conversions between units straightforward.
              For example, 1 kilometer = 1,000 meters, and 1 meter = 100 centimeters.
            </p>
            <p>
              The imperial system has less standardized conversion factors. For example, 
              1 mile = 5,280 feet, 1 yard = 3 feet, and 1 foot = 12 inches.
            </p>
            <p>
              Most countries around the world use the metric system, while the United States still 
              commonly uses the imperial system for everyday measurements.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How many feet are in a meter?</h3>
              <p className="text-gray-700 dark:text-gray-300">There are 3.28084 feet in a meter.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">How many square feet are in an acre?</h3>
              <p className="text-gray-700 dark:text-gray-300">There are 43,560 square feet in an acre.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is the difference between a square kilometer and a hectare?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A square kilometer (km²) is equal to 100 hectares. A hectare is 10,000 square meters, while 
                a square kilometer is 1,000,000 square meters.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How do I convert square meters to square feet?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To convert square meters to square feet, multiply the area in square meters by 10.7639.
                For example, 10 square meters = 10 × 10.7639 = 107.639 square feet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}