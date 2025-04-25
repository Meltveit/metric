'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { densityUnits, commonMaterials, calculateDensity, calculateMass, calculateVolume, SerializableUnit } from '@/lib/constants/densityUnits';
import { formatNumber } from '@/lib/utils';

// Type for client-side unit with executable functions
interface ClientUnit extends SerializableUnit {
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

type CalculationMode = 'density' | 'mass' | 'volume';

// Convert serializable unit to client unit with executable functions
function createClientUnit(unit: SerializableUnit): ClientUnit {
  // Create actual functions from string representations
  const toBase = new Function('value', `return ${unit.toBaseStr}`) as (value: number) => number;
  const fromBase = new Function('value', `return ${unit.fromBaseStr}`) as (value: number) => number;
  
  return {
    ...unit,
    toBase,
    fromBase
  };
}

export default function DensityCalculator() {
  // Convert serializable units to client units with actual functions
  const allDensityUnits = useMemo(() => {
    return densityUnits[0].units.map(createClientUnit);
  }, []);

  // State for the primary input values
  const [density, setDensity] = useState<string>('1000');
  const [mass, setMass] = useState<string>('1');
  const [volume, setVolume] = useState<string>('0.001');
  
  // State for the units
  const [densityUnit, setDensityUnit] = useState<ClientUnit>(allDensityUnits[0]); // kg/m³
  const [massUnit, setMassUnit] = useState<string>('kg');
  const [volumeUnit, setVolumeUnit] = useState<string>('m3');
  
  // State for the calculation mode
  const [mode, setMode] = useState<CalculationMode>('density');
  
  // State for the formula
  const [formula, setFormula] = useState<string>('');
  
  // Calculate based on the mode - wrapped in useCallback
  const calculate = useCallback(() => {
    let calculatedValue = 0;
    
    if (mode === 'density') {
      // Calculate density from mass and volume
      if (mass && volume && !isNaN(Number(mass)) && !isNaN(Number(volume)) && Number(volume) !== 0) {
        calculatedValue = calculateDensity(Number(mass), Number(volume));
        setDensity(formatNumber(calculatedValue));
        setFormula(`Density = Mass / Volume = ${mass} ${massUnit} / ${volume} ${volumeUnit} = ${formatNumber(calculatedValue)} ${densityUnit.symbol}`);
      }
    } else if (mode === 'mass') {
      // Calculate mass from density and volume
      if (density && volume && !isNaN(Number(density)) && !isNaN(Number(volume))) {
        calculatedValue = calculateMass(Number(density), Number(volume));
        setMass(formatNumber(calculatedValue));
        setFormula(`Mass = Density × Volume = ${density} ${densityUnit.symbol} × ${volume} ${volumeUnit} = ${formatNumber(calculatedValue)} ${massUnit}`);
      }
    } else if (mode === 'volume') {
      // Calculate volume from mass and density
      if (mass && density && !isNaN(Number(mass)) && !isNaN(Number(density)) && Number(density) !== 0) {
        calculatedValue = calculateVolume(Number(mass), Number(density));
        setVolume(formatNumber(calculatedValue));
        setFormula(`Volume = Mass / Density = ${mass} ${massUnit} / ${density} ${densityUnit.symbol} = ${formatNumber(calculatedValue)} ${volumeUnit}`);
      }
    }
  }, [mode, density, mass, volume, densityUnit, massUnit, volumeUnit]); // Include all dependencies
  
  // Handle material selection
  const selectMaterial = useCallback((materialDensity: number, unit: string) => {
    // Find the unit in the array
    const selectedUnit = allDensityUnits.find(u => u.code === unit);
    if (selectedUnit) {
      setDensityUnit(selectedUnit);
      setDensity(materialDensity.toString());
      
      // Recalculate based on the current mode
      if (mode === 'mass' && volume && !isNaN(Number(volume))) {
        const newMass = calculateMass(materialDensity, Number(volume));
        setMass(formatNumber(newMass));
        setFormula(`Mass = Density × Volume = ${materialDensity} ${selectedUnit.symbol} × ${volume} ${volumeUnit} = ${formatNumber(newMass)} ${massUnit}`);
      } else if (mode === 'volume' && mass && !isNaN(Number(mass))) {
        const newVolume = calculateVolume(Number(mass), materialDensity);
        setVolume(formatNumber(newVolume));
        setFormula(`Volume = Mass / Density = ${mass} ${massUnit} / ${materialDensity} ${selectedUnit.symbol} = ${formatNumber(newVolume)} ${volumeUnit}`);
      }
    }
  }, [mode, mass, volume, volumeUnit, massUnit, allDensityUnits]);
  
  // Calculate when inputs change
  useEffect(() => {
    calculate();
  }, [calculate]); // Using memoized calculate function
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <button
            onClick={() => setMode('density')}
            className={`px-4 py-2 rounded-md ${mode === 'density' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
          >
            Calculate Density
          </button>
          <button
            onClick={() => setMode('mass')}
            className={`px-4 py-2 rounded-md ${mode === 'mass' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
          >
            Calculate Mass
          </button>
          <button
            onClick={() => setMode('volume')}
            className={`px-4 py-2 rounded-md ${mode === 'volume' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
          >
            Calculate Volume
          </button>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select what you want to calculate based on the other two values.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Density Input */}
        <div className={mode === 'density' ? 'order-3' : 'order-1'}>
          <label htmlFor="density" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Density {mode === 'density' && '(Result)'}
          </label>
          <div className="flex">
            <input
              type="number"
              id="density"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
              readOnly={mode === 'density'}
              className={`w-full border border-gray-300 dark:border-gray-700 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white
                ${mode === 'density' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
              placeholder="Density"
              step="any"
            />
            <select
              value={densityUnit.code}
              onChange={(e) => {
                const selected = allDensityUnits.find(unit => unit.code === e.target.value);
                if (selected) setDensityUnit(selected);
              }}
              className="border border-gray-300 dark:border-gray-700 rounded-r-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              {allDensityUnits.map(unit => (
                <option key={unit.code} value={unit.code}>
                  {unit.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Mass Input */}
        <div className={mode === 'mass' ? 'order-3' : 'order-2'}>
          <label htmlFor="mass" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mass {mode === 'mass' && '(Result)'}
          </label>
          <div className="flex">
            <input
              type="number"
              id="mass"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              readOnly={mode === 'mass'}
              className={`w-full border border-gray-300 dark:border-gray-700 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white
                ${mode === 'mass' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
              placeholder="Mass"
              step="any"
            />
            <select
              value={massUnit}
              onChange={(e) => setMassUnit(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-r-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="lb">lb</option>
              <option value="oz">oz</option>
            </select>
          </div>
        </div>
        
        {/* Volume Input */}
        <div className={mode === 'volume' ? 'order-3' : 'order-3'}>
          <label htmlFor="volume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Volume {mode === 'volume' && '(Result)'}
          </label>
          <div className="flex">
            <input
              type="number"
              id="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              readOnly={mode === 'volume'}
              className={`w-full border border-gray-300 dark:border-gray-700 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white
                ${mode === 'volume' ? 'bg-gray-50 dark:bg-gray-700' : ''}`}
              placeholder="Volume"
              step="any"
            />
            <select
              value={volumeUnit}
              onChange={(e) => setVolumeUnit(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-r-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
            >
              <option value="m3">m³</option>
              <option value="cm3">cm³</option>
              <option value="mm3">mm³</option>
              <option value="L">L</option>
              <option value="mL">mL</option>
              <option value="gal">gal (US)</option>
              <option value="ft3">ft³</option>
              <option value="in3">in³</option>
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
        <h3 className="text-lg font-medium mb-4">Common Material Densities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-64 overflow-y-auto">
          {commonMaterials.map((material, index) => (
            <button
              key={index}
              onClick={() => selectMaterial(material.density, material.unit)}
              className="text-left p-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-center">
                <Calculator className="text-primary mr-2 h-5 w-5" />
                <div>
                  <span className="block font-medium">{material.name}</span>
                  <span className="block text-sm text-gray-600 dark:text-gray-400">
                    {material.density} kg/m³
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}