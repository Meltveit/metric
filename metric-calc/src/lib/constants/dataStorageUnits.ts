import { UnitGroup } from '@/types/units';

export const dataStorageUnits: UnitGroup[] = [
  {
    name: 'Decimal (SI)',
    units: [
      {
        code: 'b',
        name: 'Byte',
        symbol: 'B',
        toBase: value => value,
        fromBase: value => value
      },
      {
        code: 'kb',
        name: 'Kilobyte',
        symbol: 'KB',
        toBase: value => value * 1000,
        fromBase: value => value / 1000
      },
      {
        code: 'mb',
        name: 'Megabyte',
        symbol: 'MB',
        toBase: value => value * 1000 * 1000,
        fromBase: value => value / (1000 * 1000)
      },
      {
        code: 'gb',
        name: 'Gigabyte',
        symbol: 'GB',
        toBase: value => value * 1000 * 1000 * 1000,
        fromBase: value => value / (1000 * 1000 * 1000)
      },
      {
        code: 'tb',
        name: 'Terabyte',
        symbol: 'TB',
        toBase: value => value * 1000 * 1000 * 1000 * 1000,
        fromBase: value => value / (1000 * 1000 * 1000 * 1000)
      },
      {
        code: 'pb',
        name: 'Petabyte',
        symbol: 'PB',
        toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000,
        fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000)
      },
      {
        code: 'eb',
        name: 'Exabyte',
        symbol: 'EB',
        toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
        fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000 * 1000)
      }
    ]
  },
  {
    name: 'Binary (IEC)',
    units: [
      {
        code: 'kib',
        name: 'Kibibyte',
        symbol: 'KiB',
        toBase: value => value * 1024,
        fromBase: value => value / 1024
      },
      {
        code: 'mib',
        name: 'Mebibyte',
        symbol: 'MiB',
        toBase: value => value * 1024 * 1024,
        fromBase: value => value / (1024 * 1024)
      },
      {
        code: 'gib',
        name: 'Gibibyte',
        symbol: 'GiB',
        toBase: value => value * 1024 * 1024 * 1024,
        fromBase: value => value / (1024 * 1024 * 1024)
      },
      {
        code: 'tib',
        name: 'Tebibyte',
        symbol: 'TiB',
        toBase: value => value * 1024 * 1024 * 1024 * 1024,
        fromBase: value => value / (1024 * 1024 * 1024 * 1024)
      },
      {
        code: 'pib',
        name: 'Pebibyte',
        symbol: 'PiB',
        toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024,
        fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024)
      },
      {
        code: 'eib',
        name: 'Exbibyte',
        symbol: 'EiB',
        toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024)
      }
    ]
  },
  {
    name: 'Bits',
    units: [
      {
        code: 'bit',
        name: 'Bit',
        symbol: 'bit',
        toBase: value => value / 8,
        fromBase: value => value * 8
      },
      {
        code: 'kbit',
        name: 'Kilobit',
        symbol: 'Kb',
        toBase: value => (value * 1000) / 8,
        fromBase: value => (value * 8) / 1000
      },
      {
        code: 'mbit',
        name: 'Megabit',
        symbol: 'Mb',
        toBase: value => (value * 1000 * 1000) / 8,
        fromBase: value => (value * 8) / (1000 * 1000)
      },
      {
        code: 'gbit',
        name: 'Gigabit',
        symbol: 'Gb',
        toBase: value => (value * 1000 * 1000 * 1000) / 8,
        fromBase: value => (value * 8) / (1000 * 1000 * 1000)
      },
      {
        code: 'tbit',
        name: 'Terabit',
        symbol: 'Tb',
        toBase: value => (value * 1000 * 1000 * 1000 * 1000) / 8,
        fromBase: value => (value * 8) / (1000 * 1000 * 1000 * 1000)
      }
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