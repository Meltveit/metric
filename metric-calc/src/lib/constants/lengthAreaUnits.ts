// src/lib/constants/lengthAreaUnits.ts
import { UnitGroup, SerializableUnit, createSerializableUnit } from '@/types/units';

export const lengthAreaUnits: UnitGroup[] = [
  {
    name: 'Length',
    units: [
      createSerializableUnit(
        'm',
        'Meter',
        'm',
        'value => value',
        'value => value'
      ),
      createSerializableUnit(
        'km',
        'Kilometer',
        'km',
        'value => value * 1000',
        'value => value / 1000'
      ),
      createSerializableUnit(
        'cm',
        'Centimeter',
        'cm',
        'value => value / 100',
        'value => value * 100'
      ),
      createSerializableUnit(
        'mm',
        'Millimeter',
        'mm',
        'value => value / 1000',
        'value => value * 1000'
      ),
      createSerializableUnit(
        'um',
        'Micrometer',
        'μm',
        'value => value / 1000000',
        'value => value * 1000000'
      ),
      createSerializableUnit(
        'nm',
        'Nanometer',
        'nm',
        'value => value / 1000000000',
        'value => value * 1000000000'
      ),
      createSerializableUnit(
        'mi',
        'Mile',
        'mi',
        'value => value * 1609.344',
        'value => value / 1609.344'
      ),
      createSerializableUnit(
        'yd',
        'Yard',
        'yd',
        'value => value * 0.9144',
        'value => value / 0.9144'
      ),
      createSerializableUnit(
        'ft',
        'Foot',
        'ft',
        'value => value * 0.3048',
        'value => value / 0.3048'
      ),
      createSerializableUnit(
        'in',
        'Inch',
        'in',
        'value => value * 0.0254',
        'value => value / 0.0254'
      ),
      createSerializableUnit(
        'nmi',
        'Nautical Mile',
        'nmi',
        'value => value * 1852',
        'value => value / 1852'
      )
    ]
  },
  {
    name: 'Area',
    units: [
      createSerializableUnit(
        'm2',
        'Square Meter',
        'm²',
        'value => value',
        'value => value'
      ),
      createSerializableUnit(
        'km2',
        'Square Kilometer',
        'km²',
        'value => value * 1000000',
        'value => value / 1000000'
      ),
      createSerializableUnit(
        'cm2',
        'Square Centimeter',
        'cm²',
        'value => value / 10000',
        'value => value * 10000'
      ),
      createSerializableUnit(
        'mm2',
        'Square Millimeter',
        'mm²',
        'value => value / 1000000',
        'value => value * 1000000'
      ),
      createSerializableUnit(
        'ha',
        'Hectare',
        'ha',
        'value => value * 10000',
        'value => value / 10000'
      ),
      createSerializableUnit(
        'acre',
        'Acre',
        'acre',
        'value => value * 4046.8564224',
        'value => value / 4046.8564224'
      ),
      createSerializableUnit(
        'mi2',
        'Square Mile',
        'mi²',
        'value => value * 2589988.110336',
        'value => value / 2589988.110336'
      ),
      createSerializableUnit(
        'yd2',
        'Square Yard',
        'yd²',
        'value => value * 0.83612736',
        'value => value / 0.83612736'
      ),
      createSerializableUnit(
        'ft2',
        'Square Foot',
        'ft²',
        'value => value * 0.09290304',
        'value => value / 0.09290304'
      ),
      createSerializableUnit(
        'in2',
        'Square Inch',
        'in²',
        'value => value * 0.00064516',
        'value => value / 0.00064516'
      )
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