export interface Unit {
    code: string;
    name: string;
    symbol: string;
    group?: string;
  }
  
  export interface ConversionUnit extends Unit {
    toBase: (value: number) => number;
    fromBase: (value: number) => number;
  }
  
  export interface UnitGroup {
    name: string;
    units: ConversionUnit[];
  }
  
  export interface ConversionResult {
    value: number;
    fromUnit: ConversionUnit;
    toUnit: ConversionUnit;
    formula: string;
  }
  
  export interface TemperatureUnit extends Unit {
    convert: {
      [key: string]: (value: number) => number;
    };
  }