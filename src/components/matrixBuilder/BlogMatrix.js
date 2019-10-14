import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUcFirst } from '../../utils/utilities';
import { BLOG_MATRIX_AVAILABLE_ELEMENTS } from '../../constants';
import VideoFormElement from '../commonElements/VideoFormElement';
import TextToHtmlConverter from '../commonElements/TextToHtmlConverter';
import Header from '../commonElements/Header';

export default class BlogMatrix extends PureComponent {
  static propTypes = {
    formData: PropTypes.array.isRequired,
  };

  getMatrix = () => {
    const availableElements = BLOG_MATRIX_AVAILABLE_ELEMENTS;

    return this.props.formData.map((postElement, index) => {
      return availableElements.indexOf(Object.keys(postElement)[0]) > -1
        ? <div key={`${index}-blog-empty-div`}>{this[`render${getUcFirst(Object.keys(postElement)[0])}`](postElement, index)}</div>
        : <div key={`${index}-blog-empty-div`} />;
    });
  }

  renderParagraph = (postElement, key) => (
    <TextToHtmlConverter
      key={`paragraph-${key}`}
      textToHtml={postElement.paragraph} />
  )

  renderHeading = (postElement, key) => (
    <Header key={`heading-${key}`} headerText={postElement.text} />
  )

  renderBlockquote = (postElement, key) => (
    <div key={`blockquote-${key}`}>
      <p>
        {postElement.blockquote}
      </p>
      <span>
        {postElement.credit}
      </span>
    </div>
  );

  renderCustomImage = (postElement, key) => {
    return (
      <div>
        {postElement.customImage.length
          ? (
            <figure key={`customImage-${key}`}>
              <img
                className={postElement.limitSize}
                src={postElement.customImage[0].image}
                alt={postElement.caption}
                title={postElement.caption}
              />
              <figcaption>
                {postElement.caption}
              </figcaption>
            </figure>
          )
          : (<div key={`customImage-${key}`} />)}
      </div>
    )
  }

  // figure in old website
  renderImage = (postElement, key) => {
    return (
      <div>
        {postElement.image.length
          ? (
            <figure key={`image-${key}`}>
              <div
                style={{ backgroundImage: `url('${postElement.image[0].url}')` }}
                alt={postElement.credit} />
              <figcaption>{postElement.caption}</figcaption>
            </figure>
          )
          : (<div key={`image-${key}`} />)}
      </div>)
  }

  // video in old website
  renderMp4Video = (postElement, index) => (
    <VideoFormElement formElement={postElement} index={index} key={`${index}-video-blog`} />
  )

  renderAuthorName = (postElement, key) => (
    <div key={`author-${key}`}>
      <h3 className="signature-font-family f-24">
        {postElement.authorName}
      </h3>
      <span className="f-14">
        {postElement.authorTitle}
      </span>
    </div>
  );

  renderButton = (postElement, key) => {
    let align = 'flex-start';
    if (postElement && postElement.align) {
      switch (postElement.align.value) {
        case 'center':
          align = postElement.align.value
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
      <div className="w100 clearfix my3 flex flex-column" key={`button-${key}`}>
        <a
          href={postElement.button}
          className={`${postElement.backgroundColor && postElement.backgroundColor.value} ${postElement.align} c-white basic-btn bold my2`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '0',
            'align-self': align,
          }}
        >
          {postElement.label}
        </a>
      </div>
    );
  }

  /* eslint-disable react/no-danger */
  renderIframeHeight = (postElement, key) => (
    <div dangerouslySetInnerHTML={{ __html: postElement.iframeTag }} key={`embed-${key}`} />
  );

  /* eslint-enable react/no-danger */

  render() {
    return (
      <div>
        {this.getMatrix()}
      </div>
    );
  }
}
