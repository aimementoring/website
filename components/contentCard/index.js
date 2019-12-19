import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Picture = dynamic(() => import('../picture'));
const VideoFormElement = dynamic(() => import('../commonElements/videoFormElement'));

const ContentCard = (props) => {
  const { contentCards } = props;

  return (
    <>
      {contentCards
      && contentCards.map((card) => {
        const isMedia = card.fields.visualMedia && card.fields.visualMedia;
        const image = isMedia && isMedia.fields.file.url;
        const title = isMedia && isMedia.fields.title;
        const video = isMedia && isMedia.fields.embeddedVideoUrl;
        const videoPlatform = isMedia && isMedia.fields.platform;
        const storyBody = card.fields.contentCopy && card.fields.contentCopy;

        return (
          <Fragment key={card.sys.id}>
            {isMedia ? (
              <VideoFormElement
                formElement={{ videoUrl: video, name: videoPlatform, autoplay: true }}
              />
            )
              : isMedia && (
                <Picture
                  image={{
                    title,
                    thumbnail: `https:${image}?q=50`,
                    image: `https:${image}`,
                  }}
                />
              )}
            <div className="articleDescription">
              <p>
                <ReactMarkdown>
                  {storyBody}
                </ReactMarkdown>
              </p>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

ContentCard.propTypes = {
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

export default ContentCard;
