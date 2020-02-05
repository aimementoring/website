import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import contentfulServer from '../../api/contentfulPosts';
import Layout from '../../hocs/basicLayout';

const ReportTwo = dynamic(() => import('../../components/reportTwo'));

const ReportsTwo = (props) => {
  const { entries } = props;
  console.log('TCL: ReportsTwo -> entries', entries);
  const [reports, setReportEntries] = useState(entries);
  console.log('TCL: ReportsTwo -> reports', reports);
  const [categorySelected, setCategorySelected] = useState('All reports');
  console.log('TCL: ReportsTwo -> categorySelected', categorySelected);

  // const handleReportTypes = () => {
  //   if (!reports.length) {
  //     setCategoryTitles(['All reports', 'Annual', 'Financial', 'Interim', 'Research']);
  //   } else {
  //     // TODO: Add this to the content model in Contentful
  //     const reportType = reports.map((filter) => (filter.fields.reportType));
  //     setCategoryTitles(reportType);
  //   }
  //   setCategoryTitles(categoryTitles);
  // };

  const handleCategoryChange = (newCategory) => (e) => {
    e.preventDefault();
    if (newCategory === categorySelected) {
      return;
    }
    if (newCategory === 'All reports') {
      setReportEntries(reports);
      setCategorySelected(newCategory);
    }
    const reportsToShow = entries.filter(
      (report) => report.fields.reportType.indexOf(categorySelected) > -1,
    );
    setReportEntries(reportsToShow);
    setCategorySelected(newCategory);
  };

  const getCategoryLinks = entries.map((category) => {
    console.log('TCL: getCategoryLinks -> category', category);
    const active = category === categorySelected ? 'active' : '';
    return (
      <li className="block mr2" key={category.fields.reportType}>
        <div
          className={`filter-list ${active}`}
          onClick={handleCategoryChange(category.fields.reportType)}
          onKeyPress={handleCategoryChange(category.fields.reportType)}
          role="presentation"
        >
          {category.fields.reportType}
        </div>
      </li>
    );
  });

  const reportCard = reports.map((content) => {
    const bannerImage = content.fields.banner
    && content.fields.banner.fields.visualMedia
    && content.fields.banner.fields.visualMedia.fields.file.url;
    const contentPreview = content.fields.contentPreview
      && content.fields.contentPreview.fields.previewCopy;
    return (
      <ReportTwo
        key={content.sys.id}
        bannerImage={bannerImage}
        title={content.fields.title}
        reportUrl={content.fields.reportUrl}
        contentPreview={contentPreview}
      />
    );
  });

  return (
    <Layout>
      <div className="hero-banner--default hero-banner--impact full-width-wrap">
        <div className="flex flex-wrap items-center full-height">
          <div className="banner-wrapper">
            <h1>
              <span className="highlight-text">
                <em>
                    Reports
                  <br />
                  <span className="scratch-underline">&nbsp;</span>
                </em>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <section className="relative">
        <div className="scratch-overlay-wrapper top-scratch bg-white" />
        {reports && (
          <div className="wrap py3">
            <div className="filter-list-container">
              <h4 className="c-brand-primary py2 f-15 px2 border border-radius mt3">Category</h4>
              <ul className="flex flex-wrap">{getCategoryLinks}</ul>
            </div>
            <div className="grid reports-grid mb4">
              {reportCard}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};


ReportsTwo.getInitialProps = async () => {
  const client = contentfulServer();
  const entries = await client.then((response) => response);
  const getReportsPosts = entries.filter((entry) => (entry.fields.contentTag.fields.name === 'report'));

  return { entries: getReportsPosts };
};

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

ReportsTwo.defaultProps = {
  entries: PropTypes.arrayOf(PropTypes.shape({})),
};

ReportsTwo.propTypes = {
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

export default ReportsTwo;
