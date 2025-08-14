import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useSimpleVirtualizer } from '../utils/SimpleVirtualizer.jsx';
import classNames from 'classnames';
import {
  emptyFn,
  getMonth,
  getWeek,
  getWeeksInMonth,
  animate,
} from '../utils/index.jsx';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/startOfMonth';
import Month from '../Month/index.jsx';
import styles from './MonthList.module.scss';

const AVERAGE_ROWS_PER_MONTH = 5;

const MonthList = forwardRef(({
  DayComponent,
  disabledDates,
  disabledDays,
  height,
  isScrolling,
  locale,
  maxDate,
  min,
  minDate,
  months,
  onDaySelect,
  onScroll,
  overscanMonthCount,
  passThrough = {},
  rowHeight,
  scrollDate,
  selectedDate,
  showOverlay,
  theme,
  today,
  width,
}, ref) => {
  const getDateOffset = useCallback((date) => {
    if (!date || !min || !locale) return 0;
    const { weekStartsOn } = locale;
    const weeks = getWeek(startOfMonth(min), parse(date), weekStartsOn);
    return weeks * rowHeight - (height - rowHeight / 2) / 2;
  }, [min, rowHeight, locale, height]);
  
  const [scrollTop, setScrollTop] = useState(() => getDateOffset(scrollDate));
  const cache = useRef({});
  const monthHeights = useRef([]);
  const scrollElRef = useRef(null);

  const memoize = useCallback((param) => {
    if (!cache.current[param]) {
      const { weekStartsOn } = locale;
      const [year, month] = param.split(':');
      const result = getMonth(year, month, weekStartsOn);
      cache.current[param] = result;
    }
    return cache.current[param];
  }, [locale]);

  useEffect(() => {
    setScrollTop(getDateOffset(scrollDate));
  }, [scrollDate, getDateOffset]);

  const scrollToDate = useCallback((date, offset = 0, ...rest) => {
    const offsetTop = getDateOffset(date);
    scrollTo(offsetTop + offset, ...rest);
  }, [getDateOffset]);

  const scrollTo = useCallback((scrollTop = 0, shouldAnimate = false, onScrollEnd = emptyFn) => {
    const onComplete = () => {
      if (typeof globalThis !== 'undefined') {
        globalThis.setTimeout(() => {
          if (scrollElRef.current) {
            scrollElRef.current.style.overflowY = 'auto';
          }
          onScrollEnd();
        }, 0);
      }
    };

    if (scrollElRef.current) {
      scrollElRef.current.style.overflowY = 'hidden';
    }

    if (shouldAnimate) {
      animate({
        fromValue: scrollElRef.current?.scrollTop || 0,
        toValue: scrollTop,
        onUpdate: (scrollTop, callback) => {
          if (scrollElRef.current) {
            scrollElRef.current.scrollTop = scrollTop;
          }
          setScrollTop(scrollTop);
          if (callback) callback();
        },
        onComplete,
      });
    } else {
      if (typeof globalThis !== 'undefined' && globalThis.requestAnimationFrame) {
        globalThis.requestAnimationFrame(() => {
          if (scrollElRef.current) {
            scrollElRef.current.scrollTop = scrollTop;
          }
          onComplete();
        });
      } else {
        if (scrollElRef.current) {
          scrollElRef.current.scrollTop = scrollTop;
        }
        onComplete();
      }
    }
  }, []);


  const virtualizer = useSimpleVirtualizer({
    count: months.length,
    getScrollElement: () => scrollElRef.current,
    estimateSize: () => rowHeight * AVERAGE_ROWS_PER_MONTH,
    getItemKey: (index) => `${months[index].year}:${months[index].month}`,
    overscan: overscanMonthCount || 2,
  });

  const renderMonth = useCallback((virtualItem) => {
    const { index } = virtualItem;
    const { month, year } = months[index];
    const key = `${year}:${month}`;
    const { date, rows } = memoize(key);

    return (
      <div
        key={key}
        data-index={index}
        ref={virtualItem.measureElement}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${virtualItem.start}px)`,
        }}
      >
        <Month
          selected={selectedDate}
          DayComponent={DayComponent}
          monthDate={date}
          disabledDates={disabledDates}
          disabledDays={disabledDays}
          maxDate={maxDate}
          minDate={minDate}
          rows={rows}
          rowHeight={rowHeight}
          isScrolling={false}
          showOverlay={showOverlay}
          today={today}
          theme={theme}
          locale={locale}
          passThrough={passThrough}
          {...passThrough.Month}
        />
      </div>
    );
  }, [memoize, months, selectedDate, disabledDates, disabledDays, maxDate, minDate, rowHeight, showOverlay, today, theme, locale, passThrough]);

  const handleScroll = useCallback((e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollTop(scrollTop);
    if (onScroll) {
      onScroll(scrollTop, e);
    }
  }, [onScroll]);

  // Expose methods to parent component through ref
  React.useImperativeHandle(ref, () => ({
    getScrollElement: () => scrollElRef.current,
    scrollToDate,
    scrollTo,
  }), [scrollToDate, scrollTo]);

  return (
    <div
      data-testid="calendar-month-list"
      ref={scrollElRef}
      className={classNames(styles.root, { [styles.scrolling]: isScrolling })}
      style={{
        height,
        width,
        overflow: 'auto',
        lineHeight: `${rowHeight}px`,
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
        {virtualizer.getVirtualItems().map((item) => renderMonth(item))}
      </div>
    </div>
  );
});

MonthList.propTypes = {
  disabledDates: PropTypes.arrayOf(PropTypes.string),
  disabledDays: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.number.isRequired,
  isScrolling: PropTypes.bool,
  locale: PropTypes.object.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date),
  months: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDaySelect: PropTypes.func,
  onScroll: PropTypes.func,
  overscanMonthCount: PropTypes.number,
  rowHeight: PropTypes.number.isRequired,
  scrollDate: PropTypes.instanceOf(Date), // Made optional to fix PropTypes warning
  selectedDate: PropTypes.instanceOf(Date),
  showOverlay: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

MonthList.displayName = 'MonthList';

export default MonthList;
