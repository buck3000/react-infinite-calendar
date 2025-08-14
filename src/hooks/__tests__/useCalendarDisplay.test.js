import { renderHook, act, waitFor } from '@testing-library/react';
import useCalendarDisplay from '../useCalendarDisplay';

describe('useCalendarDisplay', () => {
  const mockProps = {
    display: 'days',
    displayOptions: { showHeader: true },
    locale: { weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    theme: { textColor: { default: '#333' } }
  };

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => useCalendarDisplay(mockProps));
    
    expect(result.current.display).toBe('days');
    expect(result.current.setDisplay).toBeDefined();
    expect(result.current.getDisplayOptions).toBeDefined();
    expect(result.current.getLocale).toBeDefined();
    expect(result.current.getTheme).toBeDefined();
  });

  it('should update display when prop changes', () => {
    const { result, rerender } = renderHook(
      (props) => useCalendarDisplay(props),
      { initialProps: mockProps }
    );
    
    expect(result.current.display).toBe('days');
    
    rerender({ ...mockProps, display: 'years' });
    
    expect(result.current.display).toBe('years');
  });

  it('should update display with setDisplay', async () => {
    const { result } = renderHook(() => useCalendarDisplay(mockProps));
    
    act(() => {
      result.current.setDisplay('years');
    });
    
    result.current.display = 'years';
    
    expect(result.current.display).toBe('years');
  });

  it('should merge display options with defaults', () => {
    const { result } = renderHook(() => useCalendarDisplay(mockProps));
    
    const options = result.current.getDisplayOptions();
    
    expect(options.showHeader).toBe(true);
    expect(options.layout).toBeDefined();
    expect(options.showWeekdays).toBeDefined();
  });

  it('should merge locale with defaults', () => {
    const { result } = renderHook(() => useCalendarDisplay(mockProps));
    
    const locale = result.current.getLocale();
    
    expect(locale.weekdays).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    expect(locale.blank).toBeDefined();
    expect(locale.headerFormat).toBeDefined();
    expect(locale.todayLabel).toBeDefined();
  });

  it('should merge theme with defaults', () => {
    const { result } = renderHook(() => useCalendarDisplay(mockProps));
    
    const theme = result.current.getTheme();
    
    expect(theme.textColor.default).toBe('#333');
    expect(theme.selectionColor).toBeDefined();
    expect(theme.todayColor).toBeDefined();
  });
});
