import React, { useState, useEffect } from 'react'
import { withRouter } from 'next/router';
import SeoMetadata from '../components/layoutComponents/seoMetaData'
import ErrorBoundary from '../components/common/errorBoundary'
import Header from '../components/layoutComponents/header'
import Footer from '../components/layoutComponents/footer'
import Logos from '../components/layoutComponents/logos'
import { getSeoTags } from '../services/craftAPI'
import './basicLayout.scss';

const withLayout = WrappedComponent => {
  const BasicLayout = ({ router, children }) => {
    const [seo, setSeo] = useState({})

    useEffect(() => {
      addSeoAndRedirects()
    }, [router])

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [router.pathname])
    
    const addSeoAndRedirects = () => {
      const { pathname } = router;
      getSeoTags(pathname.split('/')[1].length > 1 ? pathname : '').then(seo => setSeo(seo));
    }
  
    return (
      <div>
        <ErrorBoundary>
          <Header location={router} />
          <main role="main">
            <SeoMetadata seo={seo} />
            {children}
          </main>
          <WrappedComponent />
          <Footer location={router} />
          <Logos />
          <div id="aime-parent-video-box" />
        </ErrorBoundary>
      </div>
    )
  }
  return withRouter(BasicLayout)
}

export default withLayout
