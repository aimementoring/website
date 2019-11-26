/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
// import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
// import contentfulServer from '../../api/contentfulServer';
import { isClientSide, formatDate } from '../../utils/utilities';
import styles from './storyTwo.module.scss';

/*
  Use this rather than Video => const VideoFormElement =
  dynamic(() => import('../../components/commonElements/videoFormElement'));
*/

const StoryTwo = (props) => {
  const {
    title,
    slugTitle,
    bannerContent,
    publishDate,
    contentCards,
    // contentCreator,
  } = props;
  const isClient = isClientSide();
  const datePublished = formatDate(publishDate);
  const bannerImage = bannerContent.fields.visualMedia.fields.file.url;
  // eslint-disable-next-line no-console
  console.log('TCL: StoryTwo -> title', title);
  useEffect(() => {
    if (isClient && Router.pathname.split('/')[1] === 'blog') {
      Router.push(`/storyTwo/${slugTitle}`);
    }
  }, [isClient]);

  const bannerStyles = {
    backgroundPosition: '0% 25%',
    backgroundImage:
      bannerImage && bannerImage
        ? `url(https:${bannerImage})`
        : '',
    maxWidth: '100%',
  };

  const storyContent = contentCards
    && contentCards.map((card) => {
      // eslint-disable-next-line no-console
      console.log('TCL: StoryTwo -> card', card);
      const image = card.fields.visualMedia && card.fields.visualMedia.fields.file.url;
      const displayType = card.fields.displayType && card.fields.displayType;
      const video = card.fields.videoMedia && card.fields.videoMedia.fields.embeddedVideoUrl;
      const storyBody = card.fields.contentCopy && card.fields.contentCopy;

      return (
        <div key={card.sys.id}>
          {card.fields.videoMedia
          && card.fields.Type.toLowerCase() === 'video' ? (<Video video={video} title={title} />
            ) : (
              card.fields.Type.toLowerCase() === 'visual media' && (
                <Picture
                  image={image}
                  title={title}
                  displayType={displayType}
                  thumbnail={false}
                />
              )
            )}
          <div
            key={`article-description-${card.sys.id}`}
            className="articleDescription"
          >
            <p className="articleTileLabel">{storyBody}</p>
          </div>
        </div>
      );
    });

  return (
    <div>
      <div>
        {bannerContent && (
          <div className={styles.bannerInStory} style={bannerStyles} />
        )}
        <div>
          {contentCards && (
            <div className={styles.entriesContainer}>
              <article className={styles.blogPost}>
                <h1 className={styles.blogPostTitle}>{title}</h1>
                <div>
                  {publishDate && (
                    <span className={styles.blogPostTimestamp}>
                      {`Posted ${datePublished}`}
                    </span>
                  )}
                </div>
                <article className={styles.blogPostArticle} />
                <div>
                  {storyContent}
                </div>
                <Anchor to="/storiesTwo" className={styles.articleTileLink}>
                  <i className={styles.materialIcons}>keyboard_backspace</i>
                  {' '}
                  Back to Stories
                </Anchor>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
/*
StoryTwo.getInitialProps = async () => {
  const client = contentfulServer();
  const content = await client.then((response) => response.map((entry) => entry));
  const entries = await Promise.all(content);

  // eslint-disable-next-line no-console
  console.log(entries);
  return {
    title: entries.fields.title,
    slugTitle: entries.fields.title,
    bannerContent: entries.fields.bannerContent,
    publishDate: entries.fields.publishDate,
    contentCards: entries.fields.contentCards,
  };
};
*/
StoryTwo.propTypes = {
  title: PropTypes.string.isRequired,
  slugTitle: PropTypes.string,
  publishDate: PropTypes.string,
  /* contentCreator: PropTypes.string, */
  bannerContent: PropTypes.arrayOf(PropTypes.shape({
    displayType: PropTypes.string,
    heading: PropTypes.arrayOf(PropTypes.shape({
      headingText: PropTypes.string,
      type: PropTypes.string,
    })),
    visualMedia: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      fileName: PropTypes.string,
      title: PropTypes.string,
      file: PropTypes.arrayOf(PropTypes.shape({
        contentType: PropTypes.string,
        details: PropTypes.arrayOf(PropTypes.shape({
          size: PropTypes.number,
          image: PropTypes.arrayOf(PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
          })),
        })),
        fileName: PropTypes.string,
        url: PropTypes.string.isRequired,
        title: PropTypes.string,
      })),
    })),
  })).isRequired,
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

StoryTwo.defaultProps = {
  slugTitle: '',
  publishDate: '',
  /* contentCreator: '', */
};

export default StoryTwo;

const Video = (props) => {
  const { video, title } = props;
  /*
      <video width="400" height="100" controls>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        <source src={video} type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
  */
  return (
    <div style={
      {
        width: `${50}%`, height: `${480}px`, backgroundColor: 'black', textAlign: 'center',
      }
    }
    >
      <iframe src={video} height="470" title={title} />
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Picture = (props) => {
  const {
    image,
    displayType,
    title,
    thumbnail,
  } = props;

  return (
    <>
      {(() => {
        switch (displayType) {
        case 'inline':
          return (
            <img
              alt={title}
              draggable="false"
              className="contentImage"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'full-width':
          return (
            <img
              alt={title}
              draggable="false"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
              className={thumbnail ? 'tileBannerImage' : 'bannerImage'}
            />
          );
        case 'breakout':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'inline-block':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'run-in':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        case 'none':
          return (
            <img
              alt={title}
              draggable="false"
              className=""
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        default:
          return (
            <img
              alt={title}
              draggable="false"
              className="contentImage"
              src={`https:${image}?fm=jpg&fl=progressive`}
              onMouseDown={(event) => event.preventDefault()}
            />
          );
        }
      })()}
    </>
  );
};

Picture.propTypes = {
  image: PropTypes.string.isRequired,
  displayType: PropTypes.string.isRequired,
  thumbnail: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
