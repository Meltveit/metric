import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number to a specified number of decimal places
 * Now with improved type safety to prevent "toFixed is not a function" errors
 */
export function formatNumber(value: unknown, decimals: number = 6): string {
  // Ensure value is a valid number first
  const numValue = Number(value);
  
  // If conversion failed or resulted in NaN, return a fallback value
  if (isNaN(numValue)) {
    return '0';
  }

  // Handle very large or very small numbers with scientific notation
  if ((Math.abs(numValue) >= 1e10 || (Math.abs(numValue) < 1e-6 && numValue !== 0))) {
    return numValue.toExponential(decimals);
  }

  // Determine appropriate precision based on value magnitude
  let precision = decimals;
  if (numValue >= 100) precision = Math.min(decimals, 2);
  else if (numValue >= 10) precision = Math.min(decimals, 3);
  else if (numValue >= 1) precision = Math.min(decimals, 4);
  else if (numValue >= 0.1) precision = Math.min(decimals, 5);

  // Format number with appropriate precision
  const formatted = Number(numValue.toFixed(precision));

  // If the number is an integer, return it without decimal places
  if (Number.isInteger(formatted)) {
    return formatted.toString();
  }

  // Otherwise return with decimal places but without trailing zeros
  return formatted.toString();
}