import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';

const SimpleBanner = (props) => {
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

SimpleBanner.defaultProps = {
  copy: '',
  title: null,
  titleType: '',
  bannerImage: '',
  imageClass: null,
  imageAlt: '',
  imageStyle: null,
  imageSrc: '',
  titleStyleClass: null,
  bannerWrapperClass: null,
  paragraphStyleClass: null,
  bannerContainerClass: null,
  bannerContentWrapperClass: null,
};

SimpleBanner.propTypes = {
  copy: PropTypes.string,
  title: PropTypes.node,
  titleType: PropTypes.string,
  bannerImage: PropTypes.string,
  imageClass: PropTypes.shape(PropTypes.object),
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.shape(PropTypes.object),
  imageSrc: PropTypes.string,
  titleStyleClass: PropTypes.shape(PropTypes.object),
  paragraphStyleClass: PropTypes.shape(PropTypes.object),
  bannerWrapperClass: PropTypes.shape(PropTypes.object),
  bannerContainerClass: PropTypes.shape(PropTypes.object),
  bannerContentWrapperClass: PropTypes.shape(PropTypes.object),
};

export default SimpleBanner;
