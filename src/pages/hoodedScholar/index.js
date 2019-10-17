import React from 'react';
import PropTypes from 'prop-types';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import VideoButton from '../../components/videoButton';
import HoodedScholarForm from '../../components/eoiForm';
import VioletVideoCarousel from '../../components/carousel/customCarousels/violetCarousel';
import { STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS } from '../../constants';
import { uploadHoodedScholarEOI } from '../../services/portalApi';
import './hoodedScholar.scss';

const HoodedScholar = ({ history }) => {
  const assetsUrl = getAssetsBaseUrl();
  const sectionRefs = {};

  return (
    <div className="hoodedScholar">
      <div className="bg-darkest-purple">
        <div className="full-width-wrap" id="welcome">
          <div className="flex flex-wrap items-center">
            <div className="hero-panel banner-wrapper full-height section-background-image section-background-hoodie">
              <div className="vid-container">
                <div className="video-overlay" />
                <div className="bgVideo-container">
                  <video autoPlay muted loop preload="true" id="bgVideo">
                    <source
                      src={`${assetsUrl}/assets/media/SKATE_WEBSITE_BG_V002.webm`}
                      type="video/webm"
                    />
                    <source
                      src={`${assetsUrl}/assets/media/SKATE_WEBSITE_BG_V002.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="vid-headline flex align-items sm-col-12 md-col-8">
                  <div className="px1 center m3 mx-auto">
                    <h1 className="px1 pb2 center">
                      <span className="pre-text block light f-24 feature-font-family left-align">
                        The Hooded Hustle is closed
                      </span>
                      <span className="highlight-text hoodedScholar-highlight-text-heropanel highlight-text-straight m3">
                        <em className="">FAM 2019 is over</em>
                      </span>
                      <span className="pre-text block light f-24 feature-font-family left-align right">
                        &nbsp; &nbsp; Hooded Scholars are now on the ground
                        {' '}
                        <br />
                        changing their communities
                      </span>
                    </h1>
                    <div className="hero-panel-video-button video-button">
                      <VideoButton video="https://player.vimeo.com/external/326730824.m3u8?s=8a5a70de86434774c0dcd88509b8209666688eb5" />
                      <div className="video-banner-overlay center cursor-pointer">
                        <img
                          alt=""
                          className="center mx-auto"
                          style={{ width: '70px' }}
                          src={`${assetsUrl}/assets/images/play-btn-purple.svg`}
                        />
                      </div>
                      <h3>
                        <span className="text-highlight f-14">Watch the recap</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="section-hoodedScholar full-width-wrap bg-black pb3"
          id="challenge"
          ref={el => sectionRefs.challenge = el}
        >
          <div className="scratch-overlay-wrapper top-scratch bg-black" />
          <div className="md-wrap mx-auto">
            <div className="hs-info-grid py4">
              <div className="area-heading mx-auto pt2 pb4">
                <h1 className="c-white section-intro-heading">
                  This
                  {' '}
                  <br />
                  was
                  {' '}
                  <br />
                  the
                  {' '}
                  <strong>Hooded Hustle</strong>
                </h1>
                <span
                  className="sm-col-3 block pt2 border-bottom b-brand-tertiary b-width-5"
                  style={{ borderWidth: '5px' }}
                >
                  &nbsp;
                </span>
              </div>
              <div className="area-info mx-auto pt3">
                <div className="info-content-wrapper">
                  <h3 className="c-white info-content-heading mb3">
                    An opportunity of a
                    {' '}
                    <strong className="c-cmyk-blue">lifetime.</strong>
                  </h3>
                  <p className="c-white">
                    Last year, for the first time ever, AIME offered 200 US college &amp;
                    university students the chance to become
                    {' '}
                    <strong className="c-cmyk-pink">"The Hooded Scholar"</strong>
                    {' '}
and lead a
                    mentoring movement out of their campus to lift kids out of inequality.
                  </p>
                  <p className="c-white">
                    It was a chance for these students to arrest some control over the future
                    of their world, and to create a fairer planet together.
                  </p>
                  <p className="c-white">
                    Each Hooded Scholarship was
                    {' '}
                    <strong className="c-cmyk-yellow">valued at over $50k</strong>
                    {' '}
and
                    included
                    <strong className="c-cmyk-pink">flights to Australia</strong>
. The impact
                    each of these Hooded Scholars now hold, is priceless! Check out the promo
                    video of our CEO &amp; Founder, Jack, sharing why this opportunity was
                    made available, and will continue to be made available for young
                    revolutionaries.
                  </p>
                </div>
              </div>
              <div className="intro-video-wrap">
                <VideoButton video="https://player.vimeo.com/external/291824681.m3u8?s=72b6495e46fda3de6fe84bd1a158fed3c311716c" />
                <div className="video-banner flex block rounded">
                  <div className="video-banner-overlay center">
                    <img
                      alt=""
                      className="center mx-auto mt2"
                      style={{ width: '70px' }}
                      src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                    />
                    <h3>A message from Jack,</h3>
                    <p>CEO &amp; Founder of AIME</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-hoodedScholar full-width-wrap section-background-image banner-bianca py1">
          <div className="scratch-overlay-wrapper top-scratch bg-black" />
          <div className="video-banner-cta hero endorsement-wrap my4 flex flex-column items-center justify-center changed">
            <div className="video-button mx-auto items-center p3">
              <VideoButton video="https://player.vimeo.com/external/326730824.m3u8?s=8a5a70de86434774c0dcd88509b8209666688eb5" />
              <div className="video-banner-overlay center cursor-pointer">
                <img
                  alt="play video"
                  className="center mx-auto my2"
                  style={{ width: '100px' }}
                  src={`${assetsUrl}/assets/images/play-btn-white.svg`}
                />
                <h2>Watch the FAM 2019 wrap up video</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section-hoodedScholar full-width-wrap section-background-image section-background-space py4">
          <div className="scratch-overlay-wrapper top-scratch bg-black" />
          <div className="wrap section-hoodedScholar pt2 pb4 flex flex-row flex-wrap">
            <div className="section-hoodedScholar-column sm-col-12 md-col-9 mx-auto px2">
              <div className="sm-col sm-col-12 clearfix pt3">
                <h4 className="highlight-text sm-col-8 sml-rotate">Do you want in?</h4>
                <h5 className="sm-col sm-col-12 md-col-8 c-white pt2 pb3">
                  We're not recruiting for Hooded Scholars right now, but time flies and it
                  won't be long until we're on the hunt again. If you're keen to express your
                  interest in applying for our 2020 intake, fill in your details below and
                  we’ll email you when applications are open again.
                  {' '}
                </h5>
              </div>
              <HoodedScholarForm history={history} uploadData={uploadHoodedScholarEOI} />
            </div>
          </div>
        </section>
        <VioletVideoCarousel
          title="Get to know AIME"
          elements={STUDENT_CHAPTER_FIRST_VIDEO_CAROUSEL_ELEMENTS}
        />
      </div>
    </div>
  );
}

HoodedScholar.propTypes = {
  location: PropTypes.object.isRequired
};

export default HoodedScholar;
