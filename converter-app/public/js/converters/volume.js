/**
 * KonverterProff - Volume Converter Module
 * This file contains volume conversion functionality
 */

const VolumeConverter = {
    // Base unit: liters
    units: {
        l: {
            name: 'Liter',
            symbol: 'L',
            toBase: value => value,
            fromBase: value => value
        },
        ml: {
            name: 'Milliliter',
            symbol: 'mL',
            toBase: value => value / 1000,
            fromBase: value => value * 1000
        },
        gal: {
            name: 'US Gallon',
            symbol: 'gal',
            toBase: value => value * 3.78541,
            fromBase: value => value / 3.78541
        },
        qt: {
            name: 'US Quart',
            symbol: 'qt',
            toBase: value => value * 0.946353,
            fromBase: value => value / 0.946353
        },
        pt: {
            name: 'US Pint',
            symbol: 'pt',
            toBase: value => value * 0.473176,
            fromBase: value => value / 0.473176
        },
        cup: {
            name: 'Cup',
            symbol: 'cup',
            toBase: value => value * 0.236588,
            fromBase: value => value / 0.236588
        },
        oz: {
            name: 'Fluid Ounce',
            symbol: 'fl oz',
            toBase: value => value * 0.0295735,
            fromBase: value => value / 0.0295735
        },
        tbsp: {
            name: 'Tablespoon',
            symbol: 'tbsp',
            toBase: value => value * 0.0147868,
            fromBase: value => value / 0.0147868
        },
        tsp: {
            name: 'Teaspoon',
            symbol: 'tsp',
            toBase: value => value * 0.00492892,
            fromBase: value => value / 0.00492892
        },
        m3: {
            name: 'Cubic Meter',
            symbol: 'm³',
            toBase: value => value * 1000,
            fromBase: value => value / 1000
        },
        cm3: {
            name: 'Cubic Centimeter',
            symbol: 'cm³',
            toBase: value => value / 1000,
            fromBase: value => value * 1000
        },
        mm3: {
            name: 'Cubic Millimeter',
            symbol: 'mm³',
            toBase: value => value / 1000000,
            fromBase: value => value * 1000000
        },
        ft3: {
            name: 'Cubic Foot',
            symbol: 'ft³',
            toBase: value => value * 28.3168,
            fromBase: value => value / 28.3168
        },
        in3: {
            name: 'Cubic Inch',
            symbol: 'in³',
            toBase: value => value * 0.0163871,
            fromBase: value => value / 0.0163871
        },
        gal_uk: {
            name: 'UK Gallon',
            symbol: 'gal (UK)',
            toBase: value => value * 4.54609,
            fromBase: value => value / 4.54609
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
        
        // Convert to base unit (liters)
        const valueInLiters = this.units[fromUnit].toBase(value);
        
        // Convert from base unit to target unit
        return this.units[toUnit].fromBase(valueInLiters);
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
        if (conversionFactor >= 1000000 || conversionFactor < 0.000001) {
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
            { from: 'gal', to: 'l', value: 1 },
            { from: 'l', to: 'ml', value: 1 },
            { from: 'cup', to: 'ml', value: 1 },
            { from: 'l', to: 'gal_uk', value: 1 },
            { from: 'oz', to: 'ml', value: 1 },
            { from: 'm3', to: 'l', value: 1 }
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
    window.Alpine.data('volumeConverter', () => ({
        fromValue: 1,
        toValue: 0,
        fromUnit: 'l',
        toUnit: 'gal',
        conversionFormula: '',
        
        init() {
            this.convert();
        },
        
        convert() {
            if (this.fromValue === '' || isNaN(this.fromValue)) {
                this.toValue = '';
                return;
            }
            
            const result = VolumeConverter.convert(
                parseFloat(this.fromValue),
                this.fromUnit,
                this.toUnit
            );
            
            this.toValue = result;
            this.updateFormula();
            
            // Add to history
            KonverterProff.addToHistory('volume', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit
            });
        },
        
        convertValue(value, fromUnit, toUnit) {
            return VolumeConverter.convert(value, fromUnit, toUnit);
        },
        
        updateFormula() {
            this.conversionFormula = VolumeConverter.getFormula(this.fromUnit, this.toUnit);
        },
        
        formatNumber(number) {
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
            const saved = KonverterProff.saveToFavorites('volume', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit,
                fromUnitName: VolumeConverter.getUnitName(this.fromUnit),
                toUnitName: VolumeConverter.getUnitName(this.toUnit)
            });
            
            return saved;
        }
    }));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VolumeConverter;
}