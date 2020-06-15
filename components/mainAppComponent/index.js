import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import {
  DefaultSeo, BreadcrumbJsonLd, ArticleJsonLd, BlogJsonLd,
} from 'next-seo';
import SeoComponent from '../seoComponent';
import DonateModal from '../donateModal';
import ContactModal from '../contactModal';
import { GLOBAL_TAGS } from '../../constants/seoTags';

const TYPE_MAPPING = {
  BreadcrumbList: BreadcrumbJsonLd,
  Article: ArticleJsonLd,
  WebSite: BlogJsonLd,
};

const { jsonLd, ...defaultSeoProps } = GLOBAL_TAGS;

const MainAppContent = ({ router }) => (
  <>
    <DefaultSeo {...defaultSeoProps} />
    <SeoComponent page={router.asPath} />
    {jsonLd && jsonLd.length > 0 && jsonLd.map(({ type, name, ...props }) => {
      if (type in TYPE_MAPPING) {
        const JsonLdComponent = TYPE_MAPPING[type];
        return <JsonLdComponent {...props} name={name} key={`${type}_${name}`} />;
      }
      return null;
    })}
    <DonateModal />
    <ContactModal />
  </>
);

MainAppContent.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    asPath: PropTypes.string,
    query: PropTypes.shape({}),
  }).isRequired,
};

export default withRouter(MainAppContent);
