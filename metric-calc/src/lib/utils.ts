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
 */
export function formatNumber(value: number, decimals: number = 6): string {
  // Handle very large or very small numbers with scientific notation
  if ((Math.abs(value) >= 1e10 || (Math.abs(value) < 1e-6 && value !== 0))) {
    return value.toExponential(decimals);
  }

  // Determine appropriate precision based on value magnitude
  let precision = decimals;
  if (value >= 100) precision = Math.min(decimals, 2);
  else if (value >= 10) precision = Math.min(decimals, 3);
  else if (value >= 1) precision = Math.min(decimals, 4);
  else if (value >= 0.1) precision = Math.min(decimals, 5);

  // Format number with appropriate precision
  const formatted = Number(value.toFixed(precision));

  // If the number is an integer, return it without decimal places
  if (Number.isInteger(formatted)) {
    return formatted.toString();
  }

  // Otherwise return with decimal places but without trailing zeros
  return formatted.toString();
}