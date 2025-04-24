import type { Metadata } from 'next';
import UnitConverter from '@/components/calculators/UnitConverter';
import InfoBox from '@/components/calculators/InfoBox';
import { volumeMassUnits } from '@/lib/constants/volumeMassUnits';
import { Beaker, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Volume & Mass Converter | MetricCalc',
  description: 'Convert between volume units (liters, gallons, ml) and mass units (kg, pounds, ounces) quickly and accurately with our free online calculator.',
  keywords: 'volume converter, mass converter, liters to gallons, kg to pounds, ml to oz, unit conversion',
};

export default function VolumeMassPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Volume & Mass Converter</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Convert between different volume units (liters, gallons, milliliters) and mass units 
          (kilograms, pounds, ounces) with this free online calculator. Get instant and accurate results.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <UnitConverter unitGroups={volumeMassUnits} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="Common Volume Conversions"
            icon={<Beaker className="h-5 w-5 text-primary" />}
            content={[
              "1 liter = 0.264172 US gallons",
              "1 US gallon = 3.78541 liters",
              "1 liter = 1000 milliliters",
              "1 cup = 236.588 milliliters",
              "1 cubic meter = 1000 liters",
              "1 US fluid ounce = 29.5735 milliliters"
            ]}
          />
          
          <InfoBox 
            title="Common Mass Conversions"
            icon={<Scale className="h-5 w-5 text-primary" />}
            content={[
              "1 kilogram = 2.20462 pounds",
              "1 pound = 0.453592 kilograms",
              "1 kilogram = 1000 grams",
              "1 pound = 16 ounces",
              "1 metric ton = 1000 kilograms",
              "1 stone = 14 pounds"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About Volume and Mass Units</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>Volume Units</h3>
            <p>
              Volume is the quantity of three-dimensional space enclosed by a closed surface. 
              Common units for volume include liters, gallons, cubic meters, and milliliters.
            </p>
            <p>
              The metric system uses liters as the base unit, with larger and smaller units created by adding
              prefixes (milliliter, centiliter, etc.). The imperial system uses gallons, quarts, pints, and
              fluid ounces, which have different conversion factors.
            </p>
            
            <h3>Mass Units</h3>
            <p>
              Mass is a measure of the amount of matter in an object. Common units for mass include 
              kilograms, grams, pounds, and ounces.
            </p>
            <p>
              The metric system uses the kilogram as the base unit of mass, with larger and smaller units
              created by adding prefixes (milligram, gram, etc.). The imperial system uses pounds and ounces,
              where 1 pound equals 16 ounces.
            </p>
            
            <h3>Volume vs. Weight vs. Mass</h3>
            <p>
              It&apos;s important to understand the difference between volume, weight, and mass:
            </p>
            <ul>
              <li><strong>Volume</strong> measures the amount of space an object or substance occupies.</li>
              <li><strong>Mass</strong> is the amount of matter in an object.</li>
              <li><strong>Weight</strong> is the force exerted on an object due to gravity.</li>
            </ul>
            <p>
              On Earth, we often use weight and mass interchangeably, but they are different physical quantities.
              Mass remains constant regardless of location, while weight changes with gravity.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How many milliliters in a cup?</h3>
              <p className="text-gray-700 dark:text-gray-300">There are 236.588 milliliters in a US cup.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">How many liters in a gallon?</h3>
              <p className="text-gray-700 dark:text-gray-300">There are 3.78541 liters in a US gallon and 4.54609 liters in a UK (imperial) gallon.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">How many grams in a pound?</h3>
              <p className="text-gray-700 dark:text-gray-300">There are 453.592 grams in a pound.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">What&apos;s the difference between mass and weight?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mass is a measure of the amount of matter in an object, while weight is the force exerted on an object due to gravity.
                Mass remains constant regardless of location, while weight changes with gravity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}