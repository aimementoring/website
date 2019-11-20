import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Report extends PureComponent {
  getReadMoreLink = () => {
    const { report } = this.props;
    switch (report.type.handle) {
    case 'fullPageReport':
      return report.url;
    case 'pdfReport':
      if (report.attachment && report.attachment.url) {
        return report.attachment.url;
      }
      return report.urlHandle;
    default:
      return report.url;
    }
  };

  render() {
    const { report } = this.props;
    const readMoreLink = this.getReadMoreLink();
    const bannerImageUrl = report.bannerImageUrl && report.bannerImageUrl[0]
      ? report.bannerImageUrl[0].image
      : '';
    return (
      <article className="article-tile">
        <a
          aria-label="banner-image"
          href={readMoreLink}
          className="article-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="rounded-top article-image" src={bannerImageUrl} alt="" />
          {/* {% for tag in report.reportTags.limit(2).all() %}
            <p className="featured-story--tag">{{tag.title}}</p>
          {% endfor %} */}
          <div className="article-description">
            <h1 className="article-tile-title pt1">{report.title}</h1>
            <p className="article-tile-label">{report.previewText}</p>
            <a
              href={readMoreLink}
              className="article-tile-link basic-btn italic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="read more"
            >
              Read more
              {' '}
              <i className="material-icons">&#xE315;</i>
            </a>
          </div>
        </a>
      </article>
    );
  }
}

Report.propTypes = {
  report: PropTypes.shape({
    title: PropTypes.string,
    previewText: PropTypes.string,
    bannerImageUrl: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    urlHandle: PropTypes.string,
    url: PropTypes.string,
    attachment: PropTypes.shape({
      url: PropTypes.string,
    }),
    type: PropTypes.shape({
      handle: PropTypes.string,
    }),
  }).isRequired,
};

export default Report;
