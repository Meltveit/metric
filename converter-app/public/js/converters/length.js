/**
 * KonverterProff - Length Converter Module
 * This file contains length conversion functionality
 */

const LengthConverter = {
    // Base unit: meters
    units: {
        m: {
            name: 'Meter',
            symbol: 'm',
            toBase: value => value,
            fromBase: value => value
        },
        km: {
            name: 'Kilometer',
            symbol: 'km',
            toBase: value => value * 1000,
            fromBase: value => value / 1000
        },
        cm: {
            name: 'Centimeter',
            symbol: 'cm',
            toBase: value => value / 100,
            fromBase: value => value * 100
        },
        mm: {
            name: 'Millimeter',
            symbol: 'mm',
            toBase: value => value / 1000,
            fromBase: value => value * 1000
        },
        um: {
            name: 'Micrometer',
            symbol: 'μm',
            toBase: value => value / 1000000,
            fromBase: value => value * 1000000
        },
        nm: {
            name: 'Nanometer',
            symbol: 'nm',
            toBase: value => value / 1000000000,
            fromBase: value => value * 1000000000
        },
        mi: {
            name: 'Mile',
            symbol: 'mi',
            toBase: value => value * 1609.344,
            fromBase: value => value / 1609.344
        },
        yd: {
            name: 'Yard',
            symbol: 'yd',
            toBase: value => value * 0.9144,
            fromBase: value => value / 0.9144
        },
        ft: {
            name: 'Foot',
            symbol: 'ft',
            toBase: value => value * 0.3048,
            fromBase: value => value / 0.3048
        },
        in: {
            name: 'Inch',
            symbol: 'in',
            toBase: value => value * 0.0254,
            fromBase: value => value / 0.0254
        },
        nmi: {
            name: 'Nautical Mile',
            symbol: 'nmi',
            toBase: value => value * 1852,
            fromBase: value => value / 1852
        },
        ly: {
            name: 'Light Year',
            symbol: 'ly',
            toBase: value => value * 9.461e15,
            fromBase: value => value / 9.461e15
        },
        au: {
            name: 'Astronomical Unit',
            symbol: 'AU',
            toBase: value => value * 149597870700,
            fromBase: value => value / 149597870700
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
        
        // Convert to base unit (meters)
        const valueInMeters = this.units[fromUnit].toBase(value);
        
        // Convert from base unit to target unit
        return this.units[toUnit].fromBase(valueInMeters);
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
            { from: 'm', to: 'ft', value: 1 },
            { from: 'ft', to: 'm', value: 1 },
            { from: 'mi', to: 'km', value: 1 },
            { from: 'in', to: 'cm', value: 1 },
            { from: 'km', to: 'mi', value: 1 },
            { from: 'yd', to: 'm', value: 1 }
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
    window.Alpine.data('lengthConverter', () => ({
        fromValue: 1,
        toValue: 0,
        fromUnit: 'm',
        toUnit: 'ft',
        conversionFormula: '',
        
        init() {
            this.convert();
        },
        
        convert() {
            if (this.fromValue === '' || isNaN(this.fromValue)) {
                this.toValue = '';
                return;
            }
            
            const result = LengthConverter.convert(
                parseFloat(this.fromValue),
                this.fromUnit,
                this.toUnit
            );
            
            this.toValue = result;
            this.updateFormula();
            
            // Add to history
            KonverterProff.addToHistory('length', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit
            });
        },
        
        convertValue(value, fromUnit, toUnit) {
            return LengthConverter.convert(value, fromUnit, toUnit);
        },
        
        updateFormula() {
            this.conversionFormula = LengthConverter.getFormula(this.fromUnit, this.toUnit);
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
            const saved = KonverterProff.saveToFavorites('length', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit,
                fromUnitName: LengthConverter.getUnitName(this.fromUnit),
                toUnitName: LengthConverter.getUnitName(this.toUnit)
            });
            
            return saved;
        }
    }));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LengthConverter;
}