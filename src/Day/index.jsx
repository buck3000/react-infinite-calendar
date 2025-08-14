import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import styles from './Day.module.scss';

const Day = ({
  className,
  currentYear,
  date,
  day,
  handlers,
  isDisabled,
  isHighlighted,
  isToday,
  isSelected,
  locale: { todayLabel },
  monthShort,
  onClick,
  theme: { selectionColor, todayColor, textColor },
  year,
  selectionStyle,
}) => {
  const handleClick = useCallback(() => {
    if (!isDisabled && typeof onClick === 'function') {
      onClick(parse(date));
    }
  }, [isDisabled, onClick, date]);

  const renderSelection = useCallback(() => {
    return (
      <div
        className={styles.selection}
        data-date={date}
        style={{
          backgroundColor: selectionColor,
          color: textColor.active,
          ...selectionStyle,
        }}
      >
        <span className={styles.month}>
          {isToday ? todayLabel.short || todayLabel.long : monthShort}
        </span>
        <span className={styles.day}>{day}</span>
      </div>
    );
  }, [date, selectionColor, textColor, selectionStyle, isToday, todayLabel, monthShort, day]);

  const color = useMemo(() => {
    if (isSelected) {
      return typeof selectionColor === 'function' ? selectionColor(date) : selectionColor;
    } else if (isToday) {
      return todayColor;
    }
    return null;
  }, [isSelected, selectionColor, date, isToday, todayColor]);

  return (
    <li
      style={color ? { color } : null}
      className={classNames(styles.root, {
        [styles.today]: isToday,
        [styles.highlighted]: isHighlighted,
        [styles.selected]: isSelected,
        [styles.disabled]: isDisabled,
        [styles.enabled]: !isDisabled,
      }, className)}
      onClick={handleClick}
      data-date={date}
      {...handlers}
    >
      {day === 1 && <span className={styles.month}>{monthShort}</span>}
      {isToday ? <span>{day}</span> : day}
      {day === 1 && currentYear !== year && <span className={styles.year}>{year}</span>}
      {isSelected && renderSelection()}
    </li>
  );
};

// Memoize Day component for better performance
export default React.memo(Day, (prevProps, nextProps) => {
  // Only re-render if relevant props change
  return (
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isHighlighted === nextProps.isHighlighted &&
    prevProps.isDisabled === nextProps.isDisabled &&
    prevProps.isToday === nextProps.isToday &&
    prevProps.date === nextProps.date &&
    prevProps.selectionStyle === nextProps.selectionStyle
  );
});
