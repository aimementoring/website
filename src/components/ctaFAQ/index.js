import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const CtaFAQ = () => (
  <div className="cta-faq-container xs-px2 sm-px2 md-px4 lg-px4">
    <Link to="/faq" className="cta-faq-btn">
      <span className="cta-faq-text">Got questions? Check out our FAQs</span>
      <svg className="icon icon-arrow-next">
        <use xlinkHref="#icon-arrow-next" />
      </svg>
    </Link>
  </div>
);

export default CtaFAQ;
