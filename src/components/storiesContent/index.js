import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Picture from '../picture';

class StoriesContent extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    stories: PropTypes.array.isRequired,
  };

  getPostDate = postDateEntry => {
    const postDate = new Date(postDateEntry.date.replace(/\s/, 'T'));
    return `${postDate.getDate()}.${postDate.getMonth()}.${postDate.getFullYear()}`;
  }

  goToStory = slug => e => {
    e.preventDefault();
    this.props.history.push(`/story/${slug}`);
  }

  renderBannerImage = entry => (
    <Picture
      className="rounded-top article-image"
      image={entry.bannerImage[0]}
      thumbnail
    />
  )

  render() {
    const { stories } = this.props;
    return (
      <div className="stories-container container pt0 px3 pb4">
        <aside className="refine-search">
          <div className="refine-section mb2 lg-mb4">
            <h2 className="regular f-24 c-black feature-font-family">
              Kindness doesn't cost a thing. Let's sprinkle it everywhere!
            </h2>
            <span className="line bg-brand-tertiary mb3 mt1" />
            <div className="mobile-panel">
              <p className="f-16 mb1 light lh-large">
                {`AIME has been delivering kindness through mentoring for 14 years. Each year we release a Book of Kindness with tales of human generosity.
                Here are some of those stories of hope, positivity and change...`}
              </p>
            </div>
          </div>
        </aside>
        <div className="grid stories-grid">
          {stories.map(entry => (
            <article key={`article-story-${entry.id}`} className="article-tile">
              <span onClick={this.goToStory(entry.slug)} className="article-link">
                <div className="article-link">
                  {this.renderBannerImage(entry)}
                  <div key={`article-description-${entry.id}`} className="article-description">
                    <h1 className="article-tile-title">{entry.title}</h1>
                    <p className="article-tile-tagline">
                      <span key={`pr1-story-entry-${entry.id}`} className="pr1">{this.getPostDate(entry.postDate)}</span>
                      <span key={`c-light-grey-span-${entry.id}`} className="c-light-grey">/</span>
                      <span key={`px1-span-${entry.id}`} className="px1">{`By ${entry.authorName}`}</span>
                    </p>
                    {entry.previewText !== '' && <p className="article-tile-label">{`${entry.previewText} …`}</p>}
                    <div className="article-tile-link basic-btn italic">Read more</div>
                  </div>
                </div>
              </span>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(StoriesContent);
