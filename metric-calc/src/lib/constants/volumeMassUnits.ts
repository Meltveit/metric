// src/lib/constants/volumeMassUnits.ts
import { UnitGroup, SerializableUnit, createSerializableUnit } from '@/types/units';

export const volumeMassUnits: UnitGroup[] = [
  {
    name: 'Volume',
    units: [
      createSerializableUnit(
        'l',
        'Liter',
        'L',
        'value => value',
        'value => value'
      ),
      createSerializableUnit(
        'ml',
        'Milliliter',
        'mL',
        'value => value / 1000',
        'value => value * 1000'
      ),
      createSerializableUnit(
        'cl',
        'Centiliter',
        'cL',
        'value => value / 100',
        'value => value * 100'
      ),
      createSerializableUnit(
        'dl',
        'Deciliter',
        'dL',
        'value => value / 10',
        'value => value * 10'
      ),
      createSerializableUnit(
        'm3',
        'Cubic Meter',
        'm³',
        'value => value * 1000',
        'value => value / 1000'
      ),
      createSerializableUnit(
        'cm3',
        'Cubic Centimeter',
        'cm³',
        'value => value / 1000',
        'value => value * 1000'
      ),
      createSerializableUnit(
        'mm3',
        'Cubic Millimeter',
        'mm³',
        'value => value / 1000000',
        'value => value * 1000000'
      ),
      createSerializableUnit(
        'gal_us',
        'US Gallon',
        'gal (US)',
        'value => value * 3.78541',
        'value => value / 3.78541'
      ),
      createSerializableUnit(
        'gal_uk',
        'UK Gallon',
        'gal (UK)',
        'value => value * 4.54609',
        'value => value / 4.54609'
      ),
      createSerializableUnit(
        'qt_us',
        'US Quart',
        'qt (US)',
        'value => value * 0.946353',
        'value => value / 0.946353'
      ),
      createSerializableUnit(
        'pt_us',
        'US Pint',
        'pt (US)',
        'value => value * 0.473176',
        'value => value / 0.473176'
      ),
      createSerializableUnit(
        'cup_us',
        'US Cup',
        'cup (US)',
        'value => value * 0.236588',
        'value => value / 0.236588'
      ),
      createSerializableUnit(
        'fl_oz_us',
        'US Fluid Ounce',
        'fl oz (US)',
        'value => value * 0.0295735',
        'value => value / 0.0295735'
      ),
      createSerializableUnit(
        'tbsp_us',
        'US Tablespoon',
        'tbsp (US)',
        'value => value * 0.0147868',
        'value => value / 0.0147868'
      ),
      createSerializableUnit(
        'tsp_us',
        'US Teaspoon',
        'tsp (US)',
        'value => value * 0.00492892',
        'value => value / 0.00492892'
      )
    ]
  },
  {
    name: 'Mass',
    units: [
      createSerializableUnit(
        'kg',
        'Kilogram',
        'kg',
        'value => value',
        'value => value'
      ),
      createSerializableUnit(
        'g',
        'Gram',
        'g',
        'value => value / 1000',
        'value => value * 1000'
      ),
      createSerializableUnit(
        'mg',
        'Milligram',
        'mg',
        'value => value / 1000000',
        'value => value * 1000000'
      ),
      createSerializableUnit(
        'lb',
        'Pound',
        'lb',
        'value => value * 0.45359237',
        'value => value / 0.45359237'
      ),
      createSerializableUnit(
        'oz',
        'Ounce',
        'oz',
        'value => value * 0.0283495231',
        'value => value / 0.0283495231'
      ),
      createSerializableUnit(
        'stone',
        'Stone',
        'st',
        'value => value * 6.35029318',
        'value => value / 6.35029318'
      ),
      createSerializableUnit(
        'ton_metric',
        'Metric Ton',
        't',
        'value => value * 1000',
        'value => value / 1000'
      ),
      createSerializableUnit(
        'ton_us',
        'US Ton',
        'ton (US)',
        'value => value * 907.18474',
        'value => value / 907.18474'
      ),
      createSerializableUnit(
        'ton_uk',
        'UK Ton',
        'ton (UK)',
        'value => value * 1016.0469088',
        'value => value / 1016.0469088'
      )
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