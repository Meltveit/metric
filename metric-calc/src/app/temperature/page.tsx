import type { Metadata } from 'next';
// Fix: Import from the correct path where the component actually exists
import TemperatureConverter from '@/lib/constants/TemperatureConverter';
import InfoBox from '@/components/calculators/InfoBox';
import { Thermometer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Temperature Converter | MetricCalc',
  description: 'Convert between Celsius, Fahrenheit, Kelvin, and more temperature units with our free online calculator. Get instant and accurate results.',
  keywords: 'temperature converter, celsius to fahrenheit, kelvin to celsius, fahrenheit to kelvin, temperature calculator',
};

export default function TemperaturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Temperature Converter</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Convert between different temperature scales including Celsius, Fahrenheit, Kelvin, Rankine, and 
          Réaumur with this free online calculator. Get instant and accurate results.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <TemperatureConverter />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="Temperature Scales"
            icon={<Thermometer className="h-5 w-5 text-primary" />}
            content={[
              "Celsius (°C): Based on water freezing at 0°C and boiling at 100°C",
              "Fahrenheit (°F): Based on water freezing at 32°F and boiling at 212°F",
              "Kelvin (K): Absolute temperature scale with 0K at absolute zero",
              "Rankine (°R): Absolute temperature scale using Fahrenheit degrees",
              "Réaumur (°Ré): Historical scale with water freezing at 0°Ré and boiling at 80°Ré"
            ]}
          />
          
          <InfoBox 
            title="Important Temperature Points"
            icon={<Thermometer className="h-5 w-5 text-primary" />}
            content={[
              "Absolute Zero: 0K = -273.15°C = -459.67°F",
              "Water Freezing Point: 0°C = 32°F = 273.15K",
              "Water Boiling Point: 100°C = 212°F = 373.15K",
              "Room Temperature: ~20-25°C = ~68-77°F",
              "Average Human Body Temperature: 37°C = 98.6°F = 310.15K"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About Temperature Scales</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>Celsius (°C)</h3>
            <p>
              The Celsius scale, also known as the centigrade scale, was developed by Swedish astronomer Anders Celsius in 1742. 
              It is defined with the freezing point of water at 0°C and the boiling point at 100°C (at standard atmospheric pressure). 
              It is the most widely used temperature scale in the world, especially for scientific and everyday measurements.
            </p>
            
            <h3>Fahrenheit (°F)</h3>
            <p>
              The Fahrenheit scale was proposed by German physicist Daniel Gabriel Fahrenheit in 1724. In this scale, 
              the freezing point of water is at 32°F and the boiling point is at 212°F at standard atmospheric pressure.
              It is commonly used in the United States and a few other countries.
            </p>
            
            <h3>Kelvin (K)</h3>
            <p>
              The Kelvin scale is an absolute temperature scale, meaning it starts at absolute zero, the theoretical 
              temperature at which all thermal motion ceases. It was proposed by William Thomson, 1st Baron Kelvin, 
              in 1848. One kelvin (K) has the same magnitude as one degree Celsius, but the Kelvin scale starts at 
              absolute zero, which is -273.15°C. The Kelvin is the SI base unit of temperature.
            </p>
            
            <h3>Rankine (°R)</h3>
            <p>
              The Rankine scale, named after Scottish engineer William John Macquorn Rankine, is an absolute temperature 
              scale like Kelvin, but uses Fahrenheit degrees rather than Celsius degrees. Zero on the Rankine scale is 
              absolute zero, and a temperature difference of 1°R is equal to a temperature difference of 1°F. 
              It is primarily used in engineering systems where temperatures are measured in Fahrenheit.
            </p>
            
            <h3>Réaumur (°Ré)</h3>
            <p>
              The Réaumur scale is a temperature scale named after René Antoine Ferchault de Réaumur, who first proposed it 
              in 1730. In this scale, the freezing point of water is 0 degrees Réaumur (°Ré), and the boiling point is 80°Ré.
              Although rarely used today, it was widely used in Europe, particularly in France, Germany and Russia, in the 18th 
              and 19th centuries.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Why do we use different temperature scales?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Different temperature scales were developed at different times and for different purposes. Celsius is widely used internationally, 
                Fahrenheit is common in the US, and Kelvin is used in scientific contexts because it starts at absolute zero.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is the formula to convert Celsius to Fahrenheit?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To convert Celsius to Fahrenheit, use the formula: °F = (°C × 9/5) + 32
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is the formula to convert Fahrenheit to Celsius?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To convert Fahrenheit to Celsius, use the formula: °C = (°F - 32) × 5/9
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is absolute zero?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Absolute zero is the lowest possible temperature where all molecular motion stops. It is defined as 0 Kelvin, 
                which is equivalent to -273.15°C or -459.67°F.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}