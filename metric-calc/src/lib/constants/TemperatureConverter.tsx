'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRightLeft, Thermometer } from 'lucide-react';
import { temperatureUnits, getTemperatureFormula } from '@/lib/constants/temperatureUnits';
import { formatNumber } from '@/lib/utils';
import { TemperatureUnit } from '@/types/units';

export default function TemperatureConverter() {
  const [fromValue, setFromValue] = useState<string>('0');
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>(temperatureUnits[0]); // Celsius
  const [toUnit, setToUnit] = useState<TemperatureUnit>(temperatureUnits[1]); // Fahrenheit
  const [toValue, setToValue] = useState<string>('');
  const [formula, setFormula] = useState<string>('');

  // Convert temperature - wrapped in useCallback
  const convert = useCallback(() => {
    if (fromValue === '' || isNaN(Number(fromValue))) {
      setToValue('');
      setFormula('');
      return;
    }

    const value = parseFloat(fromValue);
    
    // Get the conversion function for this unit pair
    const result = fromUnit.convert[toUnit.code](value);
    
    // Update the result
    setToValue(formatNumber(result, 2));
    
    // Update formula
    setFormula(getTemperatureFormula(fromUnit.code, toUnit.code));
  }, [fromValue, fromUnit, toUnit]);

  // Swap from and to units
  const swapUnits = useCallback(() => {
    const oldFromUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(oldFromUnit);
    
    // If we have a valid result, use it as the new input
    if (toValue !== '' && !isNaN(Number(toValue))) {
      setFromValue(toValue);
    }
  }, [fromUnit, toUnit, toValue]);

  // Set a preset temperature conversion
  const setPresetConversion = useCallback((fromUnitCode: string, toUnitCode: string, value: number) => {
    const newFromUnit = temperatureUnits.find(u => u.code === fromUnitCode);
    const newToUnit = temperatureUnits.find(u => u.code === toUnitCode);
    
    if (newFromUnit && newToUnit) {
      setFromUnit(newFromUnit);
      setToUnit(newToUnit);
      setFromValue(value.toString());
    }
  }, []);

  // Run conversion when inputs change
  useEffect(() => {
    convert();
  }, [convert]); // Using memoized convert function

  return (
    <div>
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
                const selectedUnit = temperatureUnits.find(unit => unit.code === e.target.value);
                if (selectedUnit) setFromUnit(selectedUnit);
              }}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              {temperatureUnits.map((unit) => (
                <option key={unit.code} value={unit.code}>
                  {unit.name} ({unit.symbol})
                </option>
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
                const selectedUnit = temperatureUnits.find(unit => unit.code === e.target.value);
                if (selectedUnit) setToUnit(selectedUnit);
              }}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              {temperatureUnits.map((unit) => (
                <option key={unit.code} value={unit.code}>
                  {unit.name} ({unit.symbol})
                </option>
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
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Common Temperature Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => setPresetConversion('c', 'f', 0)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Freezing Point (0°C)</span>
            </div>
          </button>
          
          <button
            onClick={() => setPresetConversion('c', 'f', 100)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Boiling Point (100°C)</span>
            </div>
          </button>
          
          <button
            onClick={() => setPresetConversion('f', 'c', 98.6)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Body Temperature (98.6°F)</span>
            </div>
          </button>
          
          <button
            onClick={() => setPresetConversion('k', 'c', 0)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Absolute Zero (0K)</span>
            </div>
          </button>
          
          <button
            onClick={() => setPresetConversion('c', 'k', 0)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Freezing Point in Kelvin (0°C)</span>
            </div>
          </button>
          
          <button
            onClick={() => setPresetConversion('f', 'k', 32)}
            className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <Thermometer className="text-primary mr-2 h-5 w-5" />
              <span className="block font-medium">Freezing Point (32°F)</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}