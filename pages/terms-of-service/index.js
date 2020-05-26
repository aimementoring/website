import React from 'react';
import PropTypes from 'prop-types';
import { getTerms } from '../../api/contentfulPosts';
import Layout from '../../hocs/basicLayout';
import TermPhraseCard from '../../components/termPhraseCard';
import { SimpleBanner } from '../../components/banner/index';
import styles from './termsOfService.module.scss';

const TermsAndConditions = ({ entries }) => (
  <Layout>
    {entries && entries.map(({ fields, sys }) => (
      <div key={sys.id}>
        <SimpleBanner
          title={(
            <strong>
              {fields.title}
            </strong>
          )}
          groovy
          titleType="headingLockup"
          titleStyleClass={styles.bannerHeadingTermsOfService}
          bannerContainerClass={styles.termsOfServiceBanner}
          bannerWrapperClass={styles.bannerWrapper}
          bannerContentWrapperClass={styles.contentWrapper}
        />
        <div className={styles.termsSection}>
          <TermPhraseCard contentCards={fields.contentCards} />
        </div>
      </div>
    ))}
  </Layout>
);

TermsAndConditions.getInitialProps = async () => {
  const entries = await getTerms().then((response) => response);
  return { entries };
};

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

TermsAndConditions.defaultProps = {
  entries: PropTypes.arrayOf(PropTypes.shape({})),
};

TermsAndConditions.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    contentType: PropTypes.string,
    contentTag: PropTypes.shape({
      name: PropTypes.string,
      sys: SysShape,
    }),
    banner: PropTypes.shape({
      displayType: PropTypes.string,
      heading: PropTypes.shape({
        headingText: PropTypes.string,
        type: PropTypes.string,
        sys: SysShape,
      }),
      visualMedia: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string,
          fileName: PropTypes.string,
          contentType: PropTypes.string,
        }),
        title: PropTypes.string,
        sys: SysShape,
      }),
      sys: SysShape,
    }),
    contentCreator: PropTypes.shape({
      authorName: PropTypes.string,
      supportAuthorName: PropTypes.string,
      sys: SysShape,
    }),
    publishDate: PropTypes.string,
    seoAndMetaTags: PropTypes.shape({
      platformMetaTags: PropTypes.arrayOf(PropTypes.shape({
        sys: SysShape,
      })),
      sys: SysShape,
    }),
    contentPreview: PropTypes.shape({
      displayType: PropTypes.string,
      previewCopy: PropTypes.string,
      title: PropTypes.string,
      visualMedia: PropTypes.shape({
        sys: SysShape,
      }),
      visualMediaCarousel: PropTypes.arrayOf(PropTypes.shape({
        sys: SysShape,
      })),
    }),
    contentCards: PropTypes.arrayOf(PropTypes.shape({
      Type: PropTypes.string,
      displayType: PropTypes.string,
      visualMedia: PropTypes.shape({
        sys: SysShape,
      }),
      videoMedia: PropTypes.string,
      contentCopy: PropTypes.string,
      sys: SysShape,
    })),
  })),
};

export default TermsAndConditions;
