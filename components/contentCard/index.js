import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';


const Picture = dynamic(() => import(/* webpackChunkName 'Picture' */ '../picture'));
const VideoFormElement = dynamic(() => import(/* webpackChunkName 'Picture' */ '../commonElements/videoFormElement'));

const ContentCard = (props) => {
  const { contentCards } = props;

  return (
    <>
      {contentCards
        && contentCards.map((card) => {
          const hasMedia = card.fields.visualMedia;
          const image = hasMedia && hasMedia.fields.file.url;
          const title = hasMedia && hasMedia.fields.title;
          const isGif = hasMedia && hasMedia.fields.file.fileName.toLowerCase().indexOf('.gif') > -1;
          const hasVideo = card.fields.videoMedia;
          const video = hasMedia && hasMedia.fields.embeddedVideoUrl;
          const videoPlatform = hasMedia && hasMedia.fields.platform;
          const storyBody = card.fields.contentCopy && card.fields.contentCopy;

          return (
            <Fragment key={card.sys.id}>
              {hasVideo ? (
                <VideoFormElement formElement={{ mp4Video: video, name: videoPlatform }} />
              ) : (
                hasMedia && (
                  <Picture
                    image={{
                      image: `https:${image}${isGif ? '' : '?fm=jpg&fl=progressive'}`,
                      title,
                    }}
                  />
                )
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
  contentCards: PropTypes.arrayOf(PropTypes.shape({
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
    visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({

    })),
  })).isRequired,
};

export default ContentCard;
