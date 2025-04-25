import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import InfoBox from '@/components/calculators/InfoBox';
import { BarChart4, Scale } from 'lucide-react';

// Import the DensityCalculator component with dynamic import to ensure client-side rendering
const DensityCalculator = dynamic(
  () => import('@/components/calculators/DensityCalculator'),
  { ssr: false } // Disable server-side rendering to avoid serialization errors
);

export const metadata: Metadata = {
  title: 'Density Calculator and Converter | MetricCalc',
  description: 'Calculate and convert density between different units. Convert between kg/m³, g/cm³, lb/ft³ and more with our free online calculator.',
  keywords: 'density calculator, density converter, kg/m³ to g/cm³, g/cm³ to kg/m³, lb/ft³ converter, specific gravity',
};

export default function DensityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Density Calculator</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Calculate density, mass, or volume and convert between different density 
          units with this free online calculator. Includes common material densities as reference.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <DensityCalculator />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="About Density"
            icon={<BarChart4 className="h-5 w-5 text-primary" />}
            content={
              <div>
                <p className="mb-2">Density is the mass of a substance per unit volume, commonly measured in:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Kilograms per cubic meter (kg/m³)</li>
                  <li>Grams per cubic centimeter (g/cm³)</li>
                  <li>Pounds per cubic foot (lb/ft³)</li>
                </ul>
                <p className="mt-3">Density depends on temperature and pressure, with most substances expanding when heated, resulting in lower density.</p>
              </div>
            }
          />
          
          <InfoBox 
            title="Density Formulas"
            icon={<Scale className="h-5 w-5 text-primary" />}
            content={[
              "Density (ρ) = Mass (m) / Volume (V)",
              "Mass (m) = Density (ρ) × Volume (V)",
              "Volume (V) = Mass (m) / Density (ρ)",
              "Specific Gravity (SG) = Density of substance / Density of water",
              "Water has a density of 1,000 kg/m³ or 1 g/cm³ at 4°C"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Density</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>What is Density?</h3>
            <p>
              Density is a fundamental physical property that describes how much mass is contained within a given volume 
              of a substance. It is a measure of how tightly packed the molecules or atoms are within a material.
            </p>
            
            <p>
              Mathematically, density (ρ) is defined as the ratio of mass (m) to volume (V):
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="text-center font-mono">ρ = m / V</p>
            </div>
            
            <h3>Density Units</h3>
            <p>
              In the International System of Units (SI), density is measured in kilograms per cubic meter (kg/m³). 
              However, depending on the context, several other units are commonly used:
            </p>
            
            <ul>
              <li><strong>Grams per cubic centimeter (g/cm³)</strong>: Common in laboratory settings</li>
              <li><strong>Kilograms per liter (kg/L)</strong>: Used for liquids</li>
              <li><strong>Pounds per cubic foot (lb/ft³)</strong>: Common in construction and engineering in the US</li>
              <li><strong>Pounds per gallon (lb/gal)</strong>: Used for liquids in the US</li>
            </ul>
            
            <h3>Specific Gravity</h3>
            <p>
              Specific gravity (SG) is a dimensionless quantity that compares the density of a substance to the density 
              of a reference material. For liquids and solids, the reference is typically water at 4°C (1,000 kg/m³ or 1 g/cm³).
            </p>
            
            <p>
              Since specific gravity is a ratio, a substance with a specific gravity greater than 1 will sink in water, 
              while a substance with a specific gravity less than 1 will float.
            </p>
            
            <h3>Applications of Density</h3>
            <p>
              Density calculations are crucial in numerous fields:
            </p>
            
            <ul>
              <li><strong>Engineering</strong>: Material selection, buoyancy calculations, structural design</li>
              <li><strong>Chemistry</strong>: Identifying substances, calculating concentrations</li>
              <li><strong>Geology</strong>: Mineral identification and classification</li>
              <li><strong>Meteorology</strong>: Understanding air pressure and weather patterns</li>
              <li><strong>Transportation</strong>: Ship design, aircraft loading, fuel efficiency</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How is density affected by temperature?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most materials expand when heated and contract when cooled, which means their density typically 
                decreases with increasing temperature. Water is a notable exception between 0°C and 4°C, where it 
                becomes more dense as it warms, reaching maximum density at 4°C.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is the difference between mass, weight, and density?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mass is the amount of matter in an object (measured in kg). Weight is the force of gravity acting on an object (measured in N).
                Density is mass per unit volume (kg/m³). Two objects can have the same mass but different densities if they have different volumes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Why do some objects float while others sink?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Objects float when their density is less than the density of the liquid they're placed in. For example, 
                wood (density ~600-700 kg/m³) floats in water (density 1,000 kg/m³), while iron (density ~7,870 kg/m³) sinks.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How do I convert g/cm³ to kg/m³?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To convert from g/cm³ to kg/m³, multiply by 1,000. For example, 2.5 g/cm³ = 2,500 kg/m³.
                This is because 1 g/cm³ = 1 g/(0.01 m)³ = 1,000 kg/m³.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}