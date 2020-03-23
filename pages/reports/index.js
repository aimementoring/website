import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import Title from 'aime-blueprint/lib/components/title';
import contentfulServer from '../../api/contentfulPosts';
import { sortDates } from '../../utils/utilities';
import Layout from '../../hocs/basicLayout';
import { SimpleBanner } from '../../components/banner/index';
import styles from './reports.modules.scss';

const Report = dynamic(() => import('../../components/report'));
// const Card = dynamic(() => import('../../components/card'));
// const CarouselCards = dynamic(() => import('../../components/carouselCards'));

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


    const reportsToShow = entries.filter((report) => report.fields
      && report.fields.reportType
      && report.fields.reportType.indexOf(newCategory) > -1);
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
    const reportUrl = !fields.reportUrl
      ? fields.reportFile && fields.reportFile.fields.file.url
      : fields.reportUrl;
    return (
      <Report
        key={sys.id}
        bannerImage={bannerImage}
        title={fields.title}
        reportUrl={reportUrl}
        contentPreview={contentPreview}
      />
    );
  });

  return (
    <Layout>
      <SimpleBanner
        title={<strong>Reports</strong>}
        titleType="headingLockup"
        bannerContainerClass={styles.heroBannerReports}
      />
      {/* @todo LARA: REMOVE FROM HERE LATER */}
      {/* Commenting out below so we can merge and rebase
      diff PR with staging - will fix in new PR */}
      {/* <CarouselCards /> */}
      {/* eslint-disable max-len */}
      {/* <div className={styles.carouselContainer}>
        <Card
          urlTo="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
        <Card
          urlTo="/"
          image="//images.ctfassets.net/iz0aikshgysc/5OlLGV3iEBjmEyS4uzUOMg/bf1c3fe0316edebbca69acc5d0b9f5df/aimefp.png"
          video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f"
          title="THE IMAGINATION DECLARATION"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          buttonText="WATCH VIDEO"
          type="spotlight"
        />
        <Card
          urlTo="/"
          image="//images.ctfassets.net/iz0aikshgysc/3yYQNkBDs60DJdyniHhycL/8fbfe825b0025bd1abf871c1f1cdbf79/no-shame-report.jpg"
          title="THE IMAGINATION DECLARATION"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
        <Card
          urlTo="/"
          image="//images.ctfassets.net/iz0aikshgysc/2CD4XNN4YwS3x3ThGFqWAd/6b777014c886c7c16c6e03eafa8dcfe1/kpmg-ecom.png"
          title="SUNDAY KINDNESS"
          publishDate="2019-07-05"
          contentCreator="Garma Youth Forum & The AIME Team"
          contentPreview="Following the Uluru Statement From The Heart, in 2019, a group of young Indigenous people have gathered in East Arnhem Land for the Youth Forum at Garma Festival..."
          buttonText="READ MORE"
          type="spotlight"
        />
      </div> */}
      {/* eslint-enable max-len */}
      {/* REMOVE UNTIL HERE LATER */}
      {reports && (
        <>
          <div className={styles.filterListContainer}>
            <Title type="h5Title">
              Category
            </Title>
            <ul>{categoryLinks}</ul>
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

  const filteredDate = sortDates(entries);
  const filteredReports = entries.filter((entry) => (
    entry.fields.publishDate.indexOf(filteredDate) === -1
    || !filteredDate
  ));
  const getReportsPosts = filteredReports.filter((entry) => (entry.fields.contentTag.fields.name === 'report'));

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
