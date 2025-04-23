/**
 * KonverterProff - Weight Converter Module
 * This file contains weight conversion functionality
 */

const WeightConverter = {
    // Base unit: kilograms
    units: {
        kg: {
            name: 'Kilogram',
            symbol: 'kg',
            toBase: value => value,
            fromBase: value => value
        },
        g: {
            name: 'Gram',
            symbol: 'g',
            toBase: value => value / 1000,
            fromBase: value => value * 1000
        },
        mg: {
            name: 'Milligram',
            symbol: 'mg',
            toBase: value => value / 1000000,
            fromBase: value => value * 1000000
        },
        lb: {
            name: 'Pound',
            symbol: 'lb',
            toBase: value => value * 0.45359237,
            fromBase: value => value / 0.45359237
        },
        oz: {
            name: 'Ounce',
            symbol: 'oz',
            toBase: value => value * 0.0283495231,
            fromBase: value => value / 0.0283495231
        },
        st: {
            name: 'Stone',
            symbol: 'st',
            toBase: value => value * 6.35029318,
            fromBase: value => value / 6.35029318
        },
        ton: {
            name: 'Metric Ton',
            symbol: 't',
            toBase: value => value * 1000,
            fromBase: value => value / 1000
        },
        uston: {
            name: 'US Ton',
            symbol: 'short ton',
            toBase: value => value * 907.18474,
            fromBase: value => value / 907.18474
        },
        ukton: {
            name: 'UK Ton',
            symbol: 'long ton',
            toBase: value => value * 1016.0469088,
            fromBase: value => value / 1016.0469088
        },
        ct: {
            name: 'Carat',
            symbol: 'ct',
            toBase: value => value * 0.0002,
            fromBase: value => value / 0.0002
        },
        gr: {
            name: 'Grain',
            symbol: 'gr',
            toBase: value => value * 0.0000647989,
            fromBase: value => value / 0.0000647989
        }
    },
    
    /**
     * Convert a value from one unit to another
     * @param {number} value - The value to convert
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {number} The converted value
     */
    convert: function(value, fromUnit, toUnit) {
        // Validate units
        if (!this.units[fromUnit] || !this.units[toUnit]) {
            console.error('Invalid unit provided for conversion');
            return null;
        }
        
        // Convert to base unit (kilograms)
        const valueInKg = this.units[fromUnit].toBase(value);
        
        // Convert from base unit to target unit
        return this.units[toUnit].fromBase(valueInKg);
    },
    
    /**
     * Get the name of a unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit name
     */
    getUnitName: function(unitCode) {
        return this.units[unitCode]?.name || unitCode;
    },
    
    /**
     * Get the symbol of a unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit symbol
     */
    getUnitSymbol: function(unitCode) {
        return this.units[unitCode]?.symbol || unitCode;
    },
    
    /**
     * Generate a formula string for a conversion
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {string} The formula string
     */
    getFormula: function(fromUnit, toUnit) {
        const fromName = this.getUnitName(fromUnit);
        const toName = this.getUnitName(toUnit);
        const conversionFactor = this.convert(1, fromUnit, toUnit);
        
        // Format the number based on its magnitude
        let formattedFactor;
        if (conversionFactor >= 1e10 || conversionFactor < 1e-10 && conversionFactor !== 0) {
            formattedFactor = conversionFactor.toExponential(6);
        } else {
            // Determine appropriate precision
            let precision = 6;
            if (conversionFactor >= 100) precision = 2;
            else if (conversionFactor >= 10) precision = 3;
            else if (conversionFactor >= 1) precision = 4;
            else if (conversionFactor >= 0.1) precision = 5;
            
            formattedFactor = parseFloat(conversionFactor.toFixed(precision));
        }
        
        return `1 ${fromName} = ${formattedFactor} ${toName}`;
    },
    
    /**
     * Get all unit codes
     * @returns {string[]} Array of unit codes
     */
    getAllUnitCodes: function() {
        return Object.keys(this.units);
    },
    
    /**
     * Get common conversions for quick reference
     * @returns {Object[]} Array of common conversion objects
     */
    getCommonConversions: function() {
        return [
            { from: 'kg', to: 'lb', value: 1 },
            { from: 'lb', to: 'kg', value: 1 },
            { from: 'oz', to: 'g', value: 1 },
            { from: 'st', to: 'kg', value: 1 },
            { from: 'ton', to: 'kg', value: 1 },
            { from: 'kg', to: 'ct', value: 1 }
        ];
    },
    
    /**
     * Calculate and format a common conversion
     * @param {Object} conversion - The conversion object
     * @returns {Object} Formatted conversion result
     */
    formatCommonConversion: function(conversion) {
        const result = this.convert(conversion.value, conversion.from, conversion.to);
        const fromName = this.getUnitName(conversion.from);
        const toName = this.getUnitName(conversion.to);
        const fromSymbol = this.getUnitSymbol(conversion.from);
        const toSymbol = this.getUnitSymbol(conversion.to);
        
        return {
            fromValue: conversion.value,
            fromUnit: conversion.from,
            fromName,
            fromSymbol,
            toValue: result,
            toUnit: conversion.to,
            toName,
            toSymbol,
            text: `${conversion.value} ${fromSymbol} = ${KonverterProff.formatNumber(result)} ${toSymbol}`
        };
    }
};

// If Alpine.js is available, register the converter
if (window.Alpine) {
    window.Alpine.data('weightConverter', () => ({
        fromValue: 1,
        toValue: 0,
        fromUnit: 'kg',
        toUnit: 'lb',
        conversionFormula: '',
        
        init() {
            this.convert();
        },
        
        convert() {
            if (this.fromValue === '' || isNaN(this.fromValue)) {
                this.toValue = '';
                return;
            }
            
            const result = WeightConverter.convert(
                parseFloat(this.fromValue),
                this.fromUnit,
                this.toUnit
            );
            
            this.toValue = result;
            this.updateFormula();
            
            // Add to history
            KonverterProff.addToHistory('weight', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit
            });
        },
        
        convertValue(value, fromUnit, toUnit) {
            return WeightConverter.convert(value, fromUnit, toUnit);
        },
        
        updateFormula() {
            this.conversionFormula = WeightConverter.getFormula(this.fromUnit, this.toUnit);
        },
        
        formatNumber(number) {
            // For very large or very small numbers, use scientific notation
            if (number > 1e10 || number < 1e-10 && number !== 0) {
                return number.toExponential(6);
            }
            
            return KonverterProff.formatNumber(number);
        },
        
        swap() {
            [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
            this.convert();
        },
        
        presetConversion(fromUnit, toUnit, value) {
            this.fromUnit = fromUnit;
            this.toUnit = toUnit;
            this.fromValue = value;
            this.convert();
        },
        
        saveToFavorites() {
            const saved = KonverterProff.saveToFavorites('weight', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit,
                fromUnitName: WeightConverter.getUnitName(this.fromUnit),
                toUnitName: WeightConverter.getUnitName(this.toUnit)
            });
            
            return saved;
        }
    }));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WeightConverter;
}