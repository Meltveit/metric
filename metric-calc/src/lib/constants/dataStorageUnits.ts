// src/lib/constants/dataStorageUnits.ts
import { UnitGroup, SerializableUnit, createSerializableUnit } from '@/types/units';

export const dataStorageUnits: UnitGroup[] = [
  {
    name: 'Decimal (SI)',
    units: [
      createSerializableUnit(
        'b',
        'Byte',
        'B',
        'value => value',
        'value => value'
      ),
      createSerializableUnit(
        'kb',
        'Kilobyte',
        'KB',
        'value => value * 1000',
        'value => value / 1000'
      ),
      createSerializableUnit(
        'mb',
        'Megabyte',
        'MB',
        'value => value * 1000 * 1000',
        'value => value / (1000 * 1000)'
      ),
      createSerializableUnit(
        'gb',
        'Gigabyte',
        'GB',
        'value => value * 1000 * 1000 * 1000',
        'value => value / (1000 * 1000 * 1000)'
      ),
      createSerializableUnit(
        'tb',
        'Terabyte',
        'TB',
        'value => value * 1000 * 1000 * 1000 * 1000',
        'value => value / (1000 * 1000 * 1000 * 1000)'
      ),
      createSerializableUnit(
        'pb',
        'Petabyte',
        'PB',
        'value => value * 1000 * 1000 * 1000 * 1000 * 1000',
        'value => value / (1000 * 1000 * 1000 * 1000 * 1000)'
      ),
      createSerializableUnit(
        'eb',
        'Exabyte',
        'EB',
        'value => value * 1000 * 1000 * 1000 * 1000 * 1000 * 1000',
        'value => value / (1000 * 1000 * 1000 * 1000 * 1000 * 1000)'
      )
    ]
  },
  {
    name: 'Binary (IEC)',
    units: [
      createSerializableUnit(
        'kib',
        'Kibibyte',
        'KiB',
        'value => value * 1024',
        'value => value / 1024'
      ),
      createSerializableUnit(
        'mib',
        'Mebibyte',
        'MiB',
        'value => value * 1024 * 1024',
        'value => value / (1024 * 1024)'
      ),
      createSerializableUnit(
        'gib',
        'Gibibyte',
        'GiB',
        'value => value * 1024 * 1024 * 1024',
        'value => value / (1024 * 1024 * 1024)'
      ),
      createSerializableUnit(
        'tib',
        'Tebibyte',
        'TiB',
        'value => value * 1024 * 1024 * 1024 * 1024',
        'value => value / (1024 * 1024 * 1024 * 1024)'
      ),
      createSerializableUnit(
        'pib',
        'Pebibyte',
        'PiB',
        'value => value * 1024 * 1024 * 1024 * 1024 * 1024',
        'value => value / (1024 * 1024 * 1024 * 1024 * 1024)'
      ),
      createSerializableUnit(
        'eib',
        'Exbibyte',
        'EiB',
        'value => value * 1024 * 1024 * 1024 * 1024 * 1024 * 1024',
        'value => value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024)'
      )
    ]
  },
  {
    name: 'Bits',
    units: [
      createSerializableUnit(
        'bit',
        'Bit',
        'bit',
        'value => value / 8',
        'value => value * 8'
      ),
      createSerializableUnit(
        'kbit',
        'Kilobit',
        'Kb',
        'value => (value * 1000) / 8',
        'value => (value * 8) / 1000'
      ),
      createSerializableUnit(
        'mbit',
        'Megabit',
        'Mb',
        'value => (value * 1000 * 1000) / 8',
        'value => (value * 8) / (1000 * 1000)'
      ),
      createSerializableUnit(
        'gbit',
        'Gigabit',
        'Gb',
        'value => (value * 1000 * 1000 * 1000) / 8',
        'value => (value * 8) / (1000 * 1000 * 1000)'
      ),
      createSerializableUnit(
        'tbit',
        'Terabit',
        'Tb',
        'value => (value * 1000 * 1000 * 1000 * 1000) / 8',
        'value => (value * 8) / (1000 * 1000 * 1000 * 1000)'
      )
    ]
  }
];

export const commonDataConversions = [
  { from: 'mb', to: 'kb', value: 1, description: '1 Megabyte to Kilobytes' },
  { from: 'gb', to: 'mb', value: 1, description: '1 Gigabyte to Megabytes' },
  { from: 'kb', to: 'b', value: 1, description: '1 Kilobyte to Bytes' },
  { from: 'gib', to: 'gb', value: 1, description: '1 Gibibyte to Gigabytes' },
  { from: 'tb', to: 'gb', value: 1, description: '1 Terabyte to Gigabytes' },
  { from: 'bit', to: 'b', value: 8, description: '8 Bits to Bytes' }
];