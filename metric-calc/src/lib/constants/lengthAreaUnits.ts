import { UnitGroup } from '@/types/units';

export const lengthAreaUnits: UnitGroup[] = [
  {
    name: 'Length',
    units: [
      {
        code: 'm',
        name: 'Meter',
        symbol: 'm',
        toBase: value => value,
        fromBase: value => value
      },
      {
        code: 'km',
        name: 'Kilometer',
        symbol: 'km',
        toBase: value => value * 1000,
        fromBase: value => value / 1000
      },
      {
        code: 'cm',
        name: 'Centimeter',
        symbol: 'cm',
        toBase: value => value / 100,
        fromBase: value => value * 100
      },
      {
        code: 'mm',
        name: 'Millimeter',
        symbol: 'mm',
        toBase: value => value / 1000,
        fromBase: value => value * 1000
      },
      {
        code: 'um',
        name: 'Micrometer',
        symbol: 'μm',
        toBase: value => value / 1000000,
        fromBase: value => value * 1000000
      },
      {
        code: 'nm',
        name: 'Nanometer',
        symbol: 'nm',
        toBase: value => value / 1000000000,
        fromBase: value => value * 1000000000
      },
      {
        code: 'mi',
        name: 'Mile',
        symbol: 'mi',
        toBase: value => value * 1609.344,
        fromBase: value => value / 1609.344
      },
      {
        code: 'yd',
        name: 'Yard',
        symbol: 'yd',
        toBase: value => value * 0.9144,
        fromBase: value => value / 0.9144
      },
      {
        code: 'ft',
        name: 'Foot',
        symbol: 'ft',
        toBase: value => value * 0.3048,
        fromBase: value => value / 0.3048
      },
      {
        code: 'in',
        name: 'Inch',
        symbol: 'in',
        toBase: value => value * 0.0254,
        fromBase: value => value / 0.0254
      },
      {
        code: 'nmi',
        name: 'Nautical Mile',
        symbol: 'nmi',
        toBase: value => value * 1852,
        fromBase: value => value / 1852
      }
    ]
  },
  {
    name: 'Area',
    units: [
      {
        code: 'm2',
        name: 'Square Meter',
        symbol: 'm²',
        toBase: value => value,
        fromBase: value => value
      },
      {
        code: 'km2',
        name: 'Square Kilometer',
        symbol: 'km²',
        toBase: value => value * 1000000,
        fromBase: value => value / 1000000
      },
      {
        code: 'cm2',
        name: 'Square Centimeter',
        symbol: 'cm²',
        toBase: value => value / 10000,
        fromBase: value => value * 10000
      },
      {
        code: 'mm2',
        name: 'Square Millimeter',
        symbol: 'mm²',
        toBase: value => value / 1000000,
        fromBase: value => value * 1000000
      },
      {
        code: 'ha',
        name: 'Hectare',
        symbol: 'ha',
        toBase: value => value * 10000,
        fromBase: value => value / 10000
      },
      {
        code: 'acre',
        name: 'Acre',
        symbol: 'acre',
        toBase: value => value * 4046.8564224,
        fromBase: value => value / 4046.8564224
      },
      {
        code: 'mi2',
        name: 'Square Mile',
        symbol: 'mi²',
        toBase: value => value * 2589988.110336,
        fromBase: value => value / 2589988.110336
      },
      {
        code: 'yd2',
        name: 'Square Yard',
        symbol: 'yd²',
        toBase: value => value * 0.83612736,
        fromBase: value => value / 0.83612736
      },
      {
        code: 'ft2',
        name: 'Square Foot',
        symbol: 'ft²',
        toBase: value => value * 0.09290304,
        fromBase: value => value / 0.09290304
      },
      {
        code: 'in2',
        name: 'Square Inch',
        symbol: 'in²',
        toBase: value => value * 0.00064516,
        fromBase: value => value / 0.00064516
      }
    ]
  }
];

export const commonLengthAreaConversions = [
  { from: 'm', to: 'ft', value: 1, description: '1 Meter to Feet' },
  { from: 'ft', to: 'm', value: 1, description: '1 Foot to Meters' },
  { from: 'mi', to: 'km', value: 1, description: '1 Mile to Kilometers' },
  { from: 'km', to: 'mi', value: 1, description: '1 Kilometer to Miles' },
  { from: 'in', to: 'cm', value: 1, description: '1 Inch to Centimeters' },
  { from: 'acre', to: 'ha', value: 1, description: '1 Acre to Hectares' }
];