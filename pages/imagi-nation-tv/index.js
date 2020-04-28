import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import VideoPlayer from '../../components/videoPlayer';
import FeaturedProduct from '../../components/featuredProduct';
import WavyDonateSection from '../../components/wavyDonateSection';
import TypeformModal from '../../components/typeformModal';
import styles from './styles.module.scss';

const ImaginationTvCard = dynamic(() => import('../../components/imaginationTv/imaginationTvCard'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => {
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);

  return (
    <Layout>
      <div className={styles.heroBannerImagiTV}>
        <div className={styles.bannerWrapper}>
          <div className={`${styles.bannerContent} ${styles.bannerItem}`}>
            <Title className={styles.welcomeTitle} type="headingLockup" theme={process.env.REACT_APP_THEME}>
            Introducing
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
                alt="Imagi-Nation TV"
                className={styles.logoImagiTV}
              />
            </Title>
            <Paragraph>
              <strong><mark>&nbsp;Live every weekday 12pm AEST&nbsp;</mark></strong>
              <br />
              <br />
            A chance for kids at home to have mentors in their lives to
              {' '}
              <em>Make Sense of Today & Imagine Tomorrow</em>
  .
            </Paragraph>

            <Button
              theme={process.env.REACT_APP_THEME}
              // onClickFunction={scrollHandler}
              className={`${styles.watchBtn}`}
              url="https://www.youtube.com/user/aimementoring/live"
              target="_blank"
              type="link"
            >
            Watch live on YouTube
            </Button>
          </div>

          <div className={`${styles.bannerMediaFeature} ${styles.bannerItem} ${styles.welcomeVideoWrapper}`}>
            <VideoPlayer
              url="https://player.vimeo.com/external/410482407.m3u8?s=ba7787f5d791c00de586ebbe81529c8ad01b835f"
              imageUrl={`${ASSETS_URL}/assets/images/illustrations/intv-hosts@2x.jpg`}
            >
              <Paragraph className="videoCaption">
                <a
                  className={styles.textLinkChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCDL9R_msvYDyHF7lx0NEyow?sub_confirmation=1"
                >
              Subscribe to our channel
                </a>
              </Paragraph>
            </VideoPlayer>
          </div>

        </div>
      </div>
      <div className={styles.inTVContentWrapper}>
        <section className={styles.inTVEpisodesWrapper}>
          <div className={`${styles.introEpisodes} ${styles.episodePanel}`}>
            <Title className={styles.subTitle} type="h3Title" theme={process.env.REACT_APP_THEME}>
            A mentor in the home for every kid, every day.
            </Title>
            <Paragraph>
            This is a show for those kids sitting at the back of the classroom,
            delivering the message that we see them, that there are a multitude
            of kids just like them ready to rise up, and that this is their moment to lead.
            </Paragraph>
            <Paragraph>
            And today, it’s about those with knowledge and experience gathering together
            in one moment so we are not alone, so that we move through tough times and
            great times with a sense of connectedness.
            </Paragraph>
          </div>
          <ImaginationTvCard
            day="Monday"
            title="Thinkers"
            image="thinkers_computer"
            color="lightblue"
          >
            <Paragraph>
            World-class teachers and knowledge holders, across our schools and
            universities and further abroad; the philosophers & big picture thinkers
            of the world.
            </Paragraph>
          </ImaginationTvCard>
          <ImaginationTvCard
            day="Tuesday"
            title="Youngsters"
            image="youngsters_mobile"
            color="aquamarine"
          >
            <Paragraph>
              <strong>
              Presidential Speech for IMAGI-NATION
              </strong>
            </Paragraph>
            <Paragraph>
            Every week, students from across the world are given the stage to deliver a
            3-minute speech as the President of IMAGI-NATION. They will focus on the topic
            of the week, and use the space to inspire us all to make sense of the world
            today so we can imagine the world tomorrow.
            </Paragraph>
            <Paragraph>
              <strong>
              CHAOS Classroom
              </strong>
            </Paragraph>
            <Paragraph>
            Join AIME Founder & CEO Jack Manning Bancroft and students from across
            Australia and around the world who will take part in a 7 minute hyperdrive
            lesson on the topic theme of the week. See a real life case study as to how
            to run a classroom digitally amongst the chaos of today.
            </Paragraph>
            <Paragraph>
            We’ll also be inviting boss human guest teachers take on the reins of
            the CHAOS Classroom and run a session on any one of our 21 core values.
            </Paragraph>
          </ImaginationTvCard>
          <ImaginationTvCard
            day="Wednesday"
            title="Designers"
            image="designers_tv"
            color="orange"
          >
            <Paragraph>
            Those building the world today and tomorrow.
            There’s no limit to what we believe is “design”.
            </Paragraph>
            <Paragraph>
            You’ll have the chance to dance around a big picture topic with 2
            other panelists. We are elevating the knowledge of designers who have
            got us here today, who have created the world we live in. We are
            exploring the mindsets, processes, philosophy and thinking patterns
            that have taken you to where you are now.
            </Paragraph>
          </ImaginationTvCard>
          <ImaginationTvCard
            day="Thursday"
            title="Keynote"
            image="keynote_tablet"
            color="purple"
          >
            <Paragraph>
              <strong>
              &quot;Cancelled, not cancelled&quot;
              </strong>
            </Paragraph>
            <Paragraph>
            Each week AIME gives the stage to a festival or conference that has been
            cancelled to have some level of publicity and promotion.
            </Paragraph>
            <Paragraph>
            To inspire marginalised kids to rise up and change their world.
            To inspire us all to seek knowledge, to find inspiration in ideas, and
            embrace the kindness of someone sharing what they know with us.
            </Paragraph>
          </ImaginationTvCard>
          <ImaginationTvCard
            day="Friday"
            title="Artists"
            image="artists_tv"
            color="pink"
          >
            <Paragraph>
              <strong>
              What can we create in 25 minutes?
              </strong>
            </Paragraph>
            <Paragraph>
            Up to 5 artists will join us for 25 minutes to set out on a creative
            adventure. To make something from nothing. To show us that we all have
            art in us, we can all create, if only we begin to imagine.
            </Paragraph>
            <Paragraph>
              <strong>
              Musician performance &quot;Let the music play&quot;
              </strong>
            </Paragraph>
            <Paragraph>
            Each week, AIME will profile musicians who will have the chance to play
            a song live on IMAGI-NATION TV. We see the value of music to bring people
            together, to inspire us in dark times, to give us love and hope. This
            segment is to keep the music playing in the face of concerts, festivals
            and gigs being cancelled worldwide.
            </Paragraph>
          </ImaginationTvCard>
        </section>
        <WavyDonateSection />
        <section className={styles.featuredProductWrapper}>
          <FeaturedProduct
            imageUrl={`${ASSETS_URL}/assets/images/apparel/hoodie-imagination.jpg`}
            pretitle="Check it out …"
            title="Imagi-Nation Hoodie"
            text={'Support IN{TV}, checkout the Imagi-Nation Hoodie for sale over at our apparel shop. Every sale from this hoodie goes towards keeping mentors in our global virtual classrooms!'}
            linkUrl={`${SHOP_PRODUCT_LINK}/imagi-nation-hoodie`}
            linkText="Buy a Hoodie"
          />
        </section>
        <div className={styles.tempIntvPWrapper}>
          <IntvPartners />
        </div>
        <div>
          Already a partner?
          <Button type="text" onClickFunction={toggleModal}>
            Click here!
          </Button>
          <TypeformModal visible={showModal} toggleModal={toggleModal} />
        </div>
      </div>
    </Layout>
  );
};

export default ImagiNationTV;
