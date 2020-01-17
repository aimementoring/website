import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const APP_ID = process.env.REACT_APP_INTERCOM_APP_ID;

const IntercomChat = (props) => {
  const { classNames, label } = props;

  const intercomChat = () => {
    (() => {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i = (...args) => {
          i.c(args);
        };
        i.q = [];
        i.c = (args) => {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = () => {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = `https://widget.intercom.io/widget/${APP_ID}`;
          const x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();
    window.Intercom('boot', {
      app_id: APP_ID,
      // change 'hide_default_launcher: false' if you want to show the round chat icon in
      // bottom right of screen then go to line 106 and comment that line.
      hide_default_launcher: true,
      alignment: 'right',
      horizontal_padding: 20,
      vertical_padding: 20,
      background_color: 'rgba(255,255,255, 0.7)',
    });
    // eslint-disable-next-line no-console
  };

  useEffect(() => {
    intercomChat();
  }, []);

  const handleShowIntercom = () => {
    window.Intercom('showNewMessage');
  };

  return (
    <span>
      <button
        type="button"
        aria-label={label}
        className={classNames && classNames}
        onClick={handleShowIntercom}
      >
        {label}
      </button>
    </span>
  );
};

IntercomChat.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.string.isRequired,
};

IntercomChat.defaultProps = {
  label: 'Get in Touch',
};

export default IntercomChat;
