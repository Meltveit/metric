/**
 * KonverterProff - Temperature Converter Module
 * This file contains temperature conversion functionality
 */

const TemperatureConverter = {
    // Unlike other converters, temperature doesn't use a simple ratio conversion
    // We'll use conversion functions instead
    units: {
        c: {
            name: 'Celsius',
            symbol: '°C',
            // Convert from Celsius to specified unit
            convert: {
                c: value => value,
                f: value => (value * 9/5) + 32,
                k: value => value + 273.15,
                r: value => (value + 273.15) * 9/5,
                re: value => value * 4/5
            }
        },
        f: {
            name: 'Fahrenheit',
            symbol: '°F',
            // Convert from Fahrenheit to specified unit
            convert: {
                c: value => (value - 32) * 5/9,
                f: value => value,
                k: value => (value - 32) * 5/9 + 273.15,
                r: value => value + 459.67,
                re: value => (value - 32) * 4/9
            }
        },
        k: {
            name: 'Kelvin',
            symbol: 'K',
            // Convert from Kelvin to specified unit
            convert: {
                c: value => value - 273.15,
                f: value => (value - 273.15) * 9/5 + 32,
                k: value => value,
                r: value => value * 9/5,
                re: value => (value - 273.15) * 4/5
            }
        },
        r: {
            name: 'Rankine',
            symbol: '°R',
            // Convert from Rankine to specified unit
            convert: {
                c: value => (value - 491.67) * 5/9,
                f: value => value - 459.67,
                k: value => value * 5/9,
                r: value => value,
                re: value => (value - 491.67) * 4/9
            }
        },
        re: {
            name: 'Réaumur',
            symbol: '°Ré',
            // Convert from Réaumur to specified unit
            convert: {
                c: value => value * 5/4,
                f: value => (value * 9/4) + 32,
                k: value => (value * 5/4) + 273.15,
                r: value => (value * 9/4) + 491.67,
                re: value => value
            }
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
        
        // Special case: if same unit, just return the value
        if (fromUnit === toUnit) {
            return value;
        }
        
        // Use the conversion function from source unit to target unit
        return this.units[fromUnit].convert[toUnit](parseFloat(value));
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
        const fromSymbol = this.getUnitSymbol(fromUnit);
        const toSymbol = this.getUnitSymbol(toUnit);
        
        // Generate specific formula based on unit conversion
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
            // For other combinations, show the general conversion path through Celsius
            const fromName = this.getUnitName(fromUnit);
            const toName = this.getUnitName(toUnit);
            return `To convert from ${fromName} to ${toName}, first convert to Celsius, then to ${toName}`;
        }
    },
    
    /**
     * Get all unit codes
     * @returns {string[]} Array of unit codes
     */
    getAllUnitCodes: function() {
        return Object.keys(this.units);
    },
    
    /**
     * Get common temperature points for quick reference
     * @returns {Object[]} Array of common temperature objects
     */
    getCommonTemperatures: function() {
        return [
            { from: 'c', to: 'f', value: 0, description: 'Freezing point of water' },
            { from: 'c', to: 'f', value: 100, description: 'Boiling point of water' },
            { from: 'f', to: 'c', value: 98.6, description: 'Average human body temperature' },
            { from: 'c', to: 'k', value: 0, description: 'Freezing point in Kelvin' },
            { from: 'k', to: 'c', value: 0, description: 'Absolute zero' },
            { from: 'f', to: 'k', value: 32, description: 'Freezing point in Fahrenheit to Kelvin' }
        ];
    },
    
    /**
     * Calculate and format a common temperature point
     * @param {Object} temperature - The temperature object
     * @returns {Object} Formatted temperature result
     */
    formatCommonTemperature: function(temperature) {
        const result = this.convert(temperature.value, temperature.from, temperature.to);
        const fromName = this.getUnitName(temperature.from);
        const toName = this.getUnitName(temperature.to);
        const fromSymbol = this.getUnitSymbol(temperature.from);
        const toSymbol = this.getUnitSymbol(temperature.to);
        
        return {
            fromValue: temperature.value,
            fromUnit: temperature.from,
            fromName,
            fromSymbol,
            toValue: result,
            toUnit: temperature.to,
            toName,
            toSymbol,
            description: temperature.description,
            text: `${temperature.value}${fromSymbol} = ${KonverterProff.formatNumber(result)}${toSymbol}`
        };
    }
};

// If Alpine.js is available, register the converter
if (window.Alpine) {
    window.Alpine.data('temperatureConverter', () => ({
        fromValue: 0,
        toValue: 32,
        fromUnit: 'c',
        toUnit: 'f',
        conversionFormula: '°F = (°C × 9/5) + 32',
        
        init() {
            this.convert();
        },
        
        convert() {
            if (this.fromValue === '' || isNaN(this.fromValue)) {
                this.toValue = '';
                return;
            }
            
            const result = TemperatureConverter.convert(
                parseFloat(this.fromValue),
                this.fromUnit,
                this.toUnit
            );
            
            this.toValue = result;
            this.updateFormula();
            
            // Add to history
            KonverterProff.addToHistory('temperature', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit
            });
        },
        
        convertValue(value, fromUnit, toUnit) {
            return TemperatureConverter.convert(value, fromUnit, toUnit);
        },
        
        updateFormula() {
            this.conversionFormula = TemperatureConverter.getFormula(this.fromUnit, this.toUnit);
        },
        
        formatNumber(number) {
            // For temperature, we typically use fewer decimal places
            let decimals = 2;
            if (Number.isInteger(number)) {
                return number.toString();
            }
            
            return parseFloat(number.toFixed(decimals)).toString();
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
            const saved = KonverterProff.saveToFavorites('temperature', {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit,
                fromUnitName: TemperatureConverter.getUnitName(this.fromUnit),
                toUnitName: TemperatureConverter.getUnitName(this.toUnit)
            });
            
            return saved;
        }
    }));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TemperatureConverter;
}