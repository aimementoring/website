import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import Title from 'aime-blueprint/lib/components/title';
import contentfulServer from '../../api/contentfulPosts';
import Layout from '../../hocs/basicLayout';
import styles from './reports.modules.scss';

const Report = dynamic(() => import('../../components/report'));

const Reports = ({ entries }) => {
  const [reports, setReportEntries] = useState(entries);
  const [categorySelected, setCategorySelected] = useState('All reports');
  const categoryTypes = ['All reports', 'Annual', 'Financial', 'Interim', 'Research'];

  useEffect(() => {
    if (categorySelected === 'All reports') {
      setReportEntries(entries);
    }
  }, [reports]);

  const handleCategoryChange = (newCategory) => (e) => {
    e.preventDefault();
    if (newCategory === categorySelected) {
      return;
    }
    const reportsToShow = entries.filter(
      (report) => report.fields.reportType.indexOf(newCategory) > -1,
    );
    setReportEntries(reportsToShow);
    setCategorySelected(newCategory);
  };

  const categoryLinks = categoryTypes.map((category) => (
    <li className="block mr2" key={category}>
      <div
        className={classNames('filter-list', { active: category === categorySelected })}
        onClick={handleCategoryChange(category)}
        onKeyPress={handleCategoryChange(category)}
        role="presentation"
      >
        {category}
      </div>
    </li>
  ));

  const reportCard = reports.map(({ fields, sys }) => {
    const bannerImage = fields.banner
    && fields.banner.fields.visualMedia
    && fields.banner.fields.visualMedia.fields.file.url;
    const contentPreview = fields.contentPreview
      && fields.contentPreview.fields.previewCopy;
    return (
      <Report
        key={sys.id}
        bannerImage={bannerImage}
        title={fields.title}
        reportUrl={fields.reportUrl}
        contentPreview={contentPreview}
      />
    );
  });

  return (
    <Layout>
      <div className={styles.heroBannerReports}>
        <Title type="headingLockup" theme={process.env.REACT_APP_THEME}>
          <strong>Reports</strong>
        </Title>
      </div>
      {reports && (
        <>
          <div className={styles.filterListContainer}>
            <Title type="h5Title">
                Category
            </Title>
            <ul className="flex flex-wrap">{categoryLinks}</ul>
          </div>
          <div className={styles.reportsGrid}>
            {reportCard}
          </div>
        </>
      )}
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
