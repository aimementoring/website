import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'aime-blueprint';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';
import contentfulServer from '../../api/contentfulStories';
import Layout from '../../hocs/basicLayout';

const {
  Title,
} = Components;

const TermsAndConditions = (props) => {
  const { entries } = props;

  return (
    <Layout>
      <div style={{ height: `${120}px`, backgroundColor: 'black' }} />
      {entries && entries.map((terms) => {
        const termContent = terms.fields.contentCards
          && terms.fields.contentCards.map((card) => (
            <ReactMarkdown
              key={card.sys.id}
              source={card.fields.contentCopy}
              renderers={{ paragraph: Paragraph }}
            />
          ));
        return (
          <div key={terms.sys.id} className="matrix-general">
            <div className="wrap-md mb0 md-mb3 lg-mb3 clearfix">
              <span className="line above" />
              <Title type="h5Title">{terms.fields.title}</Title>
            </div>
            <div className="wrap-md">
              {termContent}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

TermsAndConditions.getInitialProps = async () => {
  const client = contentfulServer();
  const entries = await client.then((response) => response);
  const getReportsPosts = entries.filter((entry) => (entry.fields.contentTag.fields.name === 'terms'));

  return { entries: getReportsPosts };
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
