// src/types/units.ts
// Update the types to support serializable functions

export interface Unit {
    code: string;
    name: string;
    symbol: string;
    group?: string;
  }
  
  // Original interface - keep for reference but we won't use it directly
  export interface ConversionUnit extends Unit {
    toBase: (value: number) => number;
    fromBase: (value: number) => number;
  }
  
  // New interface for serializable units
  export interface SerializableUnit extends Unit {
    toBaseStr: string;
    fromBaseStr: string;
  }
  
  // Interface for client-side units with actual functions
  export interface ClientUnit extends SerializableUnit {
    toBase: (value: number) => number;
    fromBase: (value: number) => number;
  }
  
  export interface UnitGroup {
    name: string;
    units: SerializableUnit[]; // Changed from ConversionUnit to SerializableUnit
  }
  
  export interface ConversionResult {
    value: number;
    fromUnit: ClientUnit; // Changed to ClientUnit
    toUnit: ClientUnit; // Changed to ClientUnit
    formula: string;
  }
  
  export interface TemperatureUnit extends Unit {
    convert: {
      [key: string]: (value: number) => number;
    };
  }
  
  // Utility function to create a serializable unit
  export function createSerializableUnit(
    code: string,
    name: string,
    symbol: string,
    toBase: string,
    fromBase: string
  ): SerializableUnit {
    return {
      code,
      name,
      symbol,
      toBaseStr: toBase,
      fromBaseStr: fromBase
    };
  }
  
  // Utility function to convert SerializableUnit to ClientUnit
  export function createClientUnit(unit: SerializableUnit): ClientUnit {
    // Create actual functions from string representations
    const toBase = new Function('value', `return ${unit.toBaseStr}`) as (value: number) => number;
    const fromBase = new Function('value', `return ${unit.fromBaseStr}`) as (value: number) => number;
    
    return {
      ...unit,
      toBase,
      fromBase
    };
  }