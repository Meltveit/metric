/**
 * KonverterProff - Main JavaScript File
 * This file contains common functionality used across the application
 */

// Check if the browser supports service workers for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

/**
 * Global utility functions
 */
const KonverterProff = {
    /**
     * Formats a number to a specified number of decimal places
     * @param {number} number - The number to format
     * @param {number} decimals - The number of decimal places to display
     * @returns {string} The formatted number as a string
     */
    formatNumber: (number, decimals = 6) => {
        // Determine the appropriate number of decimal places based on the value's magnitude
        if (number >= 100) decimals = Math.min(decimals, 2);
        else if (number >= 10) decimals = Math.min(decimals, 3);
        else if (number >= 1) decimals = Math.min(decimals, 4);
        else if (number >= 0.1) decimals = Math.min(decimals, 5);
        
        // Format the number
        const formatted = parseFloat(number.toFixed(decimals));
        
        // If the number is an integer, return it without decimal places
        if (Number.isInteger(formatted)) {
            return formatted.toString();
        }
        
        // Otherwise return with decimal places but without trailing zeros
        return formatted.toString();
    },
    
    /**
     * Handles saving a conversion to favorites
     * @param {string} category - The conversion category (e.g., 'volume', 'length')
     * @param {object} conversionData - The conversion details
     */
    saveToFavorites: (category, conversionData) => {
        let favorites = JSON.parse(localStorage.getItem('konverterproff_favorites')) || {};
        
        // Initialize category array if it doesn't exist
        if (!favorites[category]) {
            favorites[category] = [];
        }
        
        // Check if this conversion is already in favorites
        const exists = favorites[category].some(item => 
            item.fromUnit === conversionData.fromUnit && 
            item.toUnit === conversionData.toUnit
        );
        
        // Add to favorites if it doesn't exist
        if (!exists) {
            // Limit to 10 favorites per category
            if (favorites[category].length >= 10) {
                favorites[category].pop(); // Remove oldest
            }
            
            // Add timestamp for sorting
            conversionData.timestamp = Date.now();
            
            // Add to beginning of array (newest first)
            favorites[category].unshift(conversionData);
            
            // Save to localStorage
            localStorage.setItem('konverterproff_favorites', JSON.stringify(favorites));
            
            return true;
        }
        
        return false;
    },
    
    /**
     * Gets favorites for a specific category
     * @param {string} category - The conversion category
     * @returns {Array} Array of favorite conversions
     */
    getFavorites: (category) => {
        const favorites = JSON.parse(localStorage.getItem('konverterproff_favorites')) || {};
        return favorites[category] || [];
    },
    
    /**
     * Record conversion to history
     * @param {string} category - The conversion category
     * @param {object} conversionData - The conversion details
     */
    addToHistory: (category, conversionData) => {
        let history = JSON.parse(localStorage.getItem('konverterproff_history')) || {};
        
        // Initialize category array if it doesn't exist
        if (!history[category]) {
            history[category] = [];
        }
        
        // Add timestamp
        conversionData.timestamp = Date.now();
        
        // Add to beginning of array (newest first)
        history[category].unshift(conversionData);
        
        // Limit to 50 history items per category
        if (history[category].length > 50) {
            history[category] = history[category].slice(0, 50);
        }
        
        // Save to localStorage
        localStorage.setItem('konverterproff_history', JSON.stringify(history));
    },
    
    /**
     * Gets conversion history for a specific category
     * @param {string} category - The conversion category
     * @returns {Array} Array of historical conversions
     */
    getHistory: (category) => {
        const history = JSON.parse(localStorage.getItem('konverterproff_history')) || {};
        return history[category] || [];
    },
    
    /**
     * Initialize theme based on user preference
     */
    initTheme: () => {
        const savedTheme = localStorage.getItem('konverterproff_theme');
        if (savedTheme === 'dark' || 
            (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
    
    /**
     * Toggle between light and dark theme
     */
    toggleTheme: () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('konverterproff_theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('konverterproff_theme', 'dark');
        }
    },
    
    /**
     * Handle lazy loading of images
     */
    setupLazyLoading: () => {
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('[data-src]');
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(image => imageObserver.observe(image));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            const lazyImages = document.querySelectorAll('[data-src]');
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
};

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    KonverterProff.initTheme();
    KonverterProff.setupLazyLoading();
    
    // Initialize any theme toggle buttons
    const themeToggles = document.querySelectorAll('[data-toggle-theme]');
    themeToggles.forEach(button => {
        button.addEventListener('click', KonverterProff.toggleTheme);
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KonverterProff;
}