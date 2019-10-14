import React from 'react';
import './index.scss';

const CtaFAQ = () => (
  <div className="cta-faq-container xs-px2 sm-px2 md-px4 lg-px4">
    <a className="cta-faq-btn" href="https://intercom.help/aime-faqs/en/">
      <span className="cta-faq-text">Got questions? Check out our FAQs</span>
      <svg className="icon icon-arrow-next">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </a>
  </div>
);

export default CtaFAQ;
