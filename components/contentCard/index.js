import React, { Fragment } from 'react';
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
        const isImage = card.fields.visualMedia;
        const isVideo = card.fields.videoMedia;
        const image = isImage && isImage.fields.file.url;
        const title = isImage && isImage.fields.title;
        const video = isVideo && isVideo.fields.embeddedVideoUrl;
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
                <Picture
                  image={{
                    title,
                    thumbnail: `https:${image}?q=50`,
                    image: `https:${image}`,
                  }}
                />
              )}
            <div className="articleDescription">
              <p className="articleTileLabel">{storyBody}</p>
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