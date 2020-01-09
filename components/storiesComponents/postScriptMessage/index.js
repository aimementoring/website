import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Picture = dynamic(() => import('../../picture'));
const VideoFormElement = dynamic(() => import('../../commonElements/videoFormElement'));

const PostScriptMessage = (props) => {
  const {
    hasPostScriptContent,
  } = props;

  const content = hasPostScriptContent
  && hasPostScriptContent.map((ps) => {
    const isImage = ps.fields.visualMedia && ps.fields.visualMedia;
    const isVideo = ps.fields.videoMedia && ps.fields.videoMedia;
    const image = isImage && isImage.fields.file.url;
    const title = isImage && isImage.fields.title;
    const imageCaption = isImage && isImage.fields.description;
    const video = isVideo && isVideo.fields && isVideo.fields.embeddedVideoUrl;
    const videoPlatform = isVideo && isVideo.fields.platform;
    const storyBody = ps.fields.contentCopy && ps.fields.contentCopy;

    return (
      <Fragment key={ps.sys.id}>
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
                  image: `https:${image}`,
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
    </div>
  );
};

PostScriptMessage.propTypes = {
  hasPostScriptContent: PropTypes.arrayOf(
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
};

PostScriptMessage.defaultProps = {
  hasPostScriptContent: null,
};

export default PostScriptMessage;
