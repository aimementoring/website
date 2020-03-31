import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './featuredProduct.module.scss';

const FeaturedProduct = ({
  pretitle, title, imageUrl, text, linkUrl, linkText,
}) => (
  <div className={styles.featuredProductContainer}>
    <div className={styles.featuredProductImageContainer}>
      <img
        className={styles.featuredProductImage}
        alt={title}
        src={imageUrl}
      />
    </div>
    <div className={styles.featuredProductText}>
      <Title
        type="h3Title"
        className={styles.featuredProductPreheader}
        theme={process.env.REACT_APP_THEME}
      >
        {pretitle}
      </Title>
      <Title
        type="h1Title"
        className={styles.featuredProductTitle}
        theme={process.env.REACT_APP_THEME}
      >
        {title}

      </Title>
      <Paragraph className={styles.featuredProductText} theme={process.env.REACT_APP_THEME}>
        {text}
      </Paragraph>
      { linkUrl && (
        <Button
          theme={process.env.REACT_APP_THEME}
          aria-label="cta"
          type="link"
          className={styles.featuredProductButton}
          url={linkUrl}
        >
          {linkText}
        </Button>
      )}
    </div>
  </div>
);

FeaturedProduct.defaultProps = {
  pretitle: '',
  text: '',
  linkUrl: '',
  linkText: 'Buy it now',
};

FeaturedProduct.propTypes = {
  pretitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

export default FeaturedProduct;
