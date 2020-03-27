import React from 'react';
import PropTypes from 'prop-types';
import styles from './CallToActionButton.module.scss';

const CallToActionButton = (props) => {
/*
TODO: remove all reference to buttonProps once Contentful content model
for post is updated for all stories.
*/
  const { label, externalUrl, buttonProps } = props;

  return (
    <div className={styles.buttonContainer}>
      {!buttonProps
        ? (

          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '0',
              alignSelf: 'center',
            }}
            className={styles.postElementLink}
          >
            {label}
          </a>
        ) : (
          <>
            {/* TODO: remove once Contentful content model for post is updated for all stories. */}
            {
              buttonProps.map(({ fields, sys }) => (
                <a
                  key={sys.id}
                  href={fields.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '0',
                    alignSelf: 'center',
                  }}
                  className={styles.postElementLink}
                >
                  {fields.label}
                </a>
              ))

            }
          </>
        )}
    </div>
  );
};
/* TODO: remove once Contentful content model for post is updated for all stories. */
CallToActionButton.defaultProps = {
  buttonProps: [],
};

CallToActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
  /* TODO: remove once Contentful content model for post is updated for all stories. */
  buttonProps: PropTypes.arrayOf({}),
};

export default CallToActionButton;
