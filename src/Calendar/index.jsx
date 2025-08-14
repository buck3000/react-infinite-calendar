import React, { useState, useEffect, useRef, useCallback, useId, useDeferredValue } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce, emptyFn, range } from '../utils/index.jsx';
import Today, { DIRECTION_UP, DIRECTION_DOWN } from '../Today/index.jsx';
import Header from '../Header/index.jsx';
import MonthList from '../MonthList/index.jsx';
import Weekdays from '../Weekdays/index.jsx';
import YearsComponent from '../Years/YearsComponent.jsx';
import Day from '../Day/index.jsx';
import startOfDay from 'date-fns/startOfDay';

import useCalendarControls from '../hooks/useCalendarControls.jsx';
import useCalendarMonths from '../hooks/useCalendarMonths.jsx';
import useCalendarDisplay from '../hooks/useCalendarDisplay.jsx';

import containerStyles from './Container.module.scss';
import dayStyles from '../Day/Day.module.scss';

const styles = {
  container: containerStyles,
  day: dayStyles,
};

const defaultCalendarProps = {
  autoFocus: true,
  DayComponent: Day,
  display: 'days',
  displayOptions: {},
  HeaderComponent: Header,
  height: 500,
  keyboardSupport: true,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: emptyFn,
  onScroll: emptyFn,
  onScrollEnd: emptyFn,
  onSelect: emptyFn,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent,
};

/**
 * Calendar component - renders an infinite scrolling calendar
 * Converted from class component to functional component with hooks
 * Uses custom hooks for better organization and reusability
 */
const Calendar = (userProps) => {
  const props = { ...defaultCalendarProps, ...userProps };
  const calendarId = useId();
  const node = useRef(null);
  const monthListRef = useRef(null);
  const yearsRef = useRef(null);
  const todayOffset = useRef(null);
  const today = useRef(startOfDay(new Date()));
  
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Use deferred value for better performance during scrolling
  const deferredScrolling = useDeferredValue(isScrolling);
  const [showToday, setShowToday] = useState(false);
  
  const { display, setDisplayMode, getDisplayOptions, getLocale, getTheme } = useCalendarDisplay({
    display: props.display,
    displayOptions: props.displayOptions,
    locale: props.locale,
    theme: props.theme
  });
  
  const { months, minDate, maxDate, min, max, updateMonths, getYearsRange } = useCalendarMonths({
    min: props.min,
    max: props.max,
    minDate: props.minDate,
    maxDate: props.maxDate
  });
  
  const { 
    scrollTop, 
    scrollSpeed, 
    getScrollSpeed, 
    getDateOffset, 
    scrollTo, 
    scrollToDate: scrollToDateBase, 
    getDisabledDates,
    updateScrollPosition 
  } = useCalendarControls({
    min: props.min,
    max: props.max,
    minDate: props.minDate,
    maxDate: props.maxDate,
    monthListRef
  });
  
  useEffect(() => {
    updateMonths();
    
    if (props.autoFocus && node.current) {
      node.current.focus();
    }
  }, [updateMonths, props.autoFocus]);
  
  const scrollToDate = useCallback((date = new Date(), offset, shouldAnimate) => {
    return scrollToDateBase(
      date,
      offset,
      shouldAnimate && props.display === 'days',
      () => setIsScrolling(false)
    );
  }, [props.display, scrollToDateBase]);

  const handleScrollEnd = useCallback(debounce(() => {
    const { onScrollEnd } = props;
    const { showTodayHelper } = getDisplayOptions();

    if (isScrolling) {
      setIsScrolling(false);
    }

    if (showTodayHelper) {
      updateTodayHelperPosition(0);
    }

    onScrollEnd(scrollTop.current);
  }, 150), [props.onScrollEnd, isScrolling, getDisplayOptions]);

  const updateTodayHelperPosition = useCallback((speed) => {
    const currentScrollTop = scrollTop.current;
    const { height, rowHeight } = props;
    const { todayHelperRowOffset } = getDisplayOptions();
    let newState;

    if (!todayOffset.current) {
      todayOffset.current = getDateOffset(today.current);
    }

    if (currentScrollTop >= todayOffset.current + (height - rowHeight) / 2 + rowHeight * todayHelperRowOffset) {
      if (showToday !== DIRECTION_UP) newState = DIRECTION_UP;
    } else if (currentScrollTop <= todayOffset.current - height / 2 - rowHeight * (todayHelperRowOffset + 1)) {
      if (showToday !== DIRECTION_DOWN) newState = DIRECTION_DOWN;
    } else if (showToday && speed <= 1) {
      newState = false;
    }

    if (currentScrollTop === 0) {
      newState = false;
    }

    if (newState != null) {
      setShowToday(newState);
    }
  }, [props.height, props.rowHeight, getDisplayOptions, getDateOffset, showToday]);

  const handleScroll = useCallback((scrollTopValue, e) => {
    const { onScroll, rowHeight } = props;
    const { showTodayHelper, showOverlay } = getDisplayOptions();
    const speed = Math.abs(getScrollSpeed(scrollTopValue));
    
    updateScrollPosition(scrollTopValue, speed);

    if (showOverlay && speed > rowHeight && !isScrolling) {
      setIsScrolling(true);
    }

    if (showTodayHelper) {
      updateTodayHelperPosition(speed);
    }

    onScroll(scrollTopValue, e);
    handleScrollEnd();
  }, [props.onScroll, props.rowHeight, getDisplayOptions, isScrolling, updateTodayHelperPosition, handleScrollEnd, updateScrollPosition, getScrollSpeed]);

  const setDisplay = useCallback((newDisplay) => {
    setDisplayMode(newDisplay);
  }, [setDisplayMode]);

  const {
    className,
    passThrough,
    DayComponent,
    disabledDays,
    displayDate,
    height,
    HeaderComponent,
    rowHeight,
    scrollDate,
    selected,
    tabIndex,
    width,
    YearsComponent,
  } = props;
  
  const {
    hideYearsOnSelect,
    layout,
    overscanMonthCount,
    shouldHeaderAnimate,
    showHeader,
    showMonthsForYears,
    showOverlay,
    showTodayHelper,
    showWeekdays,
  } = getDisplayOptions();
  
  const disabledDates = getDisabledDates(props.disabledDates);
  const locale = getLocale();
  const theme = getTheme();
  
  today.current = startOfDay(new Date());

  return (
    <div
      tabIndex={tabIndex}
      className={classNames(className, styles.container.root, {
        [styles.container.landscape]: layout === 'landscape',
      })}
      style={{ color: theme.textColor.default, width }}
      role="application"
      aria-label="Interactive Calendar"
      aria-describedby={`${calendarId}-description`}
      ref={node}
      {...(passThrough && passThrough.rootNode ? passThrough.rootNode : {})}
    >
      <div id={`${calendarId}-description`} className="sr-only">
        Use arrow keys to navigate dates, Enter to select, Escape to close year view
      </div>
      {showHeader &&
        <HeaderComponent
          selected={selected}
          shouldAnimate={Boolean(shouldHeaderAnimate && display !== 'years')}
          layout={layout}
          theme={theme}
          locale={locale}
          scrollToDate={scrollToDate}
          setDisplay={setDisplay}
          dateFormat={locale.headerFormat}
          display={display}
          displayDate={displayDate}
          {...(passThrough && passThrough.Header ? passThrough.Header : {})}
        />
      }
      <div className={styles.container.wrapper}>
        {showWeekdays &&
          <Weekdays weekdays={locale.weekdays} weekStartsOn={locale.weekStartsOn} theme={theme} />
        }
        <div className={styles.container.listWrapper}>
          {showTodayHelper &&
            <Today
              scrollToDate={scrollToDate}
              show={showToday}
              today={today.current}
              theme={theme}
              todayLabel={locale.todayLabel.long}
            />
          }
          <MonthList
            ref={monthListRef}
            DayComponent={DayComponent}
            disabledDates={disabledDates}
            disabledDays={disabledDays}
            height={height}
            isScrolling={deferredScrolling}
            locale={locale}
            maxDate={maxDate && maxDate.current ? maxDate.current : props.maxDate}
            min={min && min.current ? min.current : props.min}
            minDate={minDate && minDate.current ? minDate.current : props.minDate}
            months={months && months.current ? months.current : []}
            onScroll={handleScroll}
            overscanMonthCount={overscanMonthCount}
            passThrough={passThrough}
            theme={theme}
            today={today.current}
            rowHeight={rowHeight}
            selected={selected}
            scrollDate={scrollDate}
            showOverlay={showOverlay}
            width={width}
          />
        </div>
        {display === 'years' &&
          <YearsComponent
            ref={yearsRef}
            height={height}
            hideOnSelect={hideYearsOnSelect}
            locale={locale}
            max={max && max.current ? max.current : props.max}
            maxDate={maxDate && maxDate.current ? maxDate.current : props.maxDate}
            min={min && min.current ? min.current : props.min}
            minDate={minDate && minDate.current ? minDate.current : props.minDate}
            scrollToDate={scrollToDate}
            selected={selected}
            setDisplay={setDisplay}
            showMonths={showMonthsForYears}
            theme={theme}
            today={today.current}
            width={width}
            years={min && min.current && max && max.current ? 
              range(min.current.getFullYear(), max.current.getFullYear() + 1) : 
              range(props.min.getFullYear(), props.max.getFullYear() + 1)}
            {...(passThrough && passThrough.Years ? passThrough.Years : {})}
          />
        }
      </div>
    </div>
  );
};

Calendar.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  DayComponent: PropTypes.func,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  disabledDays: PropTypes.arrayOf(PropTypes.number),
  display: PropTypes.oneOf(['years', 'days']),
  displayOptions: PropTypes.shape({
    hideYearsOnSelect: PropTypes.bool,
    layout: PropTypes.oneOf(['portrait', 'landscape']),
    overscanMonthCount: PropTypes.number,
    shouldHeaderAnimate: PropTypes.bool,
    showHeader: PropTypes.bool,
    showMonthsForYears: PropTypes.bool,
    showOverlay: PropTypes.bool,
    showTodayHelper: PropTypes.bool,
    showWeekdays: PropTypes.bool,
    todayHelperRowOffset: PropTypes.number,
  }),
  height: PropTypes.number,
  keyboardSupport: PropTypes.bool,
  locale: PropTypes.shape({
    blank: PropTypes.string,
    headerFormat: PropTypes.string,
    todayLabel: PropTypes.shape({
      long: PropTypes.string,
      short: PropTypes.string,
    }),
    weekdays: PropTypes.arrayOf(PropTypes.string),
    weekStartsOn: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  }),
  max: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onScroll: PropTypes.func,
  onScrollEnd: PropTypes.func,
  onSelect: PropTypes.func,
  rowHeight: PropTypes.number,
  tabIndex: PropTypes.number,
  theme: PropTypes.shape({
    floatingNav: PropTypes.shape({
      background: PropTypes.string,
      chevron: PropTypes.string,
      color: PropTypes.string,
    }),
    headerColor: PropTypes.string,
    selectionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    textColor: PropTypes.shape({
      active: PropTypes.string,
      default: PropTypes.string,
    }),
    todayColor: PropTypes.string,
    weekdayColor: PropTypes.string,
  }),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  YearsComponent: PropTypes.func,
};

export const withDefaultProps = (Component) => {
  return (props) => <Component {...defaultCalendarProps} {...props} />;
};

export default Calendar;
