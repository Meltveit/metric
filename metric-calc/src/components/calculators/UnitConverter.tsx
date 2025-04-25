'use client';

import { useEffect, useMemo } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { useUnitConversion } from '@/hooks/useUnitConversion';
import { UnitGroup, SerializableUnit, createClientUnit, ClientUnit } from '@/types/units';

interface UnitConverterProps {
  unitGroups: UnitGroup[];
  className?: string;
}

export default function UnitConverter({ unitGroups, className }: UnitConverterProps) {
  // Get all serializable units from all groups
  const allSerializableUnits = unitGroups.flatMap(group => group.units);
  
  // Convert all serializable units to client units with actual functions
  const allUnits = useMemo(() => {
    return allSerializableUnits.map(unit => createClientUnit(unit));
  }, [allSerializableUnits]);
  
  // Use the first unit from the first group as the default "from" unit
  const defaultFromUnit = allUnits[0];
  
  // Use the second unit from the first group as the default "to" unit (if available)
  const defaultToUnit = allUnits.length > 1 ? allUnits[1] : allUnits[0];

  const {
    fromValue,
    setFromValue,
    fromUnit,
    setFromUnit,
    toValue,
    toUnit,
    setToUnit,
    formula,
    convert,
    swapUnits
  } = useUnitConversion({
    defaultFromUnit,
    defaultToUnit,
    defaultValue: 1
  });

  // Convert on initial load and when dependencies change
  useEffect(() => {
    convert();
  }, [convert, fromUnit, toUnit]);

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
                const selectedSerializableUnit = allSerializableUnits.find(unit => unit.code === e.target.value);
                if (selectedSerializableUnit) {
                  const selectedUnit = createClientUnit(selectedSerializableUnit);
                  setFromUnit(selectedUnit);
                }
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
                const selectedSerializableUnit = allSerializableUnits.find(unit => unit.code === e.target.value);
                if (selectedSerializableUnit) {
                  const selectedUnit = createClientUnit(selectedSerializableUnit);
                  setToUnit(selectedUnit);
                }
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