import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { getUcFirst } from '../../utils/utilities';
import { BLOG_MATRIX_AVAILABLE_ELEMENTS } from '../../constants';
import styles from './matrixBuilder.module.scss';

const VideoFormElement = dynamic(() => import(/* webpackChunkName 'VideoFormElement' */ '../commonElements/videoFormElement'));
const TextToHtmlConverter = dynamic(() => import(/* webpackChunkName 'TextToHtmlConverter' */ '../commonElements/textToHtmlConverter'));
const Header = dynamic(() => import(/* webpackChunkName 'Header' */ '../commonElements/header'));

class BlogMatrix extends PureComponent {
  getMatrix = () => {
    const availableElements = BLOG_MATRIX_AVAILABLE_ELEMENTS;
    const { formData } = this.props;

    return formData.map((postElement, index) => {
      const key = Object.keys(postElement).join('_');
      return availableElements.indexOf(Object.keys(postElement)[0]) > -1 ? (
        <div key={`${key}-blog-empty-div`}>
          {this[`render${getUcFirst(Object.keys(postElement)[0])}`](postElement, index)}
        </div>
      ) : (
        <div key={`${key}-blog-empty-div`} />
      );
    });
  };

  renderParagraph = (postElement, key) => (
    <TextToHtmlConverter key={`paragraph-${key}`} textToHtml={postElement.paragraph} />
  );

  renderHeading = (postElement, key) => (
    <Header key={`heading-${key}`} headerText={postElement.text} />
  );

  renderBlockquote = (postElement, key) => (
    <div key={`blockquote-${key}`}>
      <p>{postElement.blockquote}</p>
      <span>{postElement.credit}</span>
    </div>
  );

  renderCustomImage = (postElement, key) => (
    <div>
      {postElement.customImage.length ? (
        <figure key={`customImage-${key}`}>
          <img
            className={postElement.limitSize}
            src={postElement.customImage[0].image}
            alt={postElement.caption}
            title={postElement.caption}
          />
          <figcaption>{postElement.caption}</figcaption>
        </figure>
      ) : (
        <div key={`customImage-${key}`} />
      )}
    </div>
  );

  // figure in old website
  renderImage = (postElement, key) => (
    <div>
      {postElement.image.length ? (
        <figure key={`image-${key}`}>
          <div
            style={{ backgroundImage: `url('${postElement.image[0].url}')` }}
            alt={postElement.credit}
          />
          <figcaption>{postElement.caption}</figcaption>
        </figure>
      ) : (
        <div key={`image-${key}`} />
      )}
    </div>
  );

  renderMp4Video = (postElement, index) => (
    <VideoFormElement formElement={postElement} index={index} key={`${index}-video-blog`} />
  );

  renderAuthorName = (postElement, key) => (
    <div key={`author-${key}`}>
      <h3 className={styles.authorName}>{postElement.authorName}</h3>
      <span className={styles.authorTitle}>{postElement.authorTitle}</span>
    </div>
  );

  renderButton = (postElement, key) => {
    let align = 'flex-start';
    if (postElement && postElement.align) {
      switch (postElement.align.value) {
      case 'center':
        align = postElement.align.value;
        break;
      case 'left':
        align = 'flex-start';
        break;
      case 'right':
        align = 'flex-end';
        break;
      default:
        align = 'flex-start';
      }
    }
    return (
      <div className={styles.buttonContainer} key={`button-${key}`}>
        <a
          href={postElement.button}
          className={classNames(
            postElement.backgroundColor && postElement.backgroundColor.value,
            postElement.align,
            styles.postElementLink,
          )}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '0',
            'align-self': align,
          }}
          aria-label={postElement.label}
        >
          {postElement.label}
        </a>
      </div>
    );
  };

  renderIframeHeight = (postElement, key) => (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: postElement.iframeTag }} key={`embed-${key}`} />
  );

  render() {
    return <div>{this.getMatrix()}</div>;
  }
}

BlogMatrix.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default BlogMatrix;
