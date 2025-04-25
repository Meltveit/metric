// Modified version of densityUnits.ts
// This version uses string-based conversion functions that can be safely serialized

import { UnitGroup } from '@/types/units';

// Define conversion functions as strings that will be evaluated on the client side
const conversionFunctions = {
  // Identity conversion
  identity: {
    toBase: 'value => value',
    fromBase: 'value => value'
  },
  // Gram per cubic centimeter (g/cm³) conversion
  g_cm3: {
    toBase: 'value => value * 1000',
    fromBase: 'value => value / 1000'
  },
  // Kilogram per liter (kg/L) conversion
  kg_l: {
    toBase: 'value => value * 1000',
    fromBase: 'value => value / 1000'
  },
  // Pound per cubic foot (lb/ft³) conversion
  lb_ft3: {
    toBase: 'value => value * 16.0185',
    fromBase: 'value => value / 16.0185'
  },
  // Pound per cubic inch (lb/in³) conversion
  lb_in3: {
    toBase: 'value => value * 27679.9',
    fromBase: 'value => value / 27679.9'
  },
  // Pound per US gallon (lb/gal) conversion
  lb_gal_us: {
    toBase: 'value => value * 119.826',
    fromBase: 'value => value / 119.826'
  },
  // Ounce per cubic inch (oz/in³) conversion
  oz_in3: {
    toBase: 'value => value * 1729.99',
    fromBase: 'value => value / 1729.99'
  },
  // Ounce per US gallon (oz/gal) conversion
  oz_gal_us: {
    toBase: 'value => value * 7.48915',
    fromBase: 'value => value / 7.48915'
  },
  // Specific gravity (SG) conversion
  sg: {
    toBase: 'value => value * 1000',
    fromBase: 'value => value / 1000'
  }
};

// Helper to create the unit with string-based conversion functions
const createUnit = (code, name, symbol, conversionType) => ({
  code,
  name,
  symbol,
  toBaseStr: conversionFunctions[conversionType]?.toBase || conversionFunctions.identity.toBase,
  fromBaseStr: conversionFunctions[conversionType]?.fromBase || conversionFunctions.identity.fromBase
});

// Define density units using our new approach
export const densityUnits: UnitGroup[] = [
  {
    name: 'Density',
    units: [
      createUnit('kg_m3', 'Kilogram per Cubic Meter', 'kg/m³', 'identity'),
      createUnit('g_cm3', 'Gram per Cubic Centimeter', 'g/cm³', 'g_cm3'),
      createUnit('g_ml', 'Gram per Milliliter', 'g/mL', 'g_cm3'),
      createUnit('g_l', 'Gram per Liter', 'g/L', 'identity'),
      createUnit('kg_l', 'Kilogram per Liter', 'kg/L', 'kg_l'),
      createUnit('lb_ft3', 'Pound per Cubic Foot', 'lb/ft³', 'lb_ft3'),
      createUnit('lb_in3', 'Pound per Cubic Inch', 'lb/in³', 'lb_in3'),
      createUnit('lb_gal_us', 'Pound per US Gallon', 'lb/gal', 'lb_gal_us'),
      createUnit('oz_in3', 'Ounce per Cubic Inch', 'oz/in³', 'oz_in3'),
      createUnit('oz_gal_us', 'Ounce per US Gallon', 'oz/gal', 'oz_gal_us'),
      createUnit('sg', 'Specific Gravity (Relative to Water)', 'SG', 'sg')
    ]
  }
];

// Common materials density values (in kg/m³)
export const commonMaterials = [
  { name: 'Water (4°C)', density: 1000, unit: 'kg_m3' },
  { name: 'Ice', density: 917, unit: 'kg_m3' },
  { name: 'Air (sea level)', density: 1.225, unit: 'kg_m3' },
  { name: 'Aluminum', density: 2700, unit: 'kg_m3' },
  { name: 'Iron', density: 7870, unit: 'kg_m3' },
  { name: 'Steel', density: 7850, unit: 'kg_m3' },
  { name: 'Copper', density: 8960, unit: 'kg_m3' },
  { name: 'Gold', density: 19300, unit: 'kg_m3' },
  { name: 'Lead', density: 11340, unit: 'kg_m3' },
  { name: 'Mercury', density: 13590, unit: 'kg_m3' },
  { name: 'Silver', density: 10490, unit: 'kg_m3' },
  { name: 'Titanium', density: 4500, unit: 'kg_m3' },
  { name: 'Concrete', density: 2400, unit: 'kg_m3' },
  { name: 'Wood (Oak)', density: 750, unit: 'kg_m3' },
  { name: 'Wood (Pine)', density: 530, unit: 'kg_m3' },
  { name: 'Brick', density: 1800, unit: 'kg_m3' },
  { name: 'Gasoline', density: 750, unit: 'kg_m3' },
  { name: 'Milk', density: 1030, unit: 'kg_m3' },
  { name: 'Seawater', density: 1025, unit: 'kg_m3' },
  { name: 'Ethanol', density: 789, unit: 'kg_m3' }
];

// Formula for converting density units
export function getDensityFormula(fromUnit: string, toUnit: string): string {
  // Create a lookup table for formulas
  const formulas: Record<string, Record<string, string>> = {
    'kg_m3': {
      'g_cm3': 'g/cm³ = kg/m³ ÷ 1,000',
      'g_ml': 'g/mL = kg/m³ ÷ 1,000',
      'g_l': 'g/L = kg/m³',
      'kg_l': 'kg/L = kg/m³ ÷ 1,000',
      'lb_ft3': 'lb/ft³ = kg/m³ ÷ 16.0185',
      'lb_in3': 'lb/in³ = kg/m³ ÷ 27,679.9',
      'lb_gal_us': 'lb/gal = kg/m³ ÷ 119.826',
      'oz_in3': 'oz/in³ = kg/m³ ÷ 1,729.99',
      'oz_gal_us': 'oz/gal = kg/m³ ÷ 7.48915',
      'sg': 'SG = kg/m³ ÷ 1,000'
    },
    'g_cm3': {
      'kg_m3': 'kg/m³ = g/cm³ × 1,000',
      'g_ml': 'g/mL = g/cm³ (equivalent)',
      'g_l': 'g/L = g/cm³ × 1,000',
      'kg_l': 'kg/L = g/cm³',
      'lb_ft3': 'lb/ft³ = g/cm³ × 62.428',
      'lb_in3': 'lb/in³ = g/cm³ × 27.68',
      'lb_gal_us': 'lb/gal = g/cm³ × 8.345',
      'oz_in3': 'oz/in³ = g/cm³ × 442.9',
      'oz_gal_us': 'oz/gal = g/cm³ × 133.53',
      'sg': 'SG = g/cm³'
    }
  };
  
  // Return the specific formula if it exists
  if (formulas[fromUnit]?.[toUnit]) {
    return formulas[fromUnit][toUnit];
  }
  
  // If specific formula doesn't exist, provide a generic one
  return `Convert from ${fromUnit} to ${toUnit}`;
}

// Calculate density from mass and volume
export function calculateDensity(mass: number, volume: number): number {
  if (volume === 0) return 0;
  return mass / volume;
}

// Calculate mass from density and volume
export function calculateMass(density: number, volume: number): number {
  return density * volume;
}

// Calculate volume from mass and density
export function calculateVolume(mass: number, density: number): number {
  if (density === 0) return 0;
  return mass / density;
}