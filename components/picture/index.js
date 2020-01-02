import React from 'react';
import PropTypes from 'prop-types';

const Picture = (props) => {
  const { image: { srcset, placeholder } } = props;
  return (
    <div>
      {srcset && srcset.length && placeholder
        ? <ImageWithSrcSet {...props} />
        : <StandardImage {...props} />}
    </div>
  );
};

const StandardImage = ({ image, imageStyle, className }) => (
  <img alt={image.title} style={imageStyle} className={className} src={image.image} />
);

StandardImage.propTypes = {
  image: PropTypes.shape({
    webp: PropTypes.shape({}),
    placeholder: PropTypes.string,
    title: PropTypes.string,
    srcset: PropTypes.string,
    image: PropTypes.string,
  }),
  className: PropTypes.string,
  imageStyle: PropTypes.shape({}),
};

StandardImage.defaultProps = {
  imageStyle: {},
  image: {},
  className: '',
};

const ImageWithSrcSet = ({
  image,
  className,
  imageStyle,
  thumbnail,
}) => {
  const webp = image.webp
    ? Object.keys(image.webp)
      .map((size) => `${image.webp[size]} ${size}w`)
      .join(', ')
    : null;

  return (
    <picture>
      {!thumbnail && <source srcSet={webp} sizes="100vw" type="image/webp" />}
      <img
        className={className}
        src={image.placeholder}
        alt={image.title}
        srcSet={thumbnail ? image.srcset : ''}
        style={imageStyle}
      />
    </picture>
  );
};

ImageWithSrcSet.propTypes = {
  image: PropTypes.shape({
    webp: PropTypes.shape({}),
    placeholder: PropTypes.string,
    title: PropTypes.string,
    srcset: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  imageStyle: PropTypes.shape({}),
  thumbnail: PropTypes.bool,
};

ImageWithSrcSet.defaultProps = {
  className: '',
  imageStyle: {},
  thumbnail: null,
};

Picture.propTypes = {
  className: PropTypes.string,
  imageStyle: PropTypes.shape(),
  image: PropTypes.shape({
    placeholder: PropTypes.string,
    url: PropTypes.string,
    srcset: PropTypes.string,
    webp: PropTypes.shape(),
    title: PropTypes.string,
  }),
  thumbnail: PropTypes.bool,
};

Picture.defaultProps = {
  imageStyle: {},
  image: {},
  className: '',
  thumbnail: false,
};

export default Picture;
