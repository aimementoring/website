import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import getEntries from '../../services/craftAPI';

export default class FAQs extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      faqsData: [],
    };
    this.currentHash = '';
    this.sectionRefs = {};
  }

  componentDidMount() {
    const categories = ['General'];
    getEntries('faq').then(response => {
      const faqsData = response.data;
      faqsData.forEach(faqsElement => {
        faqsElement.categories.forEach(category => {
          if (categories.indexOf(category) === -1) {
            categories.push(category);
          }
        });
      });
      this.setState({
        categories,
        faqsData,
      });
    });
  }

  componentDidUpdate() {
    const { location } = this.props;
    const hash = location.hash.replace('#', '');
    if (this.sectionRefs[hash] && hash !== this.currentHash) {
      this.currentHash = hash;
      scrollToComponent(this.sectionRefs[hash], { offset: -110, align: 'top' });
    }
  }

  getFormatedString = stringToFormat => {
    const str = stringToFormat.toLowerCase();
    const find = ' ';
    const find2 = '/';
    const replaceRegEx = new RegExp(find, 'g');
    const replaceRegEx2 = new RegExp(find2, 'g');
    return str.replace(replaceRegEx, '-').replace(replaceRegEx2, '-');
  };

  /* eslint-disable react/no-danger */
  getAllFaqsFromCategory = category => {
    const { faqsData } = this.state;
    const faqs = faqsData.filter(faq => faq.categories.indexOf(category) > -1);
    return (
      <div
        key={`${category}-question-container`}
        ref={el => {
          this.sectionRefs[this.getFormatedString(category)] = el;
        }}
      >
        <h4 id="general" className="c-brand-primary py2 f-15">
          {category}
        </h4>
        {faqs.map((question, index) => (
          <div
            key={this.getFormatedString(question.title)}
            // eslint-disable-next-line react/destructuring-assignment
            className={`faq-item ${this.state[`${category}-${index}`] ? 'active' : ''}`}
            onClick={this.categoryClicked(`${category}-${index}`)}
          >
            <p className="question">{question.title}</p>
            <div className="answer" dangerouslySetInnerHTML={{ __html: question.description }} />
          </div>
        ))}
      </div>
    );
  };
  /* eslint-enable react/no-danger */

  categoryClicked = category => () => {
    this.setState(prevState => ({ [category]: prevState[category] !== true }));
  };

  scrollToCategory = category => e => {
    e.preventDefault();
    const { history } = this.props;
    const hash = this.getFormatedString(category);
    history.push(`#${hash}`);
  };

  render() {
    const { categories } = this.state;
    return (
      <React.Fragment>
        <div className="hero-banner--default full-width-wrap">
          <div className="flex flex-wrap items-center full-height">
            <div className="banner-wrapper subpage-banner center">
              <h1>
                <span className="pre-text">We're here to help answer some</span>
                <span className="highlight-text">
                  <em>
                    FAQs
                    <br />
                  </em>
                </span>
                <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient">
                  &nbsp;
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="wrap mx-auto px3">
          <div className="faq-wrapper flex pt1 md-pt4 lg-pt4 mt2">
            <div className="filter-list-container">
              <h4 className="c-brand-primary py2 f-15 px2 border border-radius">Jump to</h4>
              <ul className="mr0 md-mr4 lg-mr4 mb4">
                {categories.map(category => (
                  <li key={`${category}-faqs-li-element`} className="block">
                    <Link
                      className="filter-list"
                      to={`#${category}`}
                      onClick={this.scrollToCategory(category)}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-grow">
              <div className="faq-intro mb3">
                <p className="f-18">
                  <strong>Yo</strong>
, thank you for wanting to know about AIME. We’ll do our best
                  to front foot some of the common questions. If we don’t nail them all, feel free
                  to
                  <Link to="/contact">ping us a note</Link>
. Your questions help us refine our
                  answers and we'll use them to update this space and help everyone to understand
                  AIME as quickly as possible.
                </p>
              </div>
              {categories.map(category => {
                return this.getAllFaqsFromCategory(category);
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
