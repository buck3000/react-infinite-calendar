/**
 * Simple React 18/19 compatible virtual scrolling implementation
 * Replaces @tanstack/react-virtual with a lighter, more compatible solution
 */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * A simple virtualizer that doesn't depend on React Scheduler APIs
 */
export function useSimpleVirtualizer({
  count,
  getScrollElement,
  estimateSize,
  overscan = 2,
  getItemKey,
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const scrollElementRef = useRef(null);
  const measurementCacheRef = useRef(new Map());
  
  // Update scroll element reference
  useEffect(() => {
    scrollElementRef.current = getScrollElement?.();
  }, [getScrollElement]);
  
  // Handle scroll events
  const handleScroll = useCallback((e) => {
    const newScrollTop = e.target.scrollTop;
    setScrollTop(newScrollTop);
  }, []);
  
  // Set up scroll listener and resize observer
  useEffect(() => {
    const scrollEl = scrollElementRef.current;
    if (!scrollEl) return;
    
    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simple resize observer alternative
    const updateSize = () => {
      setContainerHeight(scrollEl.clientHeight);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => {
      scrollEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSize);
    };
  }, [handleScroll]);
  
  // Calculate visible range
  const visibleRange = useMemo(() => {
    if (count === 0 || containerHeight === 0) {
      return { startIndex: 0, endIndex: 0, visibleItems: [] };
    }
    
    const itemHeight = estimateSize?.() || 50;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      count - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    
    const visibleItems = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const top = i * itemHeight;
      visibleItems.push({
        index: i,
        start: top,
        size: itemHeight,
        end: top + itemHeight,
        key: getItemKey?.(i) || i,
      });
    }
    
    return { startIndex, endIndex, visibleItems };
  }, [count, containerHeight, scrollTop, estimateSize, overscan, getItemKey]);
  
  // Calculate total size
  const totalSize = useMemo(() => {
    const itemHeight = estimateSize?.() || 50;
    return count * itemHeight;
  }, [count, estimateSize]);
  
  // Measure element function (simplified)
  const measureElement = useCallback((element) => {
    if (!element) return;
    
    // Simple measurement - in a full implementation you'd track actual sizes
    const index = parseInt(element.getAttribute('data-index') || '0', 10);
    if (!measurementCacheRef.current.has(index)) {
      measurementCacheRef.current.set(index, element.offsetHeight);
    }
  }, []);
  
  return {
    getVirtualItems: () => visibleRange.visibleItems,
    getTotalSize: () => totalSize,
    measureElement,
    scrollToIndex: (index) => {
      const scrollEl = scrollElementRef.current;
      if (!scrollEl) return;
      
      const itemHeight = estimateSize?.() || 50;
      const targetScrollTop = index * itemHeight;
      scrollEl.scrollTop = targetScrollTop;
    },
    scrollToOffset: (offset) => {
      const scrollEl = scrollElementRef.current;
      if (!scrollEl) return;
      scrollEl.scrollTop = offset;
    },
  };
}

/**
 * Simple virtual list component
 */
export const SimpleVirtualList = React.forwardRef(({
  count,
  estimateSize,
  renderItem,
  height,
  width,
  overscan = 2,
  getItemKey,
  className,
  style,
  onScroll,
}, ref) => {
  const scrollElRef = useRef(null);
  
  const virtualizer = useSimpleVirtualizer({
    count,
    getScrollElement: () => scrollElRef.current,
    estimateSize,
    overscan,
    getItemKey,
  });
  
  const handleScroll = useCallback((e) => {
    onScroll?.(e);
  }, [onScroll]);
  
  // Expose imperative API
  React.useImperativeHandle(ref, () => ({
    scrollToIndex: virtualizer.scrollToIndex,
    scrollToOffset: virtualizer.scrollToOffset,
    getScrollElement: () => scrollElRef.current,
  }), [virtualizer.scrollToIndex, virtualizer.scrollToOffset]);
  
  return (
    <div
      ref={scrollElRef}
      className={className}
      style={{
        height,
        width,
        overflow: 'auto',
        ...style,
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem, index) =>
          renderItem({
            ...virtualItem,
            measureElement: virtualizer.measureElement,
          }, index)
        )}
      </div>
    </div>
  );
});

SimpleVirtualList.displayName = 'SimpleVirtualList';

export default useSimpleVirtualizer;