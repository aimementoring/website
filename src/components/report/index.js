import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Report extends PureComponent {
  static propTypes = {
    report: PropTypes.object.isRequired,
  };

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
    const bannerImageUrl =
      report.bannerImageUrl && report.bannerImageUrl[0] ? report.bannerImageUrl[0].image : '';
    return (
      <article className="article-tile">
        <a href={readMoreLink} className="article-link" target="_blank">
          <img className="rounded-top article-image" src={bannerImageUrl} alt="" />
          {/* {% for tag in report.reportTags.limit(2).all() %}
            <p className="featured-story--tag">{{tag.title}}</p>
          {% endfor %} */}
          <div className="article-description">
            <h1 className="article-tile-title pt1">{report.title}</h1>
            <p className="article-tile-label">{report.previewText}</p>
            <a href={readMoreLink} className="article-tile-link basic-btn italic" target="_blank">
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
