import { UnitGroup } from '@/types/units';

export const volumeMassUnits: UnitGroup[] = [
  {
    name: 'Volume',
    units: [
      {
        code: 'l',
        name: 'Liter',
        symbol: 'L',
        toBase: value => value,
        fromBase: value => value
      },
      {
        code: 'ml',
        name: 'Milliliter',
        symbol: 'mL',
        toBase: value => value / 1000,
        fromBase: value => value * 1000
      },
      {
        code: 'cl',
        name: 'Centiliter',
        symbol: 'cL',
        toBase: value => value / 100,
        fromBase: value => value * 100
      },
      {
        code: 'dl',
        name: 'Deciliter',
        symbol: 'dL',
        toBase: value => value / 10,
        fromBase: value => value * 10
      },
      {
        code: 'm3',
        name: 'Cubic Meter',
        symbol: 'm³',
        toBase: value => value * 1000,
        fromBase: value => value / 1000
      },
      {
        code: 'cm3',
        name: 'Cubic Centimeter',
        symbol: 'cm³',
        toBase: value => value / 1000,
        fromBase: value => value * 1000
      },
      {
        code: 'mm3',
        name: 'Cubic Millimeter',
        symbol: 'mm³',
        toBase: value => value / 1000000,
        fromBase: value => value * 1000000
      },
      {
        code: 'gal_us',
        name: 'US Gallon',
        symbol: 'gal (US)',
        toBase: value => value * 3.78541,
        fromBase: value => value / 3.78541
      },
      {
        code: 'gal_uk',
        name: 'UK Gallon',
        symbol: 'gal (UK)',
        toBase: value => value * 4.54609,
        fromBase: value => value / 4.54609
      },
      {
        code: 'qt_us',
        name: 'US Quart',
        symbol: 'qt (US)',
        toBase: value => value * 0.946353,
        fromBase: value => value / 0.946353
      },
      {
        code: 'pt_us',
        name: 'US Pint',
        symbol: 'pt (US)',
        toBase: value => value * 0.473176,
        fromBase: value => value / 0.473176
      },
      {
        code: 'cup_us',
        name: 'US Cup',
        symbol: 'cup (US)',
        toBase: value => value * 0.236588,
        fromBase: value => value / 0.236588
      },
      {
        code: 'fl_oz_us',
        name: 'US Fluid Ounce',
        symbol: 'fl oz (US)',
        toBase: value => value * 0.0295735,
        fromBase: value => value / 0.0295735
      },
      {
        code: 'tbsp_us',
        name: 'US Tablespoon',
        symbol: 'tbsp (US)',
        toBase: value => value * 0.0147868,
        fromBase: value => value / 0.0147868
      },
      {
        code: 'tsp_us',
        name: 'US Teaspoon',
        symbol: 'tsp (US)',
        toBase: value => value * 0.00492892,
        fromBase: value => value / 0.00492892
      }
    ]
  },
  {
    name: 'Mass',
    units: [
      {
        code: 'kg',
        name: 'Kilogram',
        symbol: 'kg',
        toBase: value => value,
        fromBase: value => value
      },
      {
        code: 'g',
        name: 'Gram',
        symbol: 'g',
        toBase: value => value / 1000,
        fromBase: value => value * 1000
      },
      {
        code: 'mg',
        name: 'Milligram',
        symbol: 'mg',
        toBase: value => value / 1000000,
        fromBase: value => value * 1000000
      },
      {
        code: 'lb',
        name: 'Pound',
        symbol: 'lb',
        toBase: value => value * 0.45359237,
        fromBase: value => value / 0.45359237
      },
      {
        code: 'oz',
        name: 'Ounce',
        symbol: 'oz',
        toBase: value => value * 0.0283495231,
        fromBase: value => value / 0.0283495231
      },
      {
        code: 'stone',
        name: 'Stone',
        symbol: 'st',
        toBase: value => value * 6.35029318,
        fromBase: value => value / 6.35029318
      },
      {
        code: 'ton_metric',
        name: 'Metric Ton',
        symbol: 't',
        toBase: value => value * 1000,
        fromBase: value => value / 1000
      },
      {
        code: 'ton_us',
        name: 'US Ton',
        symbol: 'ton (US)',
        toBase: value => value * 907.18474,
        fromBase: value => value / 907.18474
      },
      {
        code: 'ton_uk',
        name: 'UK Ton',
        symbol: 'ton (UK)',
        toBase: value => value * 1016.0469088,
        fromBase: value => value / 1016.0469088
      }
    ]
  }
];

export const commonVolumeMassConversions = [
  { from: 'l', to: 'gal_us', value: 1, description: '1 Liter to US Gallons' },
  { from: 'gal_us', to: 'l', value: 1, description: '1 US Gallon to Liters' },
  { from: 'kg', to: 'lb', value: 1, description: '1 Kilogram to Pounds' },
  { from: 'lb', to: 'kg', value: 1, description: '1 Pound to Kilograms' },
  { from: 'l', to: 'ml', value: 1, description: '1 Liter to Milliliters' },
  { from: 'cup_us', to: 'ml', value: 1, description: '1 US Cup to Milliliters' }
];