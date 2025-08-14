import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import styles from './Header.module.scss';
import animation from './Animation.module.scss';

export default function defaultSelectionRenderer(value, {
  display,
  key,
  locale: { locale },
  dateFormat,
  onYearClick,
  scrollToDate,
  setDisplay,
  shouldAnimate,
}) {
  const date = value instanceof Date ? value : new Date(value);
  const values = date && !isNaN(date.getTime()) && [
    {
      active: display === 'years',
      handleClick: e => {
        onYearClick(date, e, key);
        setDisplay('years');
      },
      item: 'year',
      title: display === 'days' ? `Change year` : null,
      value: date.getFullYear(),
    },
    {
      active: display === 'days',
      handleClick: e => {
        if (display !== 'days') {
          setDisplay('days');
        } else if (date) {
          scrollToDate(date, -40, true);
        }
      },
      item: 'day',
      title: display === 'days'
        ? `Scroll to ${format(date, dateFormat)}`
        : null,
      value: format(date, dateFormat),
    },
  ];

  return (
    <div
      key={key}
      className={styles.wrapper}
      aria-label={format(date, `${dateFormat} yyyy`)}
    >
      {values.map(({ handleClick, item, value, active, title }) => {
        const nodeRef = useRef(null);
        return (
          <div
            key={item}
            className={classNames(styles.dateWrapper, styles[item], {
              [styles.active]: active,
            })}
            title={title}
          >
            <TransitionGroup component={null}>
              <CSSTransition
                key={`${item}-${value}`}
                classNames={animation}
                timeout={250}
                appear={shouldAnimate}
                enter={shouldAnimate}
                exit={shouldAnimate}
                nodeRef={nodeRef}
              >
                <span
                  ref={nodeRef}
                  className={styles.date}
                  aria-hidden={true}
                  onClick={handleClick}
                >
                  {value}
                </span>
              </CSSTransition>
            </TransitionGroup>
          </div>
        );
      })}
    </div>
  );
}
