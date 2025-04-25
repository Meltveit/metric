'use client';

import { useState, useCallback } from 'react';
import { formatNumber } from '@/lib/utils';
import { ClientUnit, ConversionResult } from '@/types/units';

interface UseUnitConversionProps {
  defaultFromUnit: ClientUnit;
  defaultToUnit: ClientUnit;
  defaultValue?: number;
}

export function useUnitConversion({
  defaultFromUnit,
  defaultToUnit,
  defaultValue = 1
}: UseUnitConversionProps) {
  const [fromValue, setFromValue] = useState<string>(defaultValue.toString());
  const [fromUnit, setFromUnit] = useState<ClientUnit>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<ClientUnit>(defaultToUnit);
  const [toValue, setToValue] = useState<string>('');
  const [formula, setFormula] = useState<string>('');

  // Update the formula displayed
  const updateFormula = useCallback(() => {
    const conversionFactor = toUnit.fromBase(fromUnit.toBase(1));
    
    const formattedFactor = formatNumber(conversionFactor);
    
    setFormula(`1 ${fromUnit.name} = ${formattedFactor} ${toUnit.name}`);
  }, [fromUnit, toUnit]);

  // Convert from one unit to another
  const convert = useCallback(() => {
    if (fromValue === '' || isNaN(Number(fromValue))) {
      setToValue('');
      setFormula('');
      return;
    }

    // Get the numeric value
    const value = parseFloat(fromValue);

    // Convert to base unit
    const valueInBaseUnit = fromUnit.toBase(value);

    // Convert from base unit to target unit
    const result = toUnit.fromBase(valueInBaseUnit);

    // Update the result value
    setToValue(formatNumber(result));

    // Update formula
    updateFormula();
  }, [fromValue, fromUnit, toUnit, updateFormula]);

  // Swap from and to units
  const swapUnits = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    
    // If we have a valid result, use it as the new input
    if (toValue !== '' && !isNaN(Number(toValue))) {
      setFromValue(toValue);
    }
  }, [fromUnit, toUnit, toValue]);

  // Set preset conversion
  const setPresetConversion = useCallback((fromUnitValue: ClientUnit, toUnitValue: ClientUnit, value: number) => {
    setFromUnit(fromUnitValue);
    setToUnit(toUnitValue);
    setFromValue(value.toString());
  }, []);

  // Get conversion result
  const getResult = useCallback((): ConversionResult | null => {
    if (fromValue === '' || isNaN(Number(fromValue))) {
      return null;
    }

    const value = parseFloat(fromValue);
    const valueInBaseUnit = fromUnit.toBase(value);
    const result = toUnit.fromBase(valueInBaseUnit);

    return {
      value: result,
      fromUnit,
      toUnit,
      formula: `${value} ${fromUnit.symbol} = ${formatNumber(result)} ${toUnit.symbol}`
    };
  }, [fromValue, fromUnit, toUnit]);

  return {
    fromValue,
    setFromValue,
    fromUnit,
    setFromUnit,
    toValue,
    toUnit,
    setToUnit,
    formula,
    convert,
    swapUnits,
    setPresetConversion,
    getResult
  };
}