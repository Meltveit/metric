import type { Metadata } from 'next';
import DensityCalculator from '@/components/calculators/DensityCalculator';
import UnitConverter from '@/components/calculators/UnitConverter';
import InfoBox from '@/components/calculators/InfoBox';
import { densityUnits } from '@/lib/constants/densityUnits';
import { BarChart4, Weight } from 'lucide-react';
import { getDensitySeoData } from '@/lib/constants/seoData';

export const metadata: Metadata = {
  title: 'Density Calculator and Converter | MetricCalc',
  description: 'Calculate and convert density between different units. Convert between kg/m³, g/cm³, lb/ft³ and more with our free online calculator.',
  keywords: 'density calculator, density converter, kg/m³ to g/cm³, g/cm³ to kg/m³, lb/ft³ converter, specific gravity',
};

export default function DensityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Density Calculator and Converter</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Calculate density from mass and volume, or convert between different density units. 
          Our calculator handles common units like kg/m³, g/cm³, and lb/ft³ with precision.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Density Calculator</h2>
          <DensityCalculator />
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Density Unit Converter</h2>
          <UnitConverter unitGroups={densityUnits} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="What is Density?"
            icon={<BarChart4 className="h-5 w-5 text-primary" />}
            content={
              <div>
                <p className="mb-2">
                  Density is a measure of mass per unit volume. It is a fundamental physical property 
                  that describes how tightly matter is packed together.
                </p>
                <p>
                  The formula for density is:
                </p>
                <p className="font-mono mt-2 mb-2">
                  Density = Mass / Volume
                </p>
                <p>
                  Density is commonly measured in kg/m³ (SI unit) or g/cm³ in science and engineering.
                </p>
              </div>
            }
          />
          
          <InfoBox 
            title="Specific Gravity"
            icon={<Weight className="h-5 w-5 text-primary" />}
            content={
              <div>
                <p className="mb-2">
                  Specific gravity is the ratio of the density of a substance to the density of a reference 
                  substance, usually water (which has a density of 1000 kg/m³ at 4°C).
                </p>
                <p>
                  The formula for specific gravity is:
                </p>
                <p className="font-mono mt-2 mb-2">
                  Specific Gravity = Density of substance / Density of water
                </p>
                <p>
                  Specific gravity is a dimensionless quantity. For water, it equals 1.0.
                </p>
              </div>
            }
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Density</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>Density in Physics and Chemistry</h3>
            <p>
              Density is a key property in physics and chemistry that helps identify substances and predict how they will behave 
              in various conditions. It explains why some objects float in water while others sink, why hot air balloons rise, 
              and why oil floats on water.
            </p>
            
            <h3>Factors Affecting Density</h3>
            <p>
              Several factors can affect the density of a substance:
            </p>
            <ul>
              <li><strong>Temperature:</strong> Most substances expand when heated, which decreases their density. Water is unusual in that it reaches its maximum density at 4°C.</li>
              <li><strong>Pressure:</strong> Increasing pressure generally increases density, especially in gases but also in liquids and solids to a lesser extent.</li>
              <li><strong>Composition:</strong> Different materials have different densities based on their atomic makeup and molecular structure.</li>
            </ul>
            
            <h3>Measuring Density</h3>
            <p>
              Density can be measured directly by determining the mass and volume of a substance separately and then calculating 
              density using the formula D = M/V. For liquids, hydrometers are often used, which measure the buoyancy of an object 
              in the liquid. The deeper the object sinks, the less dense the liquid.
            </p>
            
            <h3>Applications of Density</h3>
            <p>
              Understanding density has many practical applications:
            </p>
            <ul>
              <li><strong>Material identification:</strong> Density can help identify unknown materials.</li>
              <li><strong>Quality control:</strong> In manufacturing, density measurements ensure product consistency.</li>
              <li><strong>Engineering:</strong> Density is crucial for calculating load, buoyancy, and material requirements.</li>
              <li><strong>Environmental science:</strong> Density drives circulation in oceans and atmosphere.</li>
              <li><strong>Medical applications:</strong> Bone density tests help diagnose osteoporosis.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What is the densest naturally occurring element?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Osmium is the densest naturally occurring element with a density of about 22.59 g/cm³.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Why do some objects float in water?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Objects float in water when their density is less than the density of water (1 g/cm³). 
                This is why ice (density about 0.92 g/cm³) floats in liquid water.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How does temperature affect density?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                In most substances, increasing temperature leads to a decrease in density as molecules spread apart. 
                Water is unusual because it reaches maximum density at 4°C, and both hotter and colder water are less dense.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What's the difference between mass, weight, and density?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mass is the amount of matter in an object. Weight is the force of gravity on an object. 
                Density is mass per unit volume (how tightly packed the matter is). Mass and density remain constant regardless 
                of location, while weight changes with gravity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}