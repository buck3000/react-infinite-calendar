import React from 'react';
import PropTypes from 'prop-types';
import { emptyFn } from '../utils/index.jsx';
import defaultSelectionRenderer from './defaultSelectionRenderer.jsx';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = ({
  dateFormat,
  display,
  layout,
  locale,
  onYearClick = emptyFn,
  selected,
  shouldAnimate,
  theme,
  renderSelection = defaultSelectionRenderer,
}) => {
  return (
    <div
      data-testid="calendar-header"
      className={classNames(styles.root, {
        [styles.landscape]: layout === 'landscape',
      })}
      style={{
        backgroundColor: theme.headerColor,
        color: theme.textColor.active,
      }}
    >
      {
        selected ? renderSelection(selected, {
          dateFormat,
          display,
          key: 'selection',
          locale,
          onYearClick,
          scrollToDate: emptyFn,
          setDisplay: emptyFn,
          shouldAnimate,
        }) : (
          <div className={classNames(styles.wrapper, styles.blank)}>
            {locale.blank}
          </div>
        )
      }
    </div>
  );
};


Header.propTypes = {
  dateFormat: PropTypes.string,
  display: PropTypes.string,
  layout: PropTypes.string,
  locale: PropTypes.object,
  onYearClick: PropTypes.func,
  selected: PropTypes.any,
  shouldAnimate: PropTypes.bool,
  theme: PropTypes.object,
};

export default Header;
