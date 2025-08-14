/**
 * Backward Compatibility Layer for React Infinite Calendar
 * 
 * This provides the EXACT same API as the old react-infinite-calendar
 * so your Rails code works without ANY changes
 */

import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import BaseCalendar from './Calendar/index.jsx';

// Default export that matches old API exactly
const InfiniteCalendar = forwardRef((props, ref) => {
  const {
    Component,
    selected,
    onSelect,
    height = 400,
    width = 400,
    displayOptions = {},
    minDate,
    maxDate,
    theme,
    locale,
    ...restProps
  } = props;

  // Use the Component if provided (for HOC compatibility)
  const CalendarComponent = Component || BaseCalendar;

  return (
    <CalendarComponent
      ref={ref}
      selected={selected}
      onSelect={onSelect}
      height={height}
      width={width}
      minDate={minDate}
      maxDate={maxDate}
      theme={theme}
      locale={locale}
      showOverlay={displayOptions.showOverlay}
      showTodayHelper={displayOptions.showTodayHelper}
      {...restProps}
    />
  );
});

// Export the base Calendar for HOC usage
export const Calendar = BaseCalendar;

// HOC: withRange - for date range selection
export function withRange(CalendarComponent) {
  return forwardRef((props, ref) => {
    const [rangeState, setRangeState] = useState({
      start: props.selected?.start || null,
      end: props.selected?.end || null,
      selecting: false
    });

    const handleSelect = (date) => {
      let newState;
      
      if (!rangeState.selecting || !rangeState.start) {
        // First click - start selection
        newState = {
          start: date,
          end: null,
          selecting: true
        };
        
        if (props.onSelect) {
          props.onSelect({
            eventType: 1, // Start selection
            start: date,
            end: null
          });
        }
      } else {
        // Second click - complete range
        const start = rangeState.start;
        const end = date;
        
        newState = {
          start: start <= end ? start : end,
          end: start <= end ? end : start,
          selecting: false
        };
        
        if (props.onSelect) {
          props.onSelect({
            eventType: 3, // Range complete
            start: newState.start,
            end: newState.end
          });
        }
      }
      
      setRangeState(newState);
    };

    return (
      <CalendarComponent
        {...props}
        ref={ref}
        selected={rangeState.start}
        onSelect={handleSelect}
        rangeStart={rangeState.start}
        rangeEnd={rangeState.end}
      />
    );
  });
}

// HOC: withMultipleDates - for multiple date selection
export function withMultipleDates(CalendarComponent) {
  return forwardRef((props, ref) => {
    const [selected, setSelected] = useState(
      Array.isArray(props.selected) ? props.selected : []
    );
    
    const internalRef = useRef();

    // Expose state through ref (for backward compatibility)
    useImperativeHandle(ref, () => ({
      state: { selected },
      ...internalRef.current
    }));

    const handleSelect = (date) => {
      const dateTime = date.getTime();
      const exists = selected.find(d => d.getTime() === dateTime);
      
      let newSelected;
      if (exists) {
        newSelected = selected.filter(d => d.getTime() !== dateTime);
      } else {
        newSelected = [...selected, date];
      }
      
      newSelected.sort((a, b) => a.getTime() - b.getTime());
      setSelected(newSelected);
      
      if (props.onSelect) {
        props.onSelect(date);
      }
    };

    return (
      <CalendarComponent
        {...props}
        ref={internalRef}
        selected={selected}
        onSelect={handleSelect}
        multipleSelection={true}
      />
    );
  });
}

// Default interpolation for multiple dates
export function defaultMultipleDateInterpolation(selectedDates) {
  if (!selectedDates || selectedDates.length === 0) return [];
  
  // Simple interpolation - just return selected dates
  // You can enhance this to fill gaps between dates if needed
  return selectedDates;
}

// Main default export matching old API
InfiniteCalendar.displayName = 'InfiniteCalendar';

export default InfiniteCalendar;