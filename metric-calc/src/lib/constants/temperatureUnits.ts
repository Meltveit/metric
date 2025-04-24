import { TemperatureUnit } from '@/types/units';

// Temperature conversions are different from other unit conversions
// They don't use a simple ratio, but rather formulas
export const temperatureUnits: TemperatureUnit[] = [
  {
    code: 'c',
    name: 'Celsius',
    symbol: '°C',
    convert: {
      c: value => value,
      f: value => (value * 9/5) + 32,
      k: value => value + 273.15,
      r: value => (value + 273.15) * 9/5,
      re: value => value * 4/5
    }
  },
  {
    code: 'f',
    name: 'Fahrenheit',
    symbol: '°F',
    convert: {
      c: value => (value - 32) * 5/9,
      f: value => value,
      k: value => (value - 32) * 5/9 + 273.15,
      r: value => value + 459.67,
      re: value => (value - 32) * 4/9
    }
  },
  {
    code: 'k',
    name: 'Kelvin',
    symbol: 'K',
    convert: {
      c: value => value - 273.15,
      f: value => (value - 273.15) * 9/5 + 32,
      k: value => value,
      r: value => value * 9/5,
      re: value => (value - 273.15) * 4/5
    }
  },
  {
    code: 'r',
    name: 'Rankine',
    symbol: '°R',
    convert: {
      c: value => (value - 491.67) * 5/9,
      f: value => value - 459.67,
      k: value => value * 5/9,
      r: value => value,
      re: value => (value - 491.67) * 4/9
    }
  },
  {
    code: 're',
    name: 'Réaumur',
    symbol: '°Ré',
    convert: {
      c: value => value * 5/4,
      f: value => (value * 9/4) + 32,
      k: value => (value * 5/4) + 273.15,
      r: value => (value * 9/4) + 491.67,
      re: value => value
    }
  }
];

export const commonTemperaturePoints = [
  { from: 'c', to: 'f', value: 0, description: 'Freezing point of water (0°C)' },
  { from: 'c', to: 'f', value: 100, description: 'Boiling point of water (100°C)' },
  { from: 'f', to: 'c', value: 98.6, description: 'Average human body temperature (98.6°F)' },
  { from: 'c', to: 'k', value: 0, description: 'Freezing point in Kelvin (0°C)' },
  { from: 'k', to: 'c', value: 0, description: 'Absolute zero (0K)' },
  { from: 'k', to: 'f', value: 273.15, description: 'Freezing point of water in Kelvin' }
];

export function getTemperatureFormula(fromUnit: string, toUnit: string): string {
  const getUnitSymbol = (code: string): string => {
    const unit = temperatureUnits.find(u => u.code === code);
    return unit ? unit.symbol : code;
  };

  const fromSymbol = getUnitSymbol(fromUnit);
  const toSymbol = getUnitSymbol(toUnit);

  if (fromUnit === 'c' && toUnit === 'f') {
    return `${toSymbol} = (${fromSymbol} × 9/5) + 32`;
  } else if (fromUnit === 'f' && toUnit === 'c') {
    return `${toSymbol} = (${fromSymbol} - 32) × 5/9`;
  } else if (fromUnit === 'c' && toUnit === 'k') {
    return `${toSymbol} = ${fromSymbol} + 273.15`;
  } else if (fromUnit === 'k' && toUnit === 'c') {
    return `${toSymbol} = ${fromSymbol} - 273.15`;
  } else if (fromUnit === 'f' && toUnit === 'k') {
    return `${toSymbol} = (${fromSymbol} - 32) × 5/9 + 273.15`;
  } else if (fromUnit === 'k' && toUnit === 'f') {
    return `${toSymbol} = (${fromSymbol} - 273.15) × 9/5 + 32`;
  } else if (fromUnit === 'c' && toUnit === 're') {
    return `${toSymbol} = ${fromSymbol} × 4/5`;
  } else if (fromUnit === 're' && toUnit === 'c') {
    return `${toSymbol} = ${fromSymbol} × 5/4`;
  } else if (fromUnit === 'c' && toUnit === 'r') {
    return `${toSymbol} = (${fromSymbol} + 273.15) × 9/5`;
  } else if (fromUnit === 'r' && toUnit === 'c') {
    return `${toSymbol} = (${fromSymbol} - 491.67) × 5/9`;
  } else if (fromUnit === 'f' && toUnit === 'r') {
    return `${toSymbol} = ${fromSymbol} + 459.67`;
  } else if (fromUnit === 'r' && toUnit === 'f') {
    return `${toSymbol} = ${fromSymbol} - 459.67`;
  } else {
    return `Conversion from ${fromUnit} to ${toUnit}`;
  }
}