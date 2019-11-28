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
          const image = card.fields.visualMedia && card.fields.visualMedia.fields.file.url;
          const title = card.fields.visualMedia && card.fields.visualMedia.fields.title;
          const isGif = card.fields.visualMedia
            && card.fields.visualMedia.fields.file.fileName
              .toLowerCase()
              .indexOf('.gif') > -1;
          const video = card.fields.videoMedia
            && card.fields.videoMedia.fields.embeddedVideoUrl;
          const videoPlatform = card.fields.videoMedia && card.fields.videoMedia.fields.platform;
          const storyBody = card.fields.contentCopy && card.fields.contentCopy;

          return (
            <Fragment key={card.sys.id}>
              {card.fields.videoMedia
              && card.fields.Type.toLowerCase() === 'video' ? (<VideoFormElement formElement={{ mp4Video: video, name: videoPlatform }} />
                ) : (
                  card.fields.Type.toLowerCase() === 'visual media' && (
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

/*
<>
  {(() => {
    switch (slug) {
    case 'inline':
      return (<div />)}})}</>
      */
