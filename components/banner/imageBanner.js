import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';

const ImageBanner = (props) => {
  const {
    copy,
    title,
    titleType,
    imageClass,
    imageAlt,
    imageStyle,
    imageSrc,
    titleStyleClass,
    bannerWrapperClass,
    paragraphStyleClass,
    bannerContainerClass,
    bannerContentWrapperClass,
  } = props;

  return (
    <div className={bannerContainerClass}>
      <div className={bannerWrapperClass}>
        <div className={bannerContentWrapperClass}>
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
          <img alt={imageAlt} className={imageClass} style={imageStyle} src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

ImageBanner.defaultProps = {
  copy: '',
  title: null || '',
  titleType: '',
  imageClass: '',
  imageAlt: '',
  imageStyle: null,
  imageSrc: '',
  titleStyleClass: '',
  bannerWrapperClass: '',
  paragraphStyleClass: '',
  bannerContainerClass: '',
  bannerContentWrapperClass: '',
};

ImageBanner.propTypes = {
  copy: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  titleType: PropTypes.string,
  imageClass: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.shape({}),
  imageSrc: PropTypes.string,
  titleStyleClass: PropTypes.string,
  paragraphStyleClass: PropTypes.string,
  bannerWrapperClass: PropTypes.string,
  bannerContainerClass: PropTypes.string,
  bannerContentWrapperClass: PropTypes.string,
};

export default ImageBanner;
