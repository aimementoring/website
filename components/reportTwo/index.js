import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
// import { formatDate } from '../../../utils/utilities';

const {
  Title,
  Button,
} = Components;

const Picture = dynamic(() => import('../picture'));

const ReportTwo = (props) => {
  const {
    title, reportUrl, bannerImage, contentPreview,
  } = props;
  console.log('TCL: bannerImage', bannerImage);
  // getReadMoreLink = () => {
  //   const { report } = this.props;
  //   switch (report.type.handle) {
  //   case 'fullPageReport':
  //     return report.url;
  //   case 'pdfReport':
  //     if (report.attachment && report.attachment.url) {
  //       return report.attachment.url;
  //     }
  //     return report.urlHandle;
  //   default:
  //     return report.url;
  //   }
  // };

  return (
    <article className="article-tile">
      <a
        aria-label="banner-image"
        href={reportUrl}
        className="article-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Picture
            className="rounded-top article-image"
            thumbnail
            image={{
              image: `https:${bannerImage}?fl=progressive`,
              title,
              thumbnail: `https:${bannerImage}?fl=progressive`,
            }}
          />
          <Title type="h5Title">{title}</Title>
          {/* <Paragraph className="article-tile-tagline">
              <span key={`pr1-story-entry-${id}`} className={styles.postDate}>
                {datePublished}
              </span>
              <span key={`c-light-grey-span-${id}`}>
                <br />
              </span>
              <span key={`px1-span-${id}`}>
                {`By ${contentCreator}`}
              </span>
            </Paragraph> */}
          <Paragraph>
            {contentPreview && contentPreview.previewCopy && (
              `${contentPreview.previewCopy.slice(0, 230)}...`)}
          </Paragraph>
          <div>
            <Button theme="rainbow" type="button">
                Read more
              {' '}
              <i className="material-icons">&#xE315;</i>
            </Button>
          </div>
        </div>
      </a>
    </article>
  );
};

ReportTwo.propTypes = {
  title: PropTypes.string.isRequired,
  reportUrl: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  contentPreview: PropTypes.string.isRequired,
};

export default ReportTwo;
