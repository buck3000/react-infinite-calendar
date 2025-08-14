import { renderHook, act } from '@testing-library/react';
import useCalendarMonths from '../useCalendarMonths';

describe('useCalendarMonths', () => {
  const mockProps = {
    min: new Date(2020, 0, 1),
    max: new Date(2020, 11, 31)
  };

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => useCalendarMonths(mockProps));
    
    expect(result.current.months).toBeDefined();
    expect(result.current.minDate).toBeDefined();
    expect(result.current.maxDate).toBeDefined();
    expect(result.current.updateMonths).toBeDefined();
    expect(result.current.getYearsRange).toBeDefined();
  });

  it('should generate correct months array', () => {
    const { result } = renderHook(() => useCalendarMonths(mockProps));
    
    act(() => {
      result.current.updateMonths();
    });
    
    expect(result.current.months.current.length).toBe(12); // 12 months in 2020
    expect(result.current.months.current[0]).toEqual({ month: 0, year: 2020 });
    expect(result.current.months.current[11]).toEqual({ month: 11, year: 2020 });
  });

  it('should generate correct years range', () => {
    const { result } = renderHook(() => useCalendarMonths(mockProps));
    
    const years = result.current.getYearsRange();
    
    expect(years).toEqual([2020, 2021]); // 2020 to 2021 (exclusive)
  });

  it('should update months when min/max changes', () => {
    const { result, rerender } = renderHook(
      (props) => useCalendarMonths(props),
      { initialProps: mockProps }
    );
    
    expect(result.current.months.current.length).toBe(12);
    
    rerender({
      min: new Date(2020, 0, 1),
      max: new Date(2021, 11, 31)
    });
    
    act(() => {
      result.current.updateMonths();
    });
    
    expect(result.current.months.current.length).toBe(24); // 24 months in 2020-2021
  });
});
