import React from 'react';
import dynamic from 'next/dynamic';
import Anchor from '../../components/common/link';
import Layout from '../../hocs/basicLayout';
import './knowAime.scss';

const CtaFAQ = dynamic(() => import(/* webpackChunkName 'CtaFAQ' */ '../../components/ctaFAQ'));
const VideoButton = dynamic(() => import(/* webpackChunkName 'VideoButton' */ '../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const KnowAime = () => (
  <Layout>
    <div className="knowAime">
      <div className="hero-panel banner-wrapper full-height section-background-image section-background-aime-short">
        <div className="vid-container">
          <div className="video-overlay" />
          <div className="bgVideo-container">
            <video
              autoPlay
              loop
              muted
              id="bgVideo"
              poster={`${ASSETS_URL}/assets/media/website_montage1_V001.gif`}
            >
              <source
                src={`${ASSETS_URL}/assets/media/website_montage1_V001.webm`}
                type="video/webm"
              />
              <source
                src={`${ASSETS_URL}/assets/media/website_montage1_V001.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="vid-headline flex align-items xs-py4">
            <div className="px1 center m3">
              <h1>
                <span className="pre-text center light f-24 feature-font-family">Get to know</span>
                <span className="highlight-text highlight-text-straight knowAime-highlight-text">
                  AIME
                </span>
                <hr className="highlight-hr mt3 mx-auto" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scratch-overlay-wrapper top-scratch bg-white" />
      <div className="grid">
        <div className="baseGrid sidebar">
          <div className="">
            <h2 className="sidebarTitle feature-font-family">An intro to AIME</h2>
            <hr className="sidebarTitle-hr gradient-purple" />
          </div>
          <p className="f-14">
            The purpose of these resources is to provide a space for you to get to know AIME and
            understanding how it works. The nature of AIME as an organisation is it’s alive, like
            the kids and university students we work with and the world we inhabit, we move with the
            times, we adapt and evolve constantly. Can you keep up?
          </p>
          <div className="buttons-container pt4">
            <Anchor to="/theMentor" as="/the-mentor" className="ghost-btn bg-brand-primary c-white mb2">
              <span className=" download-btn-text">Read &quot;The Mentor&quot;</span>
            </Anchor>
            <Anchor to="/founder" as="/jack-manning-bancroft" className="ghost-btn bg-brand-primary c-white mb2">
              <span className=" download-btn-text">Meet Jack</span>
            </Anchor>
            <Anchor to="/impact" className="ghost-btn bg-brand-primary c-white mb2">
              <span className=" download-btn-text">Our impact</span>
            </Anchor>
          </div>
        </div>
        <div className="baseGrid main-content">
          <div className="rowTitle">
            <h2 className="feature-font-family">What’s the end game?</h2>
          </div>
          <div className="firstRow main-grid">
            <div className="tile tile--half">
              <p>
                Our vision is to bring rebellious mentoring to every campus in the world and see
                every university student across the earth mentoring high school kids who are being
                left behind.
              </p>
              <p>
                We’d love to do ourselves out of a job and have inspired a generation to lead,
                provided the tools, then be able to declare that the problem we set out to solve is
                solved, for example we want to see Indigenous educational inequality ended. We
                believe every non profit should have an exit strategy and should be trying to finish
                what they’ve started.
              </p>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/cogs.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Cogs</h3>
                <p className="tile-copy">
                  This short film is directed by Oscar-winning filmmaker, Laurent Witz, and tells
                  the story of a world built on a mechanised system that favours only some. We
                  created it in the hope it would inspire others to join us in changing the way the
                  world works. It’s since won a Webby award and been viewed 20 million times across
                  a number of channels.
                </p>
              </div>
            </div>
          </div>
          <div className="rowTitle">
            <h2 className="feature-font-family">Okay, how does it work?</h2>
          </div>
          <div className="secondRow main-grid">
            <div className="single-tile">
              <div className="single-tile-video">
                <p>
                  We build a World Of Mentoring, a bridge between university and high school which
                  mentors kids from Age 12-18 and features:
                </p>
                <ol>
                  <li>Free academic tutoring: between 20-30 sessions a year</li>
                  <li>45 one-hour AIME Theatre of Education sessions @ the university campus</li>
                  <li>One-on-one career transition support for the Year 12 kids</li>
                </ol>
                <p>
                  As a headline. This is not a one-on-one mentoring model. The program is guided by
                  a curriculum and all of our workshops happen on both the university and high
                  school campuses with groups of university students and high school kids together,
                  with a lead AIME mentor helping facilitate the delivery of the content.
                </p>

                <p>
                  The program is structured, has a start and end point, as we believe our role is to
                  be mentors and not saviours. That the ultimate success is the kids not wanting to
                  be in the program any more because they are stronger without us. There is no
                  contact outside of our programmed workshops.
                </p>

                <p>
                  Check out the videos below explaining the different elements we’ve developed to
                  the model.
                </p>
              </div>
              <div className="single-tile-copy">
                <video
                  autoPlay=""
                  loop=""
                  muted=""
                  playsInline=""
                  className="xs-hide sm-hide w100 matrix-video-friendly"
                >
                  <track kind="captions" />
                  <source
                    type="video/webm"
                    src="https://d2ylaz7bdw65jx.cloudfront.net/resources/Video/world-of-mentoring.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://d2ylaz7bdw65jx.cloudfront.net/resources/Video/world-of-mentoring.mov"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="rowTitle">
            <h2 className="feature-font-family">The Program Model</h2>
          </div>
          <div className="secondRow main-grid">
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/program-day-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">{'What\'s a Program Day?'}</h3>
                <p className="tile-copy">
                  An explanation of what a Program Day is and how they work.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/243212684.m3u8?s=741dd0153164d1d5ae369cc5540a35df7662eade" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/programday.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Day in the Life: Program Day</h3>
                <p className="tile-copy">
                  A look inside how an AIME Program Day actually looks at the University of
                  Wollongong in New South Wales, Australia.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289185456.m3u8?s=cc6bb0722818b162c8f16d9dbb8800ca53136864" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/tutor-squad-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">{'What\'s a Tutor Squad?'}</h3>
                <p className="tile-copy">
                  An explanation of what a Tutor Squad is and how they work.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/245127515.m3u8?s=b0f180b5cbd403dbddd5f01ed421e36c2e13bf4e" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/tutorsquads.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Day in the Life: Tutor Squads</h3>
                <p className="tile-copy">
                  {`A look inside an actual AIME tutor squad at St Scholastica's College in Glebe, New
                  South Wales, Australia.`}
                </p>
              </div>
            </div>
          </div>
          <div className="rowTitle">
            <h2 className="feature-font-family">What are some of the headlines on AIME?</h2>
          </div>
          <div className="secondRow main-grid">
            <div className="single-tile">
              <div className="single-tile-video">
                <p>Started in 2005 with 25 kids and from 2005 to 2018 AIME has gone from:</p>
                <ul>
                  <li>{'25 kids (mentees) > 10,000 kids'}</li>
                  <li>{'One country > Three countries (on the way to 4)'}</li>
                  <li>{'965 uni student mentors > 3000 uni student mentors'}</li>
                </ul>
                <h3 className="mb2">Headlines on the Founder and CEO</h3>
                <ul>
                  <li>
                    Founded AIME as a 19 year old uni student starting with 25 kids, in the third
                    year of his degree.
                  </li>
                  <li>CEO @ 22</li>
                  <li>Young Australian of the Year award recipient</li>
                  <li>Youngest person in Aus history to receive Hon Doctorate</li>
                  <li>AIME BRW 12th Best Place to Work in Asia</li>
                  <li>
                    Got a book called The Mentor of which the proceeds raised fund our work globally
                  </li>
                </ul>
                <h3 className="mb2">What are the Plans for the next 3 years?</h3>
                <ul>
                  <li>20,000 Indigenous kids in Aus</li>
                  <li>20,000 kids in the US in 2020</li>
                  <li>100,000 kids worldwide by 2021</li>
                </ul>
              </div>
              <div className="tile">
                <div className="">
                  <a target="_blank" href="https://www.youtube.com/embed/Mt5RxdQRFR4" rel="noopener noreferrer" aria-label="australian-story">
                    <div
                      className="flex items-center video-button rounded"
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/australian-story.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt="play-white"
                        className="center mx-auto"
                        style={{ width: '70px' }}
                        src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className="tile-title">Australian Story</h3>
                  <p className="tile-copy">
                    {'30-minute life story piece about AIME\'s founder Jack Manning Bancroft from 2012'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rowTitle">
            <h2 className="feature-font-family">How are we going to do that?</h2>
          </div>
          <div className="firstRow main-grid">
            <div className="tile tile--half">
              <p>
                In a simple sentence, we are looking to take the model back to where it started with
                our founder, a volunteer model led by university students to mentor high school
                kids. And as an organisation we are working round the clock to make the tools that
                will simplify the process for the university across the globe running AIME.
              </p>
              <p>
                {`To provide the training to take on the AIME for the US, Pacific, India, Africa,,
                we're chartering a plane to Sydney in Feb each year to target up to 20,000
                disadvantaged kids in one go. On the 2019 plane, 200 uni students from different US
                campuses and coming from disadvantaged backgrounds, will be flown alongside world
                class leaders, storytellers and performers, to be trained and inspired at the
                world's first ever`}
                <stong>Festival of Mentoring</stong>
  . On return each of them will
                launch AIME in their campuses and aim to mobilise 100 mentors to work with 100
                disadvantaged school kids.
              </p>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/268931179.m3u8?s=4d7bec5817b90f9227891dd828e32deb91fa01e7" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/welcome.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Welcome to AIME</h3>
                <p className="tile-copy">
                  If you were to watch one vid to get a quick sense of the AIME vibe this would be
                  it. It tells the AIME story alongside that of the oldest continuing surviving
                  culture, Indigenous Australians, from which AIME has its roots.
                </p>
              </div>
            </div>
          </div>
          <CtaFAQ />
          <div className="rowTitle">
            <h2 className="feature-font-family">Extra Vids</h2>
          </div>
          <div className="forthRow main-grid">
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/292061146.m3u8?s=a95ca7d917a8f9dca8b62fdcb3e6c489dd965962" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/schools-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Working with schools</h3>
                <p className="tile-copy" />
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289777493.m3u8?s=b1042cc2366711de08113f25f4d2f75ac37627a1" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/program-day.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">How do you Get the Mentees in the AIME Game?</h3>
                <p className="tile-copy" />
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289777576.m3u8?s=5f4f39a1d36e68a931ecabc1c8616829e5ab38dc" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/magic.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">How do you actually &quot;Make Magic&quot; @ AIME?</h3>
                <p className="tile-copy" />
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/289777932.m3u8?s=eee71c7e42ade6265d16671dc5598f64e1f3217c" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/recruit.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">How do you recruit the mentors?</h3>
                <p className="tile-copy" />
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/290832087.m3u8?s=8346bcedbb18f0fc0a190ee6d689c7f6d72268a9" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/dream-team.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Building a Dream Team at AIME</h3>
                <p className="tile-copy" />
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/240911502.m3u8?s=deef72c9a03970dbb582bfe5e14d8c4f1466d43c" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/anthem.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">The AIME Anthem 2017</h3>
                <p className="tile-copy">
                  Every year at AIME, a group of students from around the country travel to Sydney
                  to write the AIME anthem.
                  {' '}
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <VideoButton video="https://player.vimeo.com/external/240434781.m3u8?s=a3cc31f9ec4c9f8f9ac6d4fefcbc20ca34b20dff" />
                <div
                  className="flex items-center video-button rounded"
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/kindness.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt=""
                    className="center mx-auto"
                    style={{ width: '70px' }}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="tile-title">Sunrise to Sunset</h3>
                <p className="tile-copy">
                  On July 7 2017, from Sunrise to Sunset, we lit up the nation with letters of
                  kindness as Hoodie Day delivered the love to everyday Australians.
                </p>
              </div>
            </div>
          </div>
          <div className="rowTitle">
            <h2 className="feature-font-family">More Resources</h2>
          </div>
          <div className="forthRow main-grid">
            <div className="tile">
              <div className="">
                <Anchor to="/story/the-backdrop-to-aime/">
                  <div
                    className="lex items-center image-button rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/banner/backdrop.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/link.svg`}
                    />
                  </div>
                </Anchor>
              </div>
              <div className="">
                <h3 className="tile-title">The Backdrop to AIME</h3>
                <p className="tile-copy">
                  Aboriginal and Torres Strait Islander people, the two Indigenous groups in
                  Australia, were invaded by the British in 1788.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <a href="https://shop.aimementoring.com/collections/best-books-eva/products/the-mentor" aria-label="the-mentor">
                  <div
                    className="flex image-button items-center rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/thementor.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="shopping-cart"
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/shopping-cart.svg`}
                    />
                  </div>
                </a>
              </div>
              <div className="">
                <h3 className="tile-title">The Mentor</h3>
                <p className="tile-copy">
                  The Mentor. by AIME Founder and CEO Jack Manning Bancroft is the story of how it
                  all started. Gain a real insight into contemporary Indigenous Australia.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <a href="https://shop.aimementoring.com/products/mentoring-the-key-to-a-fairer-world" aria-label="mentoring-the-key-to-a-fairer-world">
                  <div
                    className="flex image-button items-center rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/mentoring.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="shopping-cart"
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/shopping-cart.svg`}
                    />
                  </div>
                </a>
              </div>
              <div className="">
                <h3 className="tile-title">Mentoring: The key to a fairer world</h3>
                <p className="tile-copy">
                  {`This is AIME's story. It is a passionate account of what can be achieved through
                  bravery, imagination, daring, hard work and a belief that change is possible if we
                  work together, if we dream big and if we don't take 'no' for an answer.`}
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <Anchor to="/globalLetter" as="/global-letter">
                  <div
                    className="flex image-button items-center rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/letter.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt=""
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/link.svg`}
                    />
                  </div>
                </Anchor>
              </div>
              <div className="">
                <h3 className="tile-title">Letter to Universities</h3>
                <p className="tile-copy">
                  It’s not every day that an idea that can change the world comes across your desk.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <a
                  href="https://www.dropbox.com/s/a1keneym7p32k7y/AJIE_PUBLISHED-no_shame_at_aime.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="no shame at aime"
                >
                  <div
                    className="flex image-button items-center rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/no-shame.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="download"
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/Download.svg`}
                    />
                  </div>
                </a>
              </div>
              <div className="">
                <h3 className="tile-title">No shame at AIME</h3>
                <p className="tile-copy">
                  Shame is a ‘slippery’ concept in educational contexts but by listening to
                  Aboriginal philosophy and Country, we can rethink its slipperiness.
                </p>
              </div>
            </div>
            <div className="tile">
              <div className="">
                <a
                  href="https://www.dropbox.com/s/2flcrg5q7i57bhb/AIME%20Mentoring-A%20Solution%20for%20Educational%20Inequality%20%20.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aime Mentoring a solution for education Inequality"
                >
                  <div
                    className="flex image-button items-center rounded"
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/white-paper.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="download"
                      className="center mx-auto"
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/Download.svg`}
                    />
                  </div>
                </a>
              </div>
              <div className="">
                <h3 className="tile-title">
                  AIME Mentoring - A Solution for Educational Inequality
                </h3>
                <p className="tile-copy">
                  This White Paper explores issues of educational inequality in the U.S. and
                  presents an evidence-based case for AIME.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default KnowAime;
