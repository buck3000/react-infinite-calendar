import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import useCalendarControls from '../useCalendarControls';

describe('useCalendarControls', () => {
  const mockProps = {
    min: new Date(2020, 0, 1),
    max: new Date(2020, 11, 31),
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2020, 11, 31),
    monthListRef: { current: { getDateOffset: vi.fn(), scrollTo: vi.fn(), scrollToDate: vi.fn() } }
  };

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => useCalendarControls(mockProps));
    
    expect(result.current.scrollTop).toBeDefined();
    expect(result.current.scrollSpeed).toBeDefined();
    expect(result.current.getScrollSpeed).toBeDefined();
    expect(result.current.getDateOffset).toBeDefined();
    expect(result.current.scrollTo).toBeDefined();
    expect(result.current.scrollToDate).toBeDefined();
    expect(result.current.getDisabledDates).toBeDefined();
    expect(result.current.updateScrollPosition).toBeDefined();
  });

  it('should update scroll position correctly', () => {
    const { result } = renderHook(() => useCalendarControls(mockProps));
    
    act(() => {
      result.current.updateScrollPosition(100, 5);
    });
    
    expect(result.current.scrollTop.current).toBe(100);
    expect(result.current.scrollSpeed.current).toBe(5);
  });

  it('should format disabled dates correctly', () => {
    const { result } = renderHook(() => useCalendarControls(mockProps));
    const disabledDates = [new Date(2020, 5, 15), new Date(2020, 6, 4)];
    
    const formattedDates = result.current.getDisabledDates(disabledDates);
    
    expect(formattedDates).toEqual(['2020-06-15', '2020-07-04']);
  });

  it('should call monthList methods correctly', () => {
    const { result } = renderHook(() => useCalendarControls(mockProps));
    
    result.current.getDateOffset(new Date());
    expect(mockProps.monthListRef.current.getDateOffset).toHaveBeenCalled();
    
    result.current.scrollTo(100);
    expect(mockProps.monthListRef.current.scrollTo).toHaveBeenCalledWith(100);
    
    const date = new Date();
    result.current.scrollToDate(date, 10, true);
    expect(mockProps.monthListRef.current.scrollToDate).toHaveBeenCalledWith(date, 10, true, undefined);
  });
});
