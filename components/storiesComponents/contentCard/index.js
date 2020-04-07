import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import {
  formatDate,
} from '../../../utils/formatting';
import VideoFormElement from '../../commonElements/videoFormElement';

const Picture = dynamic(() => import('../../picture'));
const CallToActionButton = dynamic(() => import('../callToActionButton'));
// TODO: remove once Contentful content model for post is updated for all stories.
const PostScriptMessage = dynamic(() => import('../postScriptMessage'));

const ContentCard = (props) => {
  const {
    author, signature, contentCards, publishDate,
    // TODO: remove once Contentful content model for post is updated for all stories.
    buttonProps, postScriptContent,
  } = props;

  const content = contentCards
  && contentCards.map((card) => {
    const cardType = card.fields.Type;
    const label = card.fields.contentTitle
      && card.fields.contentTitle.fields.headingText;
    const isImage = card.fields.visualMedia && card.fields.visualMedia;
    const isVideo = card.fields.videoMedia && card.fields.videoMedia;
    const image = isImage && isImage.fields.file.url;
    const title = isImage && isImage.fields.title;
    const imageCaption = isImage && isImage.fields.description;
    const video = isVideo && isVideo.fields && isVideo.fields.embeddedVideoUrl;
    const videoPlatform = isVideo && isVideo.fields.platform;
    const storyBody = card.fields.contentCopy && card.fields.contentCopy;

    return (
      <Fragment key={card.sys.id}>
        {cardType !== 'Call To Action' && (
          <>
            {isVideo ? (
              <VideoFormElement
                formElement={{ videoUrl: video, name: videoPlatform, autoplay: true }}
              />
            )
              : isImage && (
                <>
                  <Picture
                    image={{
                      title,
                      thumbnail: `https:${image}?q=50`,
                      image: `https:${image}?fl=progressive`,
                    }}
                  />
                  {imageCaption && <div className="figcaption">{imageCaption}</div>}
                </>
              )}
            <ReactMarkdown
              source={storyBody}
              renderers={{ paragraph: Paragraph }}
            />
          </>
        )}
        {cardType === 'Call To Action' && (<CallToActionButton label={label} externalUrl={storyBody} />)}
      </Fragment>
    );
  });

  return (
    <div>
      {content}
      {signature ? signature
        && <div className="signature">{signature}</div>
        : author && (
          <strong>
            {author}
            <div />
            {formatDate(publishDate, 'long')}
          </strong>
        )}
      {/* TODO: remove once Contentful content model for post is updated for all stories. */}
      {buttonProps && (
        <CallToActionButton
          buttonProps={buttonProps}
        />
      )}
      {postScriptContent && (
        <PostScriptMessage postScriptContent={postScriptContent} />
      )}
      {/* TODO: remove once Contentful content model for post is updated for all stories. */}
    </div>
  );
};

ContentCard.propTypes = {
  author: PropTypes.string,
  signature: PropTypes.string,
  // TODO: remove once Contentful content model for post is updated for all stories.
  buttonProps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      externalUrl: PropTypes.string,
    }),
  ),
  // TODO: remove once Contentful content model for post is updated for all stories.
  postScriptContent: PropTypes.arrayOf(
    PropTypes.shape({
      Type: PropTypes.string,
      contentCopy: PropTypes.string,
      displayType: PropTypes.string,
      visualMedia: PropTypes.shape({
        file: PropTypes.shape({
          contentType: PropTypes.string,
          fileName: PropTypes.string,
          url: PropTypes.string,
          title: PropTypes.string,
          details: PropTypes.shape({
            size: PropTypes.number,
            image: PropTypes.shape({
              height: PropTypes.number,
              width: PropTypes.number,
            }),
          }),
        }),
      }),
      visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),

  publishDate: PropTypes.string.isRequired,
  contentCards: PropTypes.arrayOf(
    PropTypes.shape({
      Type: PropTypes.string,
      contentCopy: PropTypes.string,
      displayType: PropTypes.string,
      visualMedia: PropTypes.shape({
        file: PropTypes.shape({
          contentType: PropTypes.string,
          fileName: PropTypes.string,
          url: PropTypes.string,
          title: PropTypes.string,
          details: PropTypes.shape({
            size: PropTypes.number,
            image: PropTypes.shape({
              height: PropTypes.number,
              width: PropTypes.number,
            }),
          }),
        }),
      }),
      visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ).isRequired,
};

ContentCard.defaultProps = {
  author: '',
  signature: '',
  buttonProps: null,
  postScriptContent: null,
};

export default ContentCard;
