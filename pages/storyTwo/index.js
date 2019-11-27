/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
import contentfulServer from '../../api/contentfulServer';
import {
  formatDate,
  removeSpecialCharacters,
  replaceWhiteSpace,
} from '../../utils/utilities';
import styles from './storyTwo.module.scss';

/*
  Use this rather than Video => const VideoFormElement =
  dynamic(() => import('../../components/commonElements/videoFormElement'));
*/

const StoryTwo = (props) => {
  const { content } = props;
  const router = useRouter();

  return (
    <>
      {
        content && content.map((entry) => {
          const bannerImage = entry.fields.banner
          && entry.fields.banner.fields.visualMedia.fields.file.url;

          const bannerStyles = {
            backgroundPosition: '0% 25%',
            backgroundImage: bannerImage && `url(https:${bannerImage})`,
            maxWidth: '100%',
          };

          const title = removeSpecialCharacters(entry.fields.title);
          const slugTitle = replaceWhiteSpace(title, '-').toLowerCase();

          return (
            <Fragment key={entry.sys.id}>
              {(() => {
                switch (router.query.slug) {
                case slugTitle:
                  return (
                    <div>
                      <div>
                        <div className={styles.bannerInStory} style={bannerStyles} />
                        <div>
                          <div className={styles.entriesContainer}>
                            <article className={styles.blogPost}>
                              <h1 className={styles.blogPostTitle}>{entry.fields.title}</h1>
                              <div>
                                <span className={styles.blogPostTimestamp}>
                                  {`Posted ${formatDate(entry.fields.publishDate)}`}
                                </span>
                              </div>
                              <article className={styles.blogPostArticle} />
                              <div>
                                <ContentCard contentCards={entry.fields.contentCards} />
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  return null; // this should be a fall back component
                }
              })()}
            </Fragment>
          );
        })
      }
      <Anchor to="/storiesTwo" className={styles.articleTileLink}>
        <i className={styles.materialIcons}>keyboard_backspace</i>
        {' '}
        Back to Stories
      </Anchor>
    </>
  );
};

StoryTwo.getInitialProps = async (/* { query } */) => {
  const client = contentfulServer();
  const content = await client.then((response) => response);

  return { content };
};

StoryTwo.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string,
      contentType: PropTypes.string,
      contentTag: PropTypes.object,
      banner: PropTypes.object,
      contentCreator: PropTypes.object,
      publishDate: PropTypes.string,
      contentCards: PropTypes.array,
    }),
  })).isRequired,
};

const ContentCard = (props) => {
  const { contentCards } = props;

  return (
    <>
      {contentCards
          && contentCards.map((card) => {
            const image = card.fields.visualMedia && card.fields.visualMedia.fields.file.url;
            const displayType = card.fields.displayType && card.fields.displayType;
            const video = card.fields.videoMedia && card.fields.videoMedia.fields.embeddedVideoUrl;
            const storyBody = card.fields.contentCopy && card.fields.contentCopy;
            return (
              <div key={card.sys.id}>
                {card.fields.videoMedia
              && card.fields.Type.toLowerCase() === 'video' ? (<Video video={video} title="abcd" />
                  ) : (
                    card.fields.Type.toLowerCase() === 'visual media' && (
                      <Picture
                        image={image}
                        title="abcd"
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

export default StoryTwo;
