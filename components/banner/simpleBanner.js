import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';

const SimpleBanner = (props) => {
  const {
    copy,
    title,
    titleType,
    button,
    titleStyleClass,
    bannerContentClass,
    bannerWrapperClass,
    paragraphStyleClass,
    bannerContainerClass,
    bannerContentWrapperClass,
  } = props;

  return (
    <div className={bannerContainerClass}>
      <div className={bannerWrapperClass}>
        <div className={bannerContentWrapperClass}>
          <div className={bannerContentClass}>
            {title
            && (
              <Title
                type={titleType}
                className={titleStyleClass}
                theme={process.env.REACT_APP_THEME}
              >
                {title}
              </Title>
            )}
            {copy
            && (
              <Paragraph className={paragraphStyleClass}>{copy}</Paragraph>
            )}
            {button
                && (
                  button
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

SimpleBanner.defaultProps = {
  copy: '',
  title: null || '',
  titleType: '',
  button: null,
  titleStyleClass: null,
  bannerContentClass: '',
  bannerWrapperClass: null,
  paragraphStyleClass: null,
  bannerContainerClass: null,
  bannerContentWrapperClass: null,
};

SimpleBanner.propTypes = {
  copy: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  titleType: PropTypes.string,
  button: PropTypes.node,
  bannerContentClass: PropTypes.shape(PropTypes.object),
  titleStyleClass: PropTypes.shape(PropTypes.object),
  paragraphStyleClass: PropTypes.shape(PropTypes.object),
  bannerWrapperClass: PropTypes.shape(PropTypes.object),
  bannerContainerClass: PropTypes.shape(PropTypes.object),
  bannerContentWrapperClass: PropTypes.shape(PropTypes.object),
};

export default SimpleBanner;
