import { useMemo, useCallback } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, getMonth, getYear } from 'date-fns';

/**
 * Performance-optimized hook for calendar data generation
 * Memoizes expensive calculations to prevent unnecessary re-renders
 */
export function useCalendarPerformance(minDate, maxDate, selectedDate) {
  // Memoize month range calculation
  const monthsRange = useMemo(() => {
    if (!minDate || !maxDate) return [];
    
    const months = [];
    let current = startOfMonth(minDate);
    const end = startOfMonth(maxDate);
    
    while (current <= end) {
      months.push({
        month: getMonth(current),
        year: getYear(current),
        date: new Date(current)
      });
      current.setMonth(current.getMonth() + 1);
    }
    
    return months;
  }, [minDate, maxDate]);

  // Memoize date range for a specific month
  const getMonthDays = useCallback((monthDate) => {
    const start = startOfMonth(monthDate);
    const end = endOfMonth(monthDate);
    
    return eachDayOfInterval({ start, end });
  }, []);

  // Memoize selected date calculations
  const selectedDateInfo = useMemo(() => {
    if (!selectedDate) return null;
    
    return {
      month: getMonth(selectedDate),
      year: getYear(selectedDate),
      date: selectedDate
    };
  }, [selectedDate]);

  // Performance monitoring in development
  const logPerformance = useCallback((operation, startTime) => {
    if (process.env.NODE_ENV === 'development') {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (duration > 16) { // More than one frame at 60fps
        console.warn(`Calendar: Slow ${operation} operation took ${duration.toFixed(2)}ms`);
      }
    }
  }, []);

  return {
    monthsRange,
    getMonthDays,
    selectedDateInfo,
    logPerformance
  };
}

/**
 * Hook for optimizing virtual scrolling performance
 */
export function useVirtualScrollPerformance(itemCount, containerHeight) {
  // Calculate optimal overscan based on container size
  const overscanCount = useMemo(() => {
    const baseOverscan = 2;
    const dynamicOverscan = Math.ceil(containerHeight / 100);
    return Math.max(baseOverscan, Math.min(dynamicOverscan, 10));
  }, [containerHeight]);

  // Memoize scroll calculations
  const scrollMetrics = useMemo(() => ({
    visibleItems: Math.ceil(containerHeight / 56), // 56px average row height
    bufferSize: overscanCount * 56,
    totalHeight: itemCount * 56
  }), [containerHeight, itemCount, overscanCount]);

  return {
    overscanCount,
    scrollMetrics
  };
}