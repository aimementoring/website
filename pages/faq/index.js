import React, { PureComponent } from 'react';
import Router from 'next/router';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import { getEntries } from '../../services/craftAPI';
import { isClientSide } from '../../utils/utilities';
import scrollToComponent from '../../utils/scrollToComponent';

class FAQs extends PureComponent {
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
    window.scrollTo(0, 0);
    const categories = ['General'];
    getEntries('faq').then((response) => {
      const faqsData = response.data;
      faqsData.forEach((faqsElement) => {
        faqsElement.categories.forEach((category) => {
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
    let hash = '';
    if (isClientSide()) {
      hash = window.location.hash.replace('#', '');
    }
    if (hash && this.sectionRefs[hash] && hash !== this.currentHash) {
      this.currentHash = hash;
      scrollToComponent(this.sectionRefs[hash]);
    }
  }

  getFormatedString = (stringToFormat) => {
    const str = stringToFormat.toLowerCase();
    const find = ' ';
    const find2 = '/';
    const replaceRegEx = new RegExp(find, 'g');
    const replaceRegEx2 = new RegExp(find2, 'g');
    return str.replace(replaceRegEx, '-').replace(replaceRegEx2, '-');
  };

  /* eslint-disable react/no-danger */
  getAllFaqsFromCategory = (category) => {
    const { faqsData } = this.state;
    const faqs = faqsData.filter((faq) => faq.categories.indexOf(category) > -1);
    return (
      <div
        key={`${category}-question-container`}
        ref={(el) => {
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
            onKeyPress={this.categoryClicked(`${category}-${index}`)}
            role="presentation"
          >
            <p className="question">{question.title}</p>
            <div className="answer" dangerouslySetInnerHTML={{ __html: question.description }} />
          </div>
        ))}
      </div>
    );
  };
  /* eslint-enable react/no-danger */

  categoryClicked = (category) => () => {
    this.setState((prevState) => ({ [category]: prevState[category] !== true }));
  };

  scrollToCategory = (category) => (e) => {
    e.preventDefault();
    if (isClientSide()) {
      const hash = this.getFormatedString(category);
      const path = Router.asPath.split('#')[0];
      Router.push(`${path}#${hash}`, `${path}#${hash}`, { shallow: true });

      if (hash && this.sectionRefs[hash] && hash !== this.currentHash) {
        this.currentHash = hash;
        scrollToComponent(this.sectionRefs[hash]);
      }
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <Layout>
        <div className="hero-banner--default full-width-wrap">
          <div className="flex flex-wrap items-center full-height">
            <div className="banner-wrapper subpage-banner center">
              <h1>
                <span className="pre-text">{'We\'re here to help answer some'}</span>
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
                {categories.map((category) => (
                  <li key={`${category}-faqs-li-element`} className="block">
                    <Anchor
                      className="filter-list"
                      to={`#${category}`}
                      onClick={this.scrollToCategory(category)}
                    >
                      {category}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-grow">
              <div className="faq-intro mb3">
                <p className="f-18">
                  <strong>Yo</strong>
                  {`, thank you for wanting to know about AIME. We’ll do our best
                  to front foot some of the common questions. If we don’t nail them all, feel free
                  to `}
                  <Anchor to="/contact">ping us a note</Anchor>
                  {`. Your questions help us refine our
                  answers and we'll use them to update this space and help everyone to understand
                  AIME as quickly as possible.`}
                </p>
              </div>
              {categories.map((category) => this.getAllFaqsFromCategory(category))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default FAQs;
