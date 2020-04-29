import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import Button from 'aime-blueprint/lib/components/button';
import Layout from '../../hocs/basicLayout';
import Anchor from '../../components/common/link';
import FeaturedProduct from '../../components/featuredProduct';
import IntercomChat from '../../components/intercom';
import styles from './styles.module.scss';

const DoubleCurvedLine = dynamic(() => import('../../components/imaginationTv/doubleCurvedLine'));
const ImaginationTvCard = dynamic(() => import('../../components/imaginationTv/imaginationTvCard'));
const IntvPartners = dynamic(() => import('../../components/intvPartners'));
const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;
const SHOP_PRODUCT_LINK = process.env.REACT_APP_SHOP_PRODUCT_LINK;

const ImagiNationTV = () => (
  <Layout>
    <div className={styles.heroBannerImagiTV}>
      <div className={styles.subpageBannerWrapper}>
        <div className={styles.bannerContent}>
          <div className={styles.imagiBannerHeader}>
            <Title className={styles.welcomeTitle} type="h3Title" theme={process.env.REACT_APP_THEME}>
              Welcome to
              <strong className={styles.hiddenTitle}>Imagi-Nation TV</strong>
              <img
                src={`${ASSETS_URL}/assets/images/logos/logo_imagitv@2x.png`}
                alt="Imagi-Nation TV"
                className={styles.logoImagiTV}
              />
            </Title>
          </div>
          <div className={styles.imagiBannerInfo}>
            <Title type="h3Title" className={styles.infoTitle} theme={process.env.REACT_APP_THEME}>
              Live every weekday 12pm AEST
            </Title>
            <Paragraph>
              {`IMAGI-NATION{TV} is for marginalised kids across the earth’s
              surface to have a daily mentor in their lives. It takes the
              magic of AIME’s Imagination Factory to laptops, phones, and
              homes across the world.`}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={styles.videoContainerFeature}>
        <Anchor href="https://www.youtube.com/user/aimementoring/live" target="_blank">
          <img
            src={`${ASSETS_URL}/assets/images/banner/imagi-robot-live@2x.gif`}
            alt="Imagi-Nation TV"
            className={styles.videoCoverArt}
          />
        </Anchor>
      </div>
    </div>
    <div className={styles.inTVContentWrapper}>
      <section className={styles.triBtnSet}>
        <Button
          type="link"
          text="Watch live on YouTube"
          theme={process.env.REACT_APP_THEME}
          className={`${styles.imagiBtn}`}
          url="https://www.youtube.com/playlist?list=PLjfNcXcq0TOTTMNfKomUHtgdjliQ2iW80"
        />
        <Button
          type="link"
          className={`${styles.imagiHoodieBtn} ${styles.imagiBtn}`}
          text="Buy the Imagi-Nation Hoodie"
          theme={process.env.REACT_APP_THEME}
          url="https://shop.aimementoring.com/collections/all-products/products/imagi-nation-hoodie"
        />
        <Button
          type="link"
          className={`${styles.imagiDonate} ${styles.imagiBtn}`}
          text="Donate to IN{TV}"
          theme={process.env.REACT_APP_THEME}
          url="/donate"
        />
      </section>

      <DoubleCurvedLine />

      <section className={`${styles.partneringCTASection}`}>
        <Title type="h3Title" className={styles.partneringHeading}>{`PARTNERING WITH IN{TV}`}</Title>
        <div className={`${styles.puppetsChatWrapper}`}>
          <div className={`${styles.puppetChat}`}>
            <div className={styles.puppetWrap}>
              <img
                src={`${ASSETS_URL}/assets/images/illustrations/puppet-hope@2x.png`}
                alt="Hope the Puppet"
                className={styles.puppetTalking}
              />
            </div>
            <div className={styles.puppetWords}>
              <Title type="h4Title">Hello, I’m hope, let’s make magic together!</Title>
              <Paragraph>
                We’re looking for partners of all kinds, whether you’re a company,
                a school, uni or a future guest - we’d love to talk. This show is
                not about entertainment to pass the time, your funds and the work
                we do together will be an investment in providing a stage to
                elevate knowledge.
              </Paragraph>
              <div className={styles.becomeAPartnerBtn}>
                <IntercomChat label="Get in the game" />
              </div>
            </div>
          </div>
          <div className={`${styles.puppetChat} ${styles.puppetChatSmaller}`}>
            <div>
              <Title type="h4Title" className={styles.puppetTitle}>Already a partner? Click here!</Title>
            </div>
            <img
              src={`${ASSETS_URL}/assets/images/illustrations/cat@2x.png`}
              alt="Robo Cat"
              className={styles.puppetTalking}
            />
          </div>         
        </div>
      </section>

      <DoubleCurvedLine />
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
      
      <DoubleCurvedLine />

      <IntvPartners />
    </div>
  </Layout>
);

export default ImagiNationTV;
