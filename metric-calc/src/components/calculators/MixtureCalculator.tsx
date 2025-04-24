'use client';

import { useState, useEffect } from 'react';
import { Beaker, Trash2 } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

type RatioType = 'parts' | 'percentage';
type CalculationType = 'ingredient' | 'total';

interface Ingredient {
  id: string;
  name: string;
  value: number;
}

export default function MixtureCalculator() {
  // State for the mixture ingredients
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Ingredient 1', value: 1 },
    { id: '2', name: 'Ingredient 2', value: 2 },
  ]);
  
  // State for ratio type and calculation type
  const [ratioType, setRatioType] = useState<RatioType>('parts');
  const [calcType, setCalcType] = useState<CalculationType>('total');
  
  // State for total and results
  const [total, setTotal] = useState<number>(3); // Initial sum of parts
  const [targetTotal, setTargetTotal] = useState<string>('100');
  const [results, setResults] = useState<{ name: string; amount: number }[]>([]);
  
  // Add a new ingredient
  const addIngredient = () => {
    const newId = (ingredients.length + 1).toString();
    setIngredients([
      ...ingredients,
      { id: newId, name: `Ingredient ${newId}`, value: 1 }
    ]);
  };
  
  // Remove an ingredient
  const removeIngredient = (id: string) => {
    if (ingredients.length > 2) {
      setIngredients(ingredients.filter(ing => ing.id !== id));
    }
  };
  
  // Update ingredient name
  const updateName = (id: string, name: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, name } : ing
    ));
  };
  
  // Update ingredient value
  const updateValue = (id: string, valueStr: string) => {
    const value = parseFloat(valueStr) || 0;
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, value } : ing
    ));
  };
  
  // Calculate the mixture
  const calculateMixture = () => {
    // Calculate the total parts/percentage
    const sum = ingredients.reduce((acc, ing) => acc + ing.value, 0);
    setTotal(sum);
    
    if (ratioType === 'parts') {
      // For parts ratio, calculate based on target total amount
      const targetValue = parseFloat(targetTotal) || 0;
      
      // Calculate each ingredient amount based on its proportion of the total
      const calculatedResults = ingredients.map(ing => ({
        name: ing.name,
        amount: (ing.value / sum) * targetValue
      }));
      
      setResults(calculatedResults);
    } else if (ratioType === 'percentage') {
      // For percentage ratio, ensure total is 100%
      const scale = sum > 0 ? 100 / sum : 0;
      
      // Calculate the normalized percentages and amounts
      const targetValue = parseFloat(targetTotal) || 0;
      const calculatedResults = ingredients.map(ing => ({
        name: ing.name,
        amount: (ing.value * scale / 100) * targetValue
      }));
      
      setResults(calculatedResults);
    }
  };
  
  // Calculate when inputs change
  useEffect(() => {
    calculateMixture();
  }, [ingredients, ratioType, targetTotal]);
  
  // Normalize percentages to 100% if percentage mode is selected
  const normalizeToCents = () => {
    if (ratioType === 'percentage') {
      const sum = ingredients.reduce((acc, ing) => acc + ing.value, 0);
      if (sum > 0) {
        const scale = 100 / sum;
        setIngredients(ingredients.map(ing => ({
          ...ing,
          value: ing.value * scale
        })));
      }
    }
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ratio Type
          </label>
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setRatioType('parts')}
              className={`px-4 py-2 rounded-l-md border ${ratioType === 'parts' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
            >
              Parts
            </button>
            <button
              onClick={() => setRatioType('percentage')}
              className={`px-4 py-2 rounded-r-md border ${ratioType === 'percentage' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
            >
              Percentage
            </button>
          </div>
        </div>
        
        <div>
          <label htmlFor="targetTotal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Target Total Amount
          </label>
          <div className="flex rounded-md shadow-sm">
            <input
              type="number"
              id="targetTotal"
              value={targetTotal}
              onChange={(e) => setTargetTotal(e.target.value)}
              className="w-32 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              placeholder="Total amount"
              min="0"
              step="any"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Ingredients</h3>
          <button
            onClick={addIngredient}
            className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Add Ingredient
          </button>
        </div>
        
        <div className="space-y-3">
          {ingredients.map((ing) => (
            <div key={ing.id} className="flex items-center gap-3">
              <input
                type="text"
                value={ing.name}
                onChange={(e) => updateName(ing.id, e.target.value)}
                className="flex-grow border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Ingredient name"
              />
              <div className="flex items-center">
                <input
                  type="number"
                  value={ing.value}
                  onChange={(e) => updateValue(ing.id, e.target.value)}
                  className="w-24 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
                  placeholder="Value"
                  min="0"
                  step="any"
                />
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {ratioType === 'percentage' ? '%' : 'parts'}
                </span>
              </div>
              <button
                onClick={() => removeIngredient(ing.id)}
                className="p-2 text-red-500 hover:text-red-700 transition-colors"
                title="Remove ingredient"
                disabled={ingredients.length <= 2}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        
        {ratioType === 'percentage' && total !== 100 && (
          <div className="mt-3 flex justify-between items-center text-sm">
            <div className="text-amber-600 dark:text-amber-400">
              Total: {formatNumber(total)}% (should be 100%)
            </div>
            <button
              onClick={normalizeToCents}
              className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100 rounded-md hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors text-sm"
            >
              Normalize to 100%
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Beaker className="mr-2 h-5 w-5 text-primary" />
          Results
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Ingredient
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {ratioType === 'parts' ? 'Parts' : 'Percentage'}
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {ingredients.map((ing, index) => (
                <tr key={ing.id} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {ing.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {ratioType === 'percentage' 
                      ? `${formatNumber(total > 0 ? (ing.value / total) * 100 : 0)}%`
                      : `${formatNumber(ing.value)} of ${formatNumber(total)}`}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {results[index] ? formatNumber(results[index].amount) : 0}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 dark:bg-gray-700">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  Total
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {ratioType === 'percentage' ? '100%' : formatNumber(total)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(parseFloat(targetTotal) || 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}