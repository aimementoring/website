import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import List from 'aime-blueprint/lib/components/list';
import Anchor from '../../components/common/link';
import MovingWaves from '../../components/movingWaves';
import Layout from '../../hocs/basicLayout';
import styles from './know-aime.module.scss';

const VideoButton = dynamic(() => import('../../components/videoButton'));

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const VIMEO_PLAYER = 'https://player.vimeo.com/external';

const KnowAime = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.heroPanel}>
        <div className={styles.videoContainer}>
          <div className={styles.videoOverlay} />
          <div className={styles.backgroundVideoContainer}>
            <video
              autoPlay
              loop
              muted
              className={styles.bgVideo}
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
          <div className={styles.videoHeadline}>
            <div className={styles.headlineWrapper}>
              <Title type="headingLockup" className={styles.bannerHeader} theme={process.env.REACT_APP_THEME}>
                Get to know
                <strong>
                  AIME
                </strong>
              </Title>
            </div>
          </div>
        </div>
        <MovingWaves />
      </div>
      <div className={styles.grid}>
        <div className={styles.sidebar}>
          <div>
            <Title className={styles.featureSidebarTitle} type="h2Title">An intro to AIME</Title>
          </div>
          <Paragraph>
            The purpose of these resources is to provide a space for you to get to know AIME and
            understanding how it works. The nature of AIME as an organisation is it’s alive, like
            the kids and university students we work with and the world we inhabit, we move with the
            times, we adapt and evolve constantly. Can you keep up?
          </Paragraph>
          <div className={styles.sidebarButtons}>
            <Anchor to="/the-mentor" as="/the-mentor" className={styles.sidebarButton}>
              <span className={styles.downloadAction}>Read &quot;The Mentor&quot;</span>
            </Anchor>
            <Anchor to="/jack-manning-bancroft" as="/jack-manning-bancroft" className={styles.sidebarButton}>
              <span className={styles.downloadAction}>Meet Jack</span>
            </Anchor>
            <Anchor to="/impact" className={styles.sidebarButton}>
              <span className={styles.downloadAction}>Our impact</span>
            </Anchor>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.rowTitle}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              What’s the end game?
            </Title>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.tileHalf}>
              <Paragraph>
                Our vision is to bring rebellious mentoring to every campus in the world and see
                every university student across the earth mentoring high school kids who are being
                left behind.
              </Paragraph>
              <Paragraph>
                We’d love to do ourselves out of a job and have inspired a generation to lead,
                provided the tools, then be able to declare that the problem we set out to solve is
                solved, for example we want to see Indigenous educational inequality ended. We
                believe every non profit should have an exit strategy and should be trying to finish
                what they’ve started.
              </Paragraph>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/220543875.m3u8?s=fef0be1439c6cd9179ade0e502dea995e0a75a8f`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/cogs.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
                  Cogs
                </Title>
                <Paragraph>
                  This short film is directed by Oscar-winning filmmaker, Laurent Witz, and tells
                  the story of a world built on a mechanised system that favours only some. We
                  created it in the hope it would inspire others to join us in changing the way the
                  world works. It’s since won a Webby award and been viewed 20 million times across
                  a number of channels.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              Okay, how does it work?
            </Title>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.singleTile}>
              <div className={styles.singleTileVideo}>
                <Paragraph>
                  We build a World Of Mentoring, a bridge between university and high school which
                  mentors kids from Age 12-18 and features:
                </Paragraph>
                <Paragraph>
                  <ol>
                    <li>Free academic tutoring: between 20-30 sessions a year</li>
                    <li>45 one-hour AIME Theatre of Education sessions @ the university campus</li>
                    <li>One-on-one career transition support for the Year 12 kids</li>
                  </ol>
                </Paragraph>
                <Paragraph>
                  As a headline. This is not a one-on-one mentoring model. The program is guided by
                  a curriculum and all of our workshops happen on both the university and high
                  school campuses with groups of university students and high school kids together,
                  with a lead AIME mentor helping facilitate the delivery of the content.
                </Paragraph>
                <Paragraph>
                  The program is structured, has a start and end point, as we believe our role is to
                  be mentors and not saviours. That the ultimate success is the kids not wanting to
                  be in the program any more because they are stronger without us. There is no
                  contact outside of our programmed workshops.
                </Paragraph>
                <Paragraph>
                  Check out the videos below explaining the different elements we’ve developed to
                  the model.
                </Paragraph>
              </div>
              <div className={styles.singleTileCopy}>
                <video
                  autoPlay=""
                  loop=""
                  muted=""
                  playsInline=""
                  className={styles.matrixVideoFriendly}
                >
                  <track kind="captions" />
                  {/* @TODO: This video URL shouldn't be hardcoded, we should use CDN variable */}
                  <source
                    type="video/webm"
                    src="https://d2ylaz7bdw65jx.cloudfront.net/resources/Video/world-of-mentoring.webm"
                  />
                  {/* @TODO: This video URL shouldn't be hardcoded, we should use CDN variable */}
                  <source
                    type="video/mp4"
                    src="https://d2ylaz7bdw65jx.cloudfront.net/resources/Video/world-of-mentoring.mov"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              The Program Model
            </Title>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/289201000.m3u8?s=8e2156e4c6126f23d949d8ee81f22d4a14e3e2f7`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/program-day-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>{'What\'s a Program Day?'}</h3>
                <p className={styles.tileCopy}>
                  An explanation of what a Program Day is and how they work.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/243212684.m3u8?s=741dd0153164d1d5ae369cc5540a35df7662eade`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/programday.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Day in the Life: Program Day</h3>
                <p className={styles.tileCopy}>
                  A look inside how an AIME Program Day actually looks at the University of
                  Wollongong in New South Wales, Australia.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/289185456.m3u8?s=cc6bb0722818b162c8f16d9dbb8800ca53136864`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/tutor-squad-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>{'What\'s a Tutor Squad?'}</h3>
                <p className={styles.tileCopy}>
                  An explanation of what a Tutor Squad is and how they work.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/245127515.m3u8?s=b0f180b5cbd403dbddd5f01ed421e36c2e13bf4e`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/tutorsquads.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Day in the Life: Tutor Squads</h3>
                <p className={styles.tileCopy}>
                  {`A look inside an actual AIME tutor squad at St Scholastica's College in Glebe, New
                  South Wales, Australia.`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              What are some of the headlines on AIME?
            </Title>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.singleTile}>
              <div className={styles.singleTileVideo}>
                <Paragraph>
                  Started in 2005 with 25 kids and from 2005 to 2018. AIME has gone from:
                </Paragraph>
                <List
                  type="ulList"
                  list={[
                    '25 kids (mentees) > 10,000 kids',
                    'One country > Three countries (on the way to 4)',
                    '965 uni student mentors > 3000 uni student mentors',
                  ]}
                />
                <Paragraph>
                  <strong>
                    Headlines on the Founder and CEO
                  </strong>
                </Paragraph>
                <List
                  type="ulList"
                  list={[
                    'Founded AIME as a 19 year old uni student starting with 25 kids, in the third year of his degree.',
                    'CEO @ 22',
                    'Young Australian of the Year award recipient',
                    'Youngest person in Aus history to receive Hon Doctorate',
                    'AIME BRW 12th Best Place to Work in Asia',
                    'Got a book called The Mentor of which the proceeds raised fund our work globally',
                  ]}
                />
                <Paragraph>
                  <strong>
                    What are the Plans for the next 3 years?
                  </strong>
                </Paragraph>
                <List
                  type="ulList"
                  list={[
                    '20,000 Indigenous kids in Aus',
                    '20,000 kids in the US in 2020',
                    '100,000 kids worldwide by 2021',
                  ]}
                />
              </div>
              <div className={styles.tile}>
                <div>
                  <a target="_blank" href="https://www.youtube.com/embed/Mt5RxdQRFR4" rel="noopener noreferrer" aria-label="australian-story">
                    <div
                      className={styles.imageContainer}
                      style={{
                        backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/australian-story.jpg')`,
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    >
                      <img
                        alt="play-white"
                        className={styles.image}
                        src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
                    Australian Story
                  </Title>
                  <Paragraph>
                    30-minute life story piece about
                    AIME&apos;s founder Jack Manning Bancroft from 2012.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <Title type="h4Title" theme={process.env.REACT_APP_THEME}>
              How are we going to do that?
            </Title>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.tileHalf}>
              <Paragraph>
                In a simple sentence, we are looking to take the model back to where it started with
                our founder, a volunteer model led by university students to mentor high school
                kids. And as an organisation we are working round the clock to make the tools that
                will simplify the process for the university across the globe running AIME.
              </Paragraph>
              <Paragraph>
                To provide the training to take on the AIME for the US, Pacific, India, Africa,,
                we&apos;re chartering a plane to Sydney in Feb each year to target up to 20,000
                disadvantaged kids in one go. On the 2019 plane, 200 uni students from different US
                campuses and coming from disadvantaged backgrounds, will be flown alongside world
                class leaders, storytellers and performers, to be trained and inspired at the
                world&apos;s first ever&nbsp;
                <mark>
                  Festival of Mentoring
                </mark>
                . On return each of them will
                launch AIME in their campuses and aim to mobilise 100 mentors to work with 100
                disadvantaged school kids.
              </Paragraph>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/268931179.m3u8?s=4d7bec5817b90f9227891dd828e32deb91fa01e7`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/welcome.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <Title type="h5Title" theme={process.env.REACT_APP_THEME}>
                  Welcome to AIME
                </Title>
                <Paragraph>
                  If you were to watch one vid to get a quick sense of the AIME vibe this would be
                  it. It tells the AIME story alongside that of the oldest continuing surviving
                  culture, Indigenous Australians, from which AIME has its roots.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <h2 className={styles.extraTitle}>Extra Vids</h2>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/292061146.m3u8?s=a95ca7d917a8f9dca8b62fdcb3e6c489dd965962`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/schools-thumb.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Working with schools</h3>
                <p className={styles.tileCopy} />
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/289777493.m3u8?s=b1042cc2366711de08113f25f4d2f75ac37627a1`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/program-day.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>How do you Get the Mentees in the AIME Game?</h3>
                <p className={styles.tileCopy} />
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/289777576.m3u8?s=5f4f39a1d36e68a931ecabc1c8616829e5ab38dc`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/magic.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>
                  How do you actually &quot;Make Magic&quot; @ AIME?
                </h3>
                <p className={styles.tileCopy} />
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/289777932.m3u8?s=eee71c7e42ade6265d16671dc5598f64e1f3217c`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/recruit.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>How do you recruit the mentors?</h3>
                <p className={styles.tileCopy} />
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/290832087.m3u8?s=8346bcedbb18f0fc0a190ee6d689c7f6d72268a9`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/dream-team.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Building a Dream Team at AIME</h3>
                <p className={styles.tileCopy} />
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/240911502.m3u8?s=deef72c9a03970dbb582bfe5e14d8c4f1466d43c`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/anthem.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>The AIME Anthem 2017</h3>
                <p className={styles.tileCopy}>
                  Every year at AIME, a group of students from around the country travel to Sydney
                  to write the AIME anthem.
                  {' '}
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <VideoButton video={`${VIMEO_PLAYER}/240434781.m3u8?s=a3cc31f9ec4c9f8f9ac6d4fefcbc20ca34b20dff`} />
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/kindness.jpg')`,
                    backgroundSize: 'cover',
                    width: '100%',
                  }}
                >
                  <img
                    alt="Play"
                    className={styles.image}
                    src={`${ASSETS_URL}/assets/images/play-btn-white.svg`}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Sunrise to Sunset</h3>
                <p className={styles.tileCopy}>
                  On July 7 2017, from Sunrise to Sunset, we lit up the nation with letters of
                  kindness as Hoodie Day delivered the love to everyday Australians.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rowTitle}>
            <h2 className={styles.extraTitle}>More Resources</h2>
          </div>
          <div className={styles.mainGridRow}>
            <div className={styles.tile}>
              <div>
                <Anchor to="/story/the-backdrop-to-aime/">
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/banner/backdrop.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="Know AIME"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/link.svg`}
                    />
                  </div>
                </Anchor>
              </div>
              <div>
                <h3 className={styles.tileTitle}>The Backdrop to AIME</h3>
                <p className={styles.tileCopy}>
                  Aboriginal and Torres Strait Islander people, the two Indigenous groups in
                  Australia, were invaded by the British in 1788.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <a href="https://shop.aimementoring.com/collections/best-books-eva/products/the-mentor" aria-label="the-mentor">
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/thementor.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="shopping-cart"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/shopping-cart.svg`}
                    />
                  </div>
                </a>
              </div>
              <div>
                <h3 className={styles.tileTitle}>The Mentor</h3>
                <p className={styles.tileCopy}>
                  The Mentor. by AIME Founder and CEO Jack Manning Bancroft is the story of how it
                  all started. Gain a real insight into contemporary Indigenous Australia.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <a href="https://shop.aimementoring.com/products/mentoring-the-key-to-a-fairer-world" aria-label="mentoring-the-key-to-a-fairer-world">
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/mentoring.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="shopping-cart"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/shopping-cart.svg`}
                    />
                  </div>
                </a>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Mentoring: The key to a fairer world</h3>
                <p className={styles.tileCopy}>
                  {`This is AIME's story. It is a passionate account of what can be achieved through
                  bravery, imagination, daring, hard work and a belief that change is possible if we
                  work together, if we dream big and if we don't take 'no' for an answer.`}
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <Anchor to="/global-letter" as="/global-letter">
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/letter.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="Know AIME"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/link.svg`}
                    />
                  </div>
                </Anchor>
              </div>
              <div>
                <h3 className={styles.tileTitle}>Letter to Universities</h3>
                <p className={styles.tileCopy}>
                  It’s not every day that an idea that can change the world comes across your desk.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <a
                  href="https://www.dropbox.com/s/a1keneym7p32k7y/AJIE_PUBLISHED-no_shame_at_aime.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="no shame at aime"
                >
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/no-shame.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="download"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/Download.svg`}
                    />
                  </div>
                </a>
              </div>
              <div>
                <h3 className={styles.tileTitle}>No shame at AIME</h3>
                <p className={styles.tileCopy}>
                  Shame is a ‘slippery’ concept in educational contexts but by listening to
                  Aboriginal philosophy and Country, we can rethink its slipperiness.
                </p>
              </div>
            </div>
            <div className={styles.tile}>
              <div>
                <a
                  href="https://www.dropbox.com/s/2flcrg5q7i57bhb/AIME%20Mentoring-A%20Solution%20for%20Educational%20Inequality%20%20.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aime Mentoring a solution for education Inequality"
                >
                  <div
                    className={styles.imageContainer}
                    style={{
                      backgroundImage: `url('${ASSETS_URL}/assets/images/know-aime/white-paper.jpg')`,
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  >
                    <img
                      alt="download"
                      className={styles.image}
                      style={{ width: '50px' }}
                      src={`${ASSETS_URL}/assets/images/Download.svg`}
                    />
                  </div>
                </a>
              </div>
              <div>
                <h3 className={styles.tileTitle}>
                  AIME Mentoring - A Solution for Educational Inequality
                </h3>
                <p className={styles.tileCopy}>
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
