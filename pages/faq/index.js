import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import { getEntries } from '../../services/craftAPI';
import { isClientSide } from '../../utils/utilities';
import scrollToComponent from '../../utils/scrollToComponent';

const FAQs = ({ faqsData, categories }) => {
  const [state, setState] = useState({});
  const sectionRefs = {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowIntercom = () => {
    window.Intercom('show');
  };

  let hash = '';
  if (isClientSide()) {
    hash = window.location.hash.replace('#', '');
  }
  useEffect(() => {
    if (hash && sectionRefs[hash]) {
      scrollToComponent(sectionRefs[hash]);
    }
  }, [hash]);

  const getFormatedString = (stringToFormat) => stringToFormat.toLowerCase().replace(/[ /]/g, '-');

  const categoryClicked = (category) => () => {
    setState({ ...state, [category]: state[category] !== true });
  };

  const getAllFaqsFromCategory = (category) => {
    const faqs = faqsData.filter((faq) => faq.categories.indexOf(category) > -1);
    return (
      <div
        key={`${category}-question-container`}
        ref={(el) => {
          sectionRefs[getFormatedString(category)] = el;
        }}
      >
        <h4 id="general" className="c-brand-primary py2 f-15">
          {category}
        </h4>
        {faqs.map((question, index) => (
          <div
            key={getFormatedString(question.title)}
            className={`faq-item ${state[`${category}-${index}`] ? 'active' : ''}`}
            onClick={categoryClicked(`${category}-${index}`)}
            onKeyPress={categoryClicked(`${category}-${index}`)}
            role="presentation"
          >
            <p className="question">{question.title}</p>
            {/* eslint-disable react/no-danger */}
            <div className="answer" dangerouslySetInnerHTML={{ __html: question.description }} />
            {/* eslint-enable react/no-danger */}
          </div>
        ))}
      </div>
    );
  };

  const scrollToCategory = (category) => (e) => {
    e.preventDefault();
    if (isClientSide()) {
      const newHash = getFormatedString(category);
      const path = Router.asPath.split('#')[0];
      Router.push(`${path}#${newHash}`, `${path}#${newHash}`, { shallow: true });

      if (newHash && sectionRefs[newHash] && newHash !== hash) {
        hash = newHash;
        scrollToComponent(sectionRefs[newHash]);
      }
    }
  };

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
                    onClick={scrollToCategory(category)}
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
                <button onClick={handleShowIntercom} type="button" aria-label="Ping us a note">ping us a note</button>
                {`. Your questions help us refine our
                answers and we'll use them to update this space and help everyone to understand
                AIME as quickly as possible.`}
              </p>
            </div>
            {categories.map((category) => getAllFaqsFromCategory(category))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

FAQs.getInitialProps = async () => {
  const categories = ['General'];
  const response = await getEntries('faq');
  const faqsData = response.data;
  faqsData.forEach((faqsElement) => {
    faqsElement.categories.forEach((category) => {
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
  });
  return { categories, faqsData };
};

FAQs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  faqsData: PropTypes.arrayOf(
    PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

FAQs.defaultProps = {
  faqsData: [],
};

export default FAQs;
