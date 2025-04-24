import type { Metadata } from 'next';
import MixtureCalculator from '@/components/calculators/MixtureCalculator';
import InfoBox from '@/components/calculators/InfoBox';
import { Ratio, Beaker } from 'lucide-react';
// Removed unused imports: Mix (which doesn't exist) and getMixturesSeoData

export const metadata: Metadata = {
  title: 'Mixture Ratio Calculator | MetricCalc',
  description: 'Calculate mixture ratios, proportions, and dilutions with our free online calculator. Perfect for cooking, chemistry, construction, and more.',
  keywords: 'mixture ratio calculator, proportion calculator, dilution calculator, ratio converter, mixing ratio',
};

export default function MixturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Mixture Ratio Calculator</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Calculate mixture proportions based on parts or percentages. Perfect for recipes, construction materials, 
          chemical solutions, and any application where precise mixtures are required.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <MixtureCalculator />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="Parts vs. Percentage"
            icon={<Ratio className="h-5 w-5 text-primary" />}
            content={
              <div>
                <p className="mb-2">
                  <strong>Parts Ratio:</strong> Specifies ingredients in relative proportions. Example: 
                  a 1:2:3 ratio means for every 1 part of the first ingredient, use 2 parts of the second 
                  and 3 parts of the third.
                </p>
                <p>
                  <strong>Percentage Ratio:</strong> Each ingredient is represented as a percentage of the total mixture. 
                  All percentages should add up to 100%.
                </p>
              </div>
            }
          />
          
          <InfoBox 
            title="Common Applications"
            icon={<Beaker className="h-5 w-5 text-primary" />}
            content={[
              "Cooking and baking recipes",
              "Concrete and mortar mixing (cement:sand:aggregate)",
              "Paint color mixing",
              "Chemical solutions and dilutions",
              "Fertilizer mixing",
              "Investment portfolio allocation"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Mixture Ratios</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>What Are Mixture Ratios?</h3>
            <p>
              A mixture ratio is a way to express the relative proportions of different ingredients or components 
              in a mixture. Ratios can be expressed in several ways:
            </p>
            <ul>
              <li><strong>Simple ratio notation:</strong> Such as 1:2:3, where the numbers represent the relative quantities of each component.</li>
              <li><strong>Parts by volume or weight:</strong> For example, &quot;1 part cement to 3 parts sand&quot; in construction.</li>
              <li><strong>Percentages:</strong> Where each component is expressed as a percent of the total (and all percentages sum to 100%).</li>
              <li><strong>Fractions:</strong> Such as &quot;½ cup sugar to 2 cups flour&quot; in cooking.</li>
            </ul>
            
            <h3>How to Use Mixture Ratios</h3>
            <p>
              To use a mixture ratio, you need to:
            </p>
            <ol>
              <li>Determine the total amount of mixture needed</li>
              <li>Calculate the proportion of the total that each component represents</li>
              <li>Multiply the total by each proportion to find the amount of each component</li>
            </ol>
            <p>
              For example, if you need 10 kg of a mixture with a ratio of 1:2:3, the total parts are 1+2+3=6. 
              Therefore:
            </p>
            <ul>
              <li>First component: (1/6) × 10 kg = 1.67 kg</li>
              <li>Second component: (2/6) × 10 kg = 3.33 kg</li>
              <li>Third component: (3/6) × 10 kg = 5 kg</li>
            </ul>
            
            <h3>Common Mixture Ratio Applications</h3>
            
            <h4>Construction</h4>
            <p>
              In construction, concrete typically uses a ratio of 1:2:4 (cement:sand:aggregate) for general purposes,
              while mortar might use 1:3 (cement:sand) for bricklaying.
            </p>
            
            <h4>Cooking</h4>
            <p>
              Baking relies heavily on ratios. A basic cookie dough might follow a 3:2:1 ratio (flour:fat:sugar), 
              while bread often uses a 5:3:1 ratio (flour:water:fat).
            </p>
            
            <h4>Chemistry</h4>
            <p>
              Solution preparation in chemistry often uses percentage concentrations, such as a 5% salt solution 
              meaning 5 grams of salt dissolved in enough water to make 100 mL of solution.
            </p>
            
            <h4>Investment</h4>
            <p>
              Asset allocation in investment portfolios is often expressed as ratios or percentages, 
              such as 60:40 (stocks:bonds) or 50%:30%:20% (stocks:bonds:cash).
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What&apos;s the difference between ratio and proportion?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A ratio compares quantities of the same kind, showing their relative sizes (e.g., 1:2). 
                A proportion is an equation stating that two ratios are equal, such as 1:2 = 2:4.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How do I convert a ratio to a percentage?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To convert a ratio to a percentage, add all parts of the ratio to find the total. 
                Then divide each part by the total and multiply by 100. For example, in a 1:3 ratio, 
                the total is 4, so the percentages are (1/4 × 100) = 25% and (3/4 × 100) = 75%.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What is a dilution ratio?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A dilution ratio expresses how much a concentrated substance should be diluted. 
                For example, a 1:10 dilution means 1 part concentrate to 10 parts diluent (usually water), 
                resulting in a solution that is 11 times larger than the original concentrate.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How do I scale a recipe while maintaining the ratio?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To scale a recipe, multiply all ingredients by the same factor. If you want to make 1.5 times the recipe, 
                multiply all ingredient amounts by 1.5. This maintains the original proportions and ensures the recipe works correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}