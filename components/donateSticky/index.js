import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Sticky = ({
  className, enter, exit, children,
}) => {
  const [stickyClass, setStickyClass] = useState('no-sticky');

  useEffect(() => {
    const setInitialHeights = (elements) => {
      [].forEach.call(elements, (sticky) => {
        sticky.setAttribute('data-sticky-initial', sticky.getBoundingClientRect().top);
      });
    };

    const stickies = document.querySelectorAll('[data-sticky]');
    setInitialHeights(stickies);

    document.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;

      [].forEach.call(stickies, (sticky) => {
        const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
        const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;
        let newClass = '';
        if (top >= stickyEnter && top <= stickyExit) {
          newClass = 'sticky';
        } else {
          newClass = top >= stickyExit ? 'no-sticky-bottom' : 'no-sticky';
        }
        setStickyClass(newClass);
      });
    });
  }, []);

  return (
    <div
      className={`iframe-container ${className || ''} ${stickyClass}`}
      data-sticky
      data-sticky-enter={enter}
      data-sticky-exit={exit}
    >
      {children}
    </div>
  );
};

Sticky.propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  children: PropTypes.node,
};

Sticky.defaultProps = {
  className: null,
  enter: null,
  exit: null,
  children: null,
};

export default Sticky;
