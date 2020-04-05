import React from 'react';
import {
  NextSeo, BreadcrumbJsonLd, ArticleJsonLd, BlogJsonLd,
} from 'next-seo';
import PropTypes from 'prop-types';
import { SEO_TAGS } from '../../constants/seoTags';

const TYPE_MAPPING = {
  BreadcrumbList: BreadcrumbJsonLd,
  Article: ArticleJsonLd,
  WebSite: BlogJsonLd,
};

const SeoComponent = ({ page }) => {
  const tags = page in SEO_TAGS ? SEO_TAGS[page] : null;
  if (tags) {
    const {
      jsonLd,
      ...seoProps
    } = tags;
    return (
      <>
        <NextSeo {...seoProps} />
        {jsonLd && jsonLd.length > 0 && jsonLd.map(({ type, name, ...props }) => {
          const Component = TYPE_MAPPING[type];
          return <Component {...props} name={name} key={`${type}_${name}`} />;
        })}
      </>
    );
  }
  return null;
};

SeoComponent.propTypes = {
  page: PropTypes.string,
};

SeoComponent.defaultProps = {
  page: '',
};

export default SeoComponent;
