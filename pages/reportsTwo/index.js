import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
import contentfulServer from '../../api/contentfulPosts';
import Layout from '../../hocs/basicLayout';

// const Report = dynamic(() => import('../../components/report'));

const Reports = (props) => {
  const { entries } = props;

  // const [categorySelected, setCategorySelected] = useState('All reports');
  const [categoryTitles, setCategoryTitles] = useState(['All reports', 'Annual', 'Financial', 'Interim', 'Research']);

  const handleReportTypes = async () => {
    const reports = entries;
    if (!reports.length && !reports.reportTagsTitles) {
      setCategoryTitles(['All reports', 'Annual', 'Financial', 'Interim', 'Research']);
    } else {
      // TODO: Add this to the content model in Contentful
      setCategoryTitles(reports.reportTagsTitles);
    }
    setCategoryTitles(categoryTitles);
  };

  useEffect(() => { handleReportTypes(); }, []);

  // const getCategoryLinks = () => entries.map((category) => {
  //   const active = category === categorySelected ? 'active' : '';
  //   return (
  //     <li className="block mr2" key={category}>
  //       <div
  //         className={`filter-list ${active}`}
  //         // onClick={handleCategoryChange(category)}
  //         // onKeyPress={handleCategoryChange(category)}
  //         role="presentation"
  //       >
  //         {category}
  //       </div>
  //     </li>
  //   );
  // });

  // const handleCategoryChange = (newCategory) => (e) => {
  //   e.preventDefault();
  //   if (newCategory === categorySelected) return;
  //   if (newCategory === 'All reports') {
  //     setReports(entries);
  //     setCategorySelected(newCategory);
  //     return;
  //   }
  //   const reportsToShow = entries.filter((report) => {
  //     const searchString = `${report.slug} ${report.previewText} ${report.title}`.toLowerCase();
  //     return searchString.indexOf(newCategory.toLowerCase()) > -1;
  //   });
  //   setReports(reportsToShow);
  //   setCategorySelected(newCategory);
  // };

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
        {/* {reports && (
          <div className="wrap py3">
            <div className="filter-list-container">
              <h4 className="c-brand-primary py2 f-15 px2 border border-radius mt3">Category</h4>
              <ul className="flex flex-wrap">{getCategoryLinks}</ul>
            </div>
            <div className="grid reports-grid mb4">
              {reports.map((report) => <Report key={report.slug} report={report} />)}
            </div>
          </div>
        )} */}
      </section>
    </Layout>
  );
};


Reports.getInitialProps = async () => {
  const client = contentfulServer();
  const entries = await client.then((response) => response);
  const getReportsPosts = entries.filter((entry) => (entry.fields.contentTag.fields.name === 'report'));

  return { entries: getReportsPosts };
};

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

Reports.defaultProps = {
  entries: PropTypes.arrayOf(PropTypes.shape({})),
};

Reports.propTypes = {
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

export default Reports;
