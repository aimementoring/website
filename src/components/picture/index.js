import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Picture extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    imageStyle: PropTypes.shape(),
    image: PropTypes.shape({
      placeholder: PropTypes.string,
      url: PropTypes.string,
      srcset: PropTypes.string,
      webp: PropTypes.array,
      title: PropTypes.string,
    }),
    thumbnail: PropTypes.bool,
  }

  static defaultProps = {
    imageStyle: {},
    image: {},
    className: '',
    thumbnail: false,
  }

  renderPictureWithSrcSet = () => {
    const { image, className, imageStyle, thumbnail } = this.props;
    const webp = image.webp
      ? Object.keys(image.webp).map(size => `${image.webp[size]} ${size}w`).join(', ')
      : null;
    
    return (
      <picture>
        {!thumbnail &&
          <source
            srcSet={webp}
            sizes="100vw"
            type="image/webp"
          />
        }
        <img
          className={className}
          src={image.placeholder}
          alt={image.title}
          srcSet={thumbnail ? image.srcset : ''}
          style={imageStyle}
        />
      </picture>
    );
  }

  renderImage = () => {
    const { image, className, imageStyle } = this.props;
    return (
      <img
        alt={image.title}
        style={imageStyle}
        className={className}
        src={image.image}
      />
    );
  }

  render() {
    const { image } = this.props;

    return (
      <div>
        {image.srcset && image.srcset.length && image.placeholder
          ? this.renderPictureWithSrcSet()
          : this.renderImage()
        }
      </div>
    );
  }
}
