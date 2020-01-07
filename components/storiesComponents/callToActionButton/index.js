import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './CallToActionButton.module.scss';

const CallToActionButton = (props) => {
  const { buttonProps } = props;

  return (
    <div className={styles.buttonContainer}>
      {buttonProps.map((link) => {
        const { label, externalUrl } = link.fields;
        return (
          <a
            key={link.sys.id}
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '0',
              alignSelf: 'center',
            }}
            className={styles.postElementLink}
          >
            <ReactMarkdown>
              {label}
            </ReactMarkdown>
          </a>
        );
      })}
    </div>
  );
};

CallToActionButton.propTypes = {
  buttonProps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      externalUrl: PropTypes.string,
    }),
  ),
};

CallToActionButton.defaultProps = {
  buttonProps: PropTypes.arrayOf(
    PropTypes.shape({
      label: '',
      externalUrl: '',
    }),
  ),
};

export default CallToActionButton;
