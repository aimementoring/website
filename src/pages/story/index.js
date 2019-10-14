import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getEntries from '../../services/craftAPI';
import MatrixBuilder from '../../components/matrixBuilder';

import './index.scss';

export default class Story extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    entries: {},
    hasMount: false,
  }

  componentDidMount() {
    const { location, history } = this.props;
    const storySlug = location.pathname.split('/')[2];
    if (location.pathname.split('/')[1] === 'blog') {
      history.push(`/story/${storySlug}`);
    }
    this.setState({ hasMount: true });
    getEntries(`stories/${storySlug}.json`)
      .then(entries => {
        this.setState({ entries });
      });
  }

  render() {
    const { entries, hasMount } = this.state;
    let bannerStyles = {};
    if (entries) {
      bannerStyles = {
        backgroundPosition: entries.bannerBackgroundPosition ? entries.bannerBackgroundPosition : '0% 25%',
        backgroundImage: entries.bannerImage && entries.bannerImage.length ? `url(${entries.bannerImage[0].image})` : '',
        maxWidth: '100%',
      };
    }
    let postDate;
    // Adding "T" to support dates in Safari: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
    if (entries && entries.postDate) postDate = new Date(entries.postDate.date.replace(/\s/, 'T'));

    return (
      <div>
        {hasMount
          ? (
            <div>
              {entries && entries.bannerImage
                && <div className="banner banner-in-story" style={bannerStyles} />
              }
              <div>
                {entries
                  && (
                    <div className="wrap mx3 xs-px3 p1">

                      <article className="blog-post matrix-general">
                        <h1 className="blog-post--title">
                          {entries.title}
                        </h1>
                        <div>
                          {postDate
                            && (
                              <span className="blog-post--timestamp">
                                {`Posted ${postDate.toLocaleString('en-us', { month: 'long' })} ${postDate.getDate()}, ${postDate.getFullYear()}`}
                              </span>
                            )
                          }
                        </div>
                        <article className="blog-post--article" />
                        {/* {entries.post && this.getMatrixBlog()} */}
                        <div>
                          {entries.post && <MatrixBuilder formData={entries.post} matrixType="blog" />}
                        </div>

                        <Link to="/stories" className="article-tile-link basic-btn italic">
                          <i className="material-icons">keyboard_backspace</i> Back to Stories
                        </Link>
                      </article>

                    </div>
                  )
                }

              </div>
            </div>)
          : <div />
        }
      </div>
    );
  }
}
