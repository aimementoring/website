import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import {
  formatDate,
} from '../../../utils/utilities';
import VideoFormElement from '../../commonElements/videoFormElement';

const Picture = dynamic(() => import('../../picture'));
const CallToActionButton = dynamic(() => import('../callToActionButton'));
const PostScriptMessage = dynamic(() => import('../postScriptMessage'));

const ContentCard = (props) => {
  const {
    author, signature, contentCards, buttonProps, postScriptContent, publishDate,
  } = props;

  const content = contentCards
  && contentCards.map((card) => {
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
        <ReactMarkdown>
          {storyBody}
        </ReactMarkdown>
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

      {buttonProps && (
        <CallToActionButton
          buttonProps={buttonProps}
        />
      )}
      {postScriptContent && (
        <PostScriptMessage postScriptContent={postScriptContent} />
      )}
    </div>
  );
};

ContentCard.propTypes = {
  author: PropTypes.string,
  signature: PropTypes.string,
  buttonProps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      externalUrl: PropTypes.string,
    }),
  ),
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
