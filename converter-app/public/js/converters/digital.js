/**
 * KonverterProff - Digital Units Converter Module
 * This file contains digital storage and data transfer conversion functionality
 */

const DigitalConverter = {
    // Base unit: bytes
    storageUnits: {
        b: {
            name: 'Byte',
            symbol: 'B',
            toBase: value => value,
            fromBase: value => value
        },
        kb: {
            name: 'Kilobyte',
            symbol: 'KB',
            toBase: value => value * 1000,
            fromBase: value => value / 1000
        },
        mb: {
            name: 'Megabyte',
            symbol: 'MB',
            toBase: value => value * 1000 * 1000,
            fromBase: value => value / (1000 * 1000)
        },
        gb: {
            name: 'Gigabyte',
            symbol: 'GB',
            toBase: value => value * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000)
        },
        tb: {
            name: 'Terabyte',
            symbol: 'TB',
            toBase: value => value * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000)
        },
        pb: {
            name: 'Petabyte',
            symbol: 'PB',
            toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000)
        },
        eb: {
            name: 'Exabyte',
            symbol: 'EB',
            toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000 * 1000)
        },
        zb: {
            name: 'Zettabyte',
            symbol: 'ZB',
            toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000)
        },
        yb: {
            name: 'Yottabyte',
            symbol: 'YB',
            toBase: value => value * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000)
        },
        kib: {
            name: 'Kibibyte',
            symbol: 'KiB',
            toBase: value => value * 1024,
            fromBase: value => value / 1024
        },
        mib: {
            name: 'Mebibyte',
            symbol: 'MiB',
            toBase: value => value * 1024 * 1024,
            fromBase: value => value / (1024 * 1024)
        },
        gib: {
            name: 'Gibibyte',
            symbol: 'GiB',
            toBase: value => value * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024)
        },
        tib: {
            name: 'Tebibyte',
            symbol: 'TiB',
            toBase: value => value * 1024 * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024 * 1024)
        },
        pib: {
            name: 'Pebibyte',
            symbol: 'PiB',
            toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024)
        },
        eib: {
            name: 'Exbibyte',
            symbol: 'EiB',
            toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        },
        zib: {
            name: 'Zebibyte',
            symbol: 'ZiB',
            toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        },
        yib: {
            name: 'Yobibyte',
            symbol: 'YiB',
            toBase: value => value * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
            fromBase: value => value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        }
    },
    
    // Base unit: bits per second
    transferUnits: {
        bps: {
            name: 'Bit per second',
            symbol: 'bps',
            toBase: value => value,
            fromBase: value => value
        },
        kbps: {
            name: 'Kilobit per second',
            symbol: 'kbps',
            toBase: value => value * 1000,
            fromBase: value => value / 1000
        },
        mbps: {
            name: 'Megabit per second',
            symbol: 'Mbps',
            toBase: value => value * 1000 * 1000,
            fromBase: value => value / (1000 * 1000)
        },
        gbps: {
            name: 'Gigabit per second',
            symbol: 'Gbps',
            toBase: value => value * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000)
        },
        tbps: {
            name: 'Terabit per second',
            symbol: 'Tbps',
            toBase: value => value * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (1000 * 1000 * 1000 * 1000)
        },
        Bps: {
            name: 'Byte per second',
            symbol: 'B/s',
            toBase: value => value * 8,
            fromBase: value => value / 8
        },
        kBps: {
            name: 'Kilobyte per second',
            symbol: 'KB/s',
            toBase: value => value * 8 * 1000,
            fromBase: value => value / (8 * 1000)
        },
        MBps: {
            name: 'Megabyte per second',
            symbol: 'MB/s',
            toBase: value => value * 8 * 1000 * 1000,
            fromBase: value => value / (8 * 1000 * 1000)
        },
        GBps: {
            name: 'Gigabyte per second',
            symbol: 'GB/s',
            toBase: value => value * 8 * 1000 * 1000 * 1000,
            fromBase: value => value / (8 * 1000 * 1000 * 1000)
        },
        TBps: {
            name: 'Terabyte per second',
            symbol: 'TB/s',
            toBase: value => value * 8 * 1000 * 1000 * 1000 * 1000,
            fromBase: value => value / (8 * 1000 * 1000 * 1000 * 1000)
        }
    },
    
    /**
     * Convert a storage value from one unit to another
     * @param {number} value - The value to convert
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {number} The converted value
     */
    convertStorage: function(value, fromUnit, toUnit) {
        // Validate units
        if (!this.storageUnits[fromUnit] || !this.storageUnits[toUnit]) {
            console.error('Invalid storage unit provided for conversion');
            return null;
        }
        
        // Convert to base unit (bytes)
        const valueInBytes = this.storageUnits[fromUnit].toBase(parseFloat(value));
        
        // Convert from base unit to target unit
        return this.storageUnits[toUnit].fromBase(valueInBytes);
    },
    
    /**
     * Convert a data transfer value from one unit to another
     * @param {number} value - The value to convert
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {number} The converted value
     */
    convertTransfer: function(value, fromUnit, toUnit) {
        // Validate units
        if (!this.transferUnits[fromUnit] || !this.transferUnits[toUnit]) {
            console.error('Invalid transfer unit provided for conversion');
            return null;
        }
        
        // Convert to base unit (bits per second)
        const valueInBitsPerSecond = this.transferUnits[fromUnit].toBase(parseFloat(value));
        
        // Convert from base unit to target unit
        return this.transferUnits[toUnit].fromBase(valueInBitsPerSecond);
    },
    
    /**
     * Get the name of a storage unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit name
     */
    getStorageUnitName: function(unitCode) {
        return this.storageUnits[unitCode]?.name || unitCode;
    },
    
    /**
     * Get the symbol of a storage unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit symbol
     */
    getStorageUnitSymbol: function(unitCode) {
        return this.storageUnits[unitCode]?.symbol || unitCode;
    },
    
    /**
     * Get the name of a transfer unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit name
     */
    getTransferUnitName: function(unitCode) {
        return this.transferUnits[unitCode]?.name || unitCode;
    },
    
    /**
     * Get the symbol of a transfer unit from its code
     * @param {string} unitCode - The unit code
     * @returns {string} The unit symbol
     */
    getTransferUnitSymbol: function(unitCode) {
        return this.transferUnits[unitCode]?.symbol || unitCode;
    },
    
    /**
     * Generate a formula string for a storage conversion
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {string} The formula string
     */
    getStorageFormula: function(fromUnit, toUnit) {
        const fromUnitName = this.getStorageUnitName(fromUnit);
        const toUnitName = this.getStorageUnitName(toUnit);
        
        // For common conversions, use hardcoded formulas
        if (fromUnit === 'kb' && toUnit === 'b') {
            return '1 Kilobyte = 1,000 Bytes';
        } else if (fromUnit === 'mb' && toUnit === 'kb') {
            return '1 Megabyte = 1,000 Kilobytes';
        } else if (fromUnit === 'gb' && toUnit === 'mb') {
            return '1 Gigabyte = 1,000 Megabytes';
        } else if (fromUnit === 'kib' && toUnit === 'b') {
            return '1 Kibibyte = 1,024 Bytes';
        } else if (fromUnit === 'mib' && toUnit === 'kib') {
            return '1 Mebibyte = 1,024 Kibibytes';
        } else if (fromUnit === 'gib' && toUnit === 'mib') {
            return '1 Gibibyte = 1,024 Mebibytes';
        } else {
            // For other conversions, calculate and format
            const conversionFactor = this.convertStorage(1, fromUnit, toUnit);
            return `1 ${fromUnitName} = ${this.formatNumber(conversionFactor)} ${toUnitName}`;
        }
    },
    
    /**
     * Generate a formula string for a transfer conversion
     * @param {string} fromUnit - The source unit code
     * @param {string} toUnit - The target unit code
     * @returns {string} The formula string
     */
    getTransferFormula: function(fromUnit, toUnit) {
        const fromUnitName = this.getTransferUnitName(fromUnit);
        const toUnitName = this.getTransferUnitName(toUnit);
        
        // For common conversions, use hardcoded formulas
        if (fromUnit === 'mbps' && toUnit === 'kbps') {
            return '1 Megabit per second = 1,000 Kilobits per second';
        } else if (fromUnit === 'bps' && toUnit === 'Bps') {
            return '1 Byte per second = 8 Bits per second';
        } else {
            // For other conversions, calculate and format
            const conversionFactor = this.convertTransfer(1, fromUnit, toUnit);
            return `1 ${fromUnitName} = ${this.formatNumber(conversionFactor)} ${toUnitName}`;
        }
    },
    
    /**
     * Get all storage unit codes
     * @returns {string[]} Array of storage unit codes
     */
    getAllStorageUnitCodes: function() {
        return Object.keys(this.storageUnits);
    },
    
    /**
     * Get all transfer unit codes
     * @returns {string[]} Array of transfer unit codes
     */
    getAllTransferUnitCodes: function() {
        return Object.keys(this.transferUnits);
    },
    
    /**
     * Get common storage conversions for quick reference
     * @returns {Object[]} Array of common conversion objects
     */
    getCommonStorageConversions: function() {
        return [
            { from: 'mb', to: 'kb', value: 1 },
            { from: 'gb', to: 'mb', value: 1 },
            { from: 'tb', to: 'gb', value: 1 },
            { from: 'gib', to: 'gb', value: 1 },
            { from: 'kb', to: 'b', value: 1 },
            { from: 'kib', to: 'kb', value: 1 }
        ];
    },
    
    /**
     * Get common transfer conversions for quick reference
     * @returns {Object[]} Array of common conversion objects
     */
    getCommonTransferConversions: function() {
        return [
            { from: 'mbps', to: 'kbps', value: 1 },
            { from: 'gbps', to: 'mbps', value: 1 },
            { from: 'MBps', to: 'mbps', value: 1 },
            { from: 'mbps', to: 'kBps', value: 1 },
            { from: 'Bps', to: 'bps', value: 1 }
        ];
    },
    
    /**
     * Format a number for display
     * @param {number} number - The number to format
     * @returns {string} The formatted number string
     */
    formatNumber: function(number) {
        // For very large or very small numbers, use scientific notation
        if (number > 1e21 || (number < 1e-6 && number !== 0)) {
            return number.toExponential(6);
        }
        
        // Format with commas for thousands separators
        return number.toLocaleString(undefined, { 
            maximumFractionDigits: 6,
            minimumFractionDigits: 0
        });
    }
};

// If Alpine.js is available, register the converter
if (window.Alpine) {
    window.Alpine.data('digitalConverter', () => ({
        fromValue: 1,
        toValue: 0,
        fromUnit: 'mb',
        toUnit: 'kb',
        conversionFormula: '',
        isTransferUnits: false,
        
        init() {
            this.convert();
        },
        
        convert() {
            if (this.fromValue === '' || isNaN(this.fromValue)) {
                this.toValue = '';
                return;
            }
            
            // Determine which conversion function to use based on unit type
            if (this.isTransferUnits) {
                const result = DigitalConverter.convertTransfer(
                    parseFloat(this.fromValue),
                    this.fromUnit,
                    this.toUnit
                );
                this.toValue = result;
                this.updateFormula();
                
                // Add to history
                KonverterProff.addToHistory('digital_transfer', {
                    fromValue: this.fromValue,
                    fromUnit: this.fromUnit,
                    toValue: this.toValue,
                    toUnit: this.toUnit
                });
            } else {
                const result = DigitalConverter.convertStorage(
                    parseFloat(this.fromValue),
                    this.fromUnit,
                    this.toUnit
                );
                this.toValue = result;
                this.updateFormula();
                
                // Add to history
                KonverterProff.addToHistory('digital_storage', {
                    fromValue: this.fromValue,
                    fromUnit: this.fromUnit,
                    toValue: this.toValue,
                    toUnit: this.toUnit
                });
            }
        },
        
        convertValue(value, fromUnit, toUnit) {
            return this.isTransferUnits 
                ? DigitalConverter.convertTransfer(value, fromUnit, toUnit) 
                : DigitalConverter.convertStorage(value, fromUnit, toUnit);
        },
        
        updateFormula() {
            this.conversionFormula = this.isTransferUnits 
                ? DigitalConverter.getTransferFormula(this.fromUnit, this.toUnit) 
                : DigitalConverter.getStorageFormula(this.fromUnit, this.toUnit);
        },
        
        formatNumber(number) {
            return DigitalConverter.formatNumber(number);
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
            const category = this.isTransferUnits ? 'digital_transfer' : 'digital_storage';
            const fromUnitName = this.isTransferUnits 
                ? DigitalConverter.getTransferUnitName(this.fromUnit) 
                : DigitalConverter.getStorageUnitName(this.fromUnit);
            const toUnitName = this.isTransferUnits 
                ? DigitalConverter.getTransferUnitName(this.toUnit)
                : DigitalConverter.getStorageUnitName(this.toUnit);
            
            const saved = KonverterProff.saveToFavorites(category, {
                fromValue: this.fromValue,
                fromUnit: this.fromUnit,
                toValue: this.toValue,
                toUnit: this.toUnit,
                fromUnitName,
                toUnitName
            });
            
            return saved;
        },
        
        // Toggle between storage and transfer units
        toggleUnitType() {
            this.isTransferUnits = !this.isTransferUnits;
            
            // Reset units to default for the selected type
            if (this.isTransferUnits) {
                this.fromUnit = 'mbps';
                this.toUnit = 'kbps';
            } else {
                this.fromUnit = 'mb';
                this.toUnit = 'kb';
            }
            
            this.convert();
        }
    }));
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DigitalConverter;
}