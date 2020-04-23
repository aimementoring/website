import React from 'react';
import PropTypes from 'prop-types';

const SIZES = [
  { name: 'mobile', width: 640, suffix: '-sm' },
  { name: 'tablet', width: 768, suffix: '-md' },
  { name: 'small-laptop', width: 1080, suffix: '-lg' },
  { name: 'widescreen', width: 1440, suffix: '-xl' },
];

const Picture = ({
  src,
  title,
  className,
  imageStyle,
}) => {
  const folderPath = src.replace(/\.[^/.]+$/, '');
  const [imageName, extension] = src.substr(src.lastIndexOf('/') + 1).split('.');
  const webp = SIZES.map((size) => `${folderPath}/${imageName}${extension}${size.suffix}.webp ${size.width}w`).join(', ');
  const srcSet = SIZES.map((size) => `${folderPath}/${imageName}${extension}${size.suffix}.${extension} ${size.width}w`).join(', ');
  const placeholder = `${folderPath}/${imageName}${extension}-pl.${extension}`;

  return (
    <>
      <h1>Testing Picture</h1>
      <picture>
        <source srcSet={webp} sizes="100vw" type="image/webp" />
        <img
          className={className}
          src={placeholder}
          alt={title}
          srcSet={srcSet}
          style={imageStyle}
        />
      </picture>
    </>
  );
};

Picture.propTypes = {
  className: PropTypes.string,
  imageStyle: PropTypes.shape(),
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Picture.defaultProps = {
  imageStyle: {},
  title: null,
  className: '',
};

export default Picture;
