import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from '../common/link';
import { getUcFirst } from '../../utils/utilities';
import { GENERAL_MATRIX_AVAILABLE_ELEMENTS } from '../../constants';

class GeneralMatrix extends PureComponent {
  /* eslint-disable react/no-danger */
  renderParagraph = (formElement) => (
    <div
      dangerouslySetInnerHTML={{ __html: formElement.content.paragraph }}
      key={formElement.name}
    />
  );
  /* eslint-enable react/no-danger */

  renderHeadingOne = (formElement) => {
    const block = formElement.content;
    return (
      <div className="wrap-md mb0 md-mb3 lg-mb3 clearfix" key={formElement.name}>
        {block.line === 'above' && <span className="line above" />}
        <h1 className={`${block.line} ${block.textAlign} ${block.color} w100`}>{block.text}</h1>
        {block.subtitle && (
          <p className={`destroy-p ${block.subtitleStyle} ${block.textAlign} mx-auto`}>
            {block.subtitle}
          </p>
        )}
      </div>
    );
  };

  renderHeaadingTwo = (formElement) => {
    const block = formElement.content;
    return (
      <div className="wrap-md" key={formElement.name}>
        <div className="mt0 pt3 mb3 md-mt2 lg-mt2 flex items-center">
          <span className={`sm-line ${block.lineColor} inline-block mr2 md-mr3 lg-mr3`} />
          <div className="inline-block">
            <h1 className="f-20 inline-block lh-base">{block.text}</h1>
          </div>
        </div>
      </div>
    );
  };

  renderHeadingThree = (formElement) => {
    const block = formElement.content;
    return (
      <div className="wrap-md" key={formElement.name}>
        <h4 className="f-15 c-grey feature-font-family regular">{block.text}</h4>
      </div>
    );
  };

  renderBanner = (formElement) => {
    const block = formElement.content;
    const overlayClasses = block.overlay.length ? block.overlay.join(' ') : '';
    const videoButtonClass = classNames({
      'video-button': !!block.videoLink,
    });
    return (
      <div
        key={formElement.name}
        className={`about-banner ${videoButtonClass} ${overlayClasses}`}
        data-video={block.videoLink}
        style={{
          backgroundImage: `url('${block.image[0].url}}`,
          backgroundPosition: block.imagePosition || "default('0% 25%')",
        }}
      >
        {block.body && <p className="destroy-p">{block.body}</p>}
      </div>
    );
  };

  renderBlockquote = (formElement) => {
    const block = formElement.content;
    return (
      <div key={formElement.name} className="mx-auto p3" style={{ maxWidth: '420px' }}>
        <p className="center f-20 feature-font-family">{block.text}</p>
      </div>
    );
  };

  renderHeaderBanner = (formElement) => {
    const block = formElement.content;
    const style = {
      backgroundImage: `url('${block.image[0].url}}`,
      backgroundPosition: block.imagePosition || "default('0% 25%')",
    };
    return <div key={formElement.name} className="banner" style={style} />;
  };

  renderButton = (formElement) => {
    const block = formElement.content;
    return (
      <div className="wrap-md w100 clearfix">
        <Anchor
          to={block.buttonUrl}
          className={`${block.backgroundColor} ${block.align} basic-btn bold my2`}
          style={{ border: '0' }}
        >
          {block.label}
        </Anchor>
      </div>
    );
  };

  // same as blog matrix
  renderVideo = (formElement) => {
    const block = formElement.content;
    const autoplay = block.autoplay !== undefined;
    const loop = block.loop !== undefined;
    const muted = block.muted !== undefined;
    const controls = block.controls !== undefined;
    const videoClasses = classNames({
      'gif-fix': !!block.areYouAGif,
      'fill-space': !!block.fillSpace,
    });
    return (
      <div key={formElement.name} className="sm-col sm-col-12 md-col-12 my3">
        <div className="matrix-video-friendly hide-the-line fill-space">
          <video
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsinline
            className={`w100 matrix-video-friendly ${videoClasses}`}
          >
            <track kind="captions" />
            <source src={formElement.mp4Video} type="video/mp4" />
            <source src={formElement.webmVideo} type="video/webm" />
          </video>
        </div>
      </div>
    );
  };

  renderFeatureImage = (formElement) => {
    const block = formElement.content;
    return (
      <div className="wrap-md" key={formElement.name}>
        <figure className="flex flex-column items-center my3">
          <img src={block.image[0].url} alt="" />
          <figcaption className="mt2 f-14 center text-wrap">{block.caption}</figcaption>
        </figure>
      </div>
    );
  };

  renderHero = (formElement) => {
    const block = formElement.content;
    return (
      <div
        key={formElement.name}
        className="hero"
        style={{
          backgroundImage: `url('${block.image[0].url}}`,
          backgroundPosition: block.imagePosition || "default('0% 25%')",
        }}
      />
    );
  };

  renderHero = (formElement) => {
    const block = formElement.content;
    return (
      <div
        key={formElement.name}
        className="hero"
        style={{
          backgroundImage: `url('${block.image[0].url}}`,
          backgroundPosition: block.imagePosition || "default('0% 25%')",
        }}
      />
    );
  };

  renderReferences = (formElement) => {
    const block = formElement.content;
    return (
      <div key={formElement.name} className="references">
        {block.body}
      </div>
    );
  };

  renderSignature = (formElement) => {
    const block = formElement.content;
    return (
      <div key={formElement.name} className="wrap-md mb3">
        <h3 className="signature-font-family f-24">{block.authorName}</h3>
        <span className="f-14">
          <strong>{block.authorTitle}</strong>
        </span>
      </div>
    );
  };

  renderFooterNavigation = (formElement) => {
    const block = formElement.content;
    const unHideClass = classNames({
      'un-hide': !!block.showPreviousButton,
    });
    return (
      <div key={formElement.name} className="wrap w100 clearfix">
        <div className={`${unHideClass} left hide"`}>
          <Anchor
            to={block.previousButtonUrl}
            className="block px2 left c-grey bold px2 feature-font-family"
          >
            {block.leftButtonLabel || 'Previous'}
          </Anchor>
        </div>
        <div className={`${unHideClass} right hide`}>
          <Anchor
            to={block.nextButtonUrl}
            className="block px2 right c-grey bold px2 feature-font-family"
          >
            {block.rightButtonLabel || 'Next'}
          </Anchor>
        </div>
      </div>
    );
  };

  render() {
    const availableElements = GENERAL_MATRIX_AVAILABLE_ELEMENTS;
    const { formData } = this.props;

    return formData.map((formElement) => (availableElements.indexOf(formElement.name) > -1 ? (
      this[`render${getUcFirst(formElement.name)}`](formElement)
    ) : (
      <div />
    )));
  }
}

GeneralMatrix.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default GeneralMatrix;
