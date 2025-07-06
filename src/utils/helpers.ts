/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Formats a number with commas
   */
  export const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  /**
   * Debounce function to limit function calls
   */
  export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
  /**
   * Check if a value is empty (null, undefined, empty string, empty array, empty object)
   */
  export const isEmpty = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim().length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  };