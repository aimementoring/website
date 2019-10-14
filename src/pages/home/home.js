import React, { PureComponent } from 'react';
import HeroBannerHomepage from '../../components/heroBannerHomepage';
import IntroPanelHomepage from '../../components/introPanelHomepage';
import CtaGrid from '../../components/ctaGrid';
import CtaFAQ from '../../components/ctaFAQ';
import FooterBanner from '../../components/footerBanner';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { CTA_AU_HOMEPAGE } from '../../constants';

import './home.scss';

export default class Home extends PureComponent {
  // Starts hack fix to avoid double rendering
  // https://github.com/facebook/react/issues/8017#issuecomment-256351955
  constructor(props) {
    super(props);
    this.state = {
      hasMounted: false,
      firstVisitDone: false,
    };
  }

  componentDidMount() {
    const { firstVisitDone } = this.state;
    this.setState({ hasMounted: true });
    if (getFromStorage('home_first_visit')) {
      if (!firstVisitDone) { this.setState({ firstVisitDone: true }) }
    } else {
      setOnStorage('home_first_visit', true);
    }
  }

  render() {
    return (
      <div>
        <HeroBannerHomepage currentSite="au" />
        <IntroPanelHomepage />
        <CtaGrid elements={CTA_AU_HOMEPAGE} />
        <CtaFAQ />
        <FooterBanner />
      </div>
    );
  }
}
