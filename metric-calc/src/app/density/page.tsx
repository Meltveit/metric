'use client';

import { useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { formatNumber } from '@/lib/utils';
import { UnitGroup } from '@/types/units';

// Extended type to include string-based conversion functions
interface ExtendedUnit {
  code: string;
  name: string;
  symbol: string;
  group?: string;
  // String-based conversion functions
  toBaseStr?: string;
  fromBaseStr?: string;
  // Regular conversion functions (for backward compatibility)
  toBase?: (value: number) => number;
  fromBase?: (value: number) => number;
}

interface UnitConverterProps {
  unitGroups: UnitGroup[];
  className?: string;
}

export default function UnitConverter({ unitGroups, className }: UnitConverterProps) {
  // Get all units from all groups
  const allUnits = unitGroups.flatMap(group => group.units);
  
  // Use the first unit from the first group as the default "from" unit
  const defaultFromUnit = allUnits[0];
  
  // Use the second unit from the first group as the default "to" unit (if available)
  const defaultToUnit = allUnits.length > 1 ? allUnits[1] : allUnits[0];

  // State for the conversion
  const [fromValue, setFromValue] = useState('1');
  const [fromUnit, setFromUnit] = useState(defaultFromUnit);
  const [toUnit, setToUnit] = useState(defaultToUnit);
  const [toValue, setToValue] = useState('');
  const [formula, setFormula] = useState('');

  // Helper function to convert using string-based or regular function
  const convertValue = (value: number, unit: ExtendedUnit, direction: 'toBase' | 'fromBase'): number => {
    // If the unit has a regular function, use it
    if (unit[direction]) {
      return unit[direction](value);
    }
    
    // If it has a string-based function, evaluate it
    const fnStr = direction === 'toBase' ? unit.toBaseStr : unit.fromBaseStr;
    if (fnStr) {
      try {
        // Create a function from the string and execute it
        const fn = new Function('value', `return ${fnStr}`);
        return fn(value);
      } catch (error) {
        console.error(`Error evaluating ${direction} function:`, error);
        return value; // Return original value on error
      }
    }
    
    // If no conversion function is available, return the original value
    return value;
  };

  // Convert from one unit to another
  const convert = () => {
    if (fromValue === '' || isNaN(Number(fromValue))) {
      setToValue('');
      setFormula('');
      return;
    }

    // Get the numeric value
    const value = parseFloat(fromValue);

    // Convert to base unit
    const valueInBaseUnit = convertValue(value, fromUnit, 'toBase');

    // Convert from base unit to target unit
    const result = convertValue(valueInBaseUnit, toUnit, 'fromBase');

    // Update the result value
    setToValue(formatNumber(result));

    // Update formula
    updateFormula();
  };

  // Update the formula displayed
  const updateFormula = () => {
    // For simplicity, just show the unit symbols
    setFormula(`1 ${fromUnit.name} = ${formatNumber(convertValue(convertValue(1, fromUnit, 'toBase'), toUnit, 'fromBase'))} ${toUnit.name}`);
  };

  // Swap from and to units
  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    
    // If we have a valid result, use it as the new input
    if (toValue !== '' && !isNaN(Number(toValue))) {
      setFromValue(toValue);
    }
  };

  // Convert on initial load and when dependencies change
  useEffect(() => {
    convert();
  }, [fromUnit, toUnit]);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="fromValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Value
          </label>
          <input
            type="number"
            id="fromValue"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            onBlur={() => convert()}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            placeholder="Enter value"
          />
          
          <div className="mt-4">
            <label htmlFor="fromUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              From Unit
            </label>
            <select
              id="fromUnit"
              value={fromUnit.code}
              onChange={(e) => {
                const selectedUnit = allUnits.find(unit => unit.code === e.target.value);
                if (selectedUnit) setFromUnit(selectedUnit);
              }}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              {unitGroups.map((group) => (
                <optgroup key={group.name} label={group.name}>
                  {group.units.map((unit) => (
                    <option key={unit.code} value={unit.code}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="toValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Result
            </label>
            <button
              onClick={swapUnits}
              className="text-primary hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md"
              aria-label="Swap units"
              title="Swap units"
            >
              <ArrowRightLeft className="h-5 w-5" />
            </button>
          </div>
          <input
            type="text"
            id="toValue"
            value={toValue}
            readOnly
            className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 bg-gray-50 dark:bg-gray-700 dark:text-white"
            placeholder="Result"
          />
          
          <div className="mt-4">
            <label htmlFor="toUnit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              To Unit
            </label>
            <select
              id="toUnit"
              value={toUnit.code}
              onChange={(e) => {
                const selectedUnit = allUnits.find(unit => unit.code === e.target.value);
                if (selectedUnit) setToUnit(selectedUnit);
              }}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              {unitGroups.map((group) => (
                <optgroup key={group.name} label={group.name}>
                  {group.units.map((unit) => (
                    <option key={unit.code} value={unit.code}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {formula && (
        <div className="formula-box mt-8">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Formula</h3>
          <p className="text-gray-700 dark:text-gray-300">{formula}</p>
        </div>
      )}
    </div>
  );
}

// Import useState at the top, added here to maintain code flow in the explanation
import { useState } from 'react';