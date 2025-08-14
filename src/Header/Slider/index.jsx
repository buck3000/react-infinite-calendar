import React, { useCallback, Children, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import styles from './Slider.module.scss';
import transition from './transition.module.scss';

const DIRECTIONS = {
  LEFT: 0,
  RIGHT: 1,
};

const Arrow = ({ direction, onClick }) => (
  <div
    className={classNames(styles.arrow, {
      [styles.arrowLeft]: direction === DIRECTIONS.LEFT,
      [styles.arrowRight]: direction === DIRECTIONS.RIGHT,
    })}
    onClick={() => onClick(direction)}
  >
    <svg x="0px" y="0px" viewBox="0 0 26 46">
      <path d="M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z" id="Shape" fill="#FFF" transform="translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) "></path>
    </svg>
  </div>
);

const Slider = ({ children, index, onChange }) => {
  const handleClick = useCallback((direction) => {
    let newIndex = index;

    switch (direction) {
      case DIRECTIONS.LEFT:
        newIndex = Math.max(0, index - 1);
        break;
      case DIRECTIONS.RIGHT:
        newIndex = Math.min(index + 1, children.length - 1);
        break;
      default:
        return;
    }

    onChange(newIndex);
  }, [index, children.length, onChange]);

  return (
    <div className={styles.root}>
      {index !== 0 && <Arrow onClick={handleClick} direction={DIRECTIONS.LEFT} />}
      <div className={styles.wrapper} style={{ transform: `translate3d(-${100 * index}%, 0, 0)` }}>
        <TransitionGroup component={null}>
          {React.Children.map(children, (child, i) => {
            const nodeRef = useRef(null);
            return (
              <CSSTransition
                key={i}
                classNames={transition}
                timeout={300}
                nodeRef={nodeRef}
              >
                <div ref={nodeRef} className={styles.slide} style={{ transform: `translateX(${100 * i}%)` }}>
                  {child}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
      {index !== children.length - 1 && <Arrow onClick={handleClick} direction={DIRECTIONS.RIGHT} />}
    </div>
  );
};

export default Slider;
