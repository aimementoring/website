import React from 'react';
import PropTypes from 'prop-types';
import Title from 'aime-blueprint/lib/components/title';
import Button from 'aime-blueprint/lib/components/button';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './banner.module.scss';

const StoryBanner = (props) => {
  const {
    copy,
    title,
    buttonText,
    handleClick,
    bannerImage,
  } = props;

  const imageBanner = bannerImage && {
    backgroundImage: `url(https:${bannerImage})`,
  };

  return (
    <div>
      <div className={styles.heroBannerStories} style={imageBanner}>
        <div className={styles.featuredStory}>
          <div className={styles.textWrap}>
            {title && <Title type="h3Title">{title}</Title>}
            {copy && <Paragraph>{copy}</Paragraph>}
            {handleClick && (
              <Button onClickFunction={handleClick} theme={process.env.REACT_APP_THEME}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StoryBanner.defaultProps = {
  copy: [] || '',
  title: '',
  bannerImage: '',
  handleClick: null,
  buttonText: 'Click me!',
};

StoryBanner.propTypes = {
  copy: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  title: PropTypes.string,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  bannerImage: PropTypes.string,
};

export default StoryBanner;
