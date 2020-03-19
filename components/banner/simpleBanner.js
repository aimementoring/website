import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
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
  console.log('SimpleBanner -> bannerContentWrapperClass', typeof bannerContentWrapperClass);
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
  titleStyleClass: '',
  bannerContentClass: '',
  bannerWrapperClass: '',
  paragraphStyleClass: '',
  bannerContainerClass: '',
  bannerContentWrapperClass: '',
};

SimpleBanner.propTypes = {
  copy: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  titleType: PropTypes.string,
  button: PropTypes.node,
  bannerContentClass: PropTypes.string,
  titleStyleClass: PropTypes.string,
  paragraphStyleClass: PropTypes.string,
  bannerWrapperClass: PropTypes.string,
  bannerContainerClass: PropTypes.string,
  bannerContentWrapperClass: PropTypes.string,
};

export default SimpleBanner;
