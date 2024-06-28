import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Today.scss';

export const DIRECTION_UP = 1;
export const DIRECTION_DOWN = -1;
const CHEVRON = 'M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z';

const Today = ({ scrollToDate, show, theme, todayLabel }) => {
  const scrollToToday = () => {
    scrollToDate(new Date(), -40, true);
  };

  return (
    <div
      className={classNames(styles.root, {
        [styles.show]: show,
        [styles.chevronUp]: show === DIRECTION_UP,
        [styles.chevronDown]: show === DIRECTION_DOWN,
      })}
      style={{
        backgroundColor: theme.floatingNav.background,
        color: theme.floatingNav.color,
      }}
      onClick={scrollToToday}
    >
      {todayLabel}
      <svg
        className={styles.chevron}
        x="0px"
        y="0px"
        width="14px"
        height="14px"
        viewBox="0 0 512 512"
      >
        <path
          fill={theme.floatingNav.chevron || theme.floatingNav.color}
          d={CHEVRON}
        />
      </svg>
    </div>
  );
};

Today.propTypes = {
  scrollToDate: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  theme: PropTypes.shape({
    floatingNav: PropTypes.shape({
      background: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      chevron: PropTypes.string,
    }).isRequired,
  }).isRequired,
  todayLabel: PropTypes.string.isRequired,
};

export default Today;
