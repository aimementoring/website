import React from 'react';
// import LabeledInput from 'aime-blueprint/lib/components/labeledInput';
import Title from 'aime-blueprint/lib/components/title';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import styles from './footerNewsletter.module.scss';

// function updateValue(name, value) {
//   setState({ [name]: value });
// }

const FooterNewsletter = () => (
  // initialState = {
  //   value: ""
  // };
  // return (
  <div className={styles.newsletterContainer}>
    <div className={styles.newsletterWrapper}>
      <div className={styles.formContainer}>
        <Title type="h5Title" theme={process.env.REACT_APP_THEME}>Become an AIME friend</Title>
        <Paragraph theme={process.env.REACT_APP_THEME}>Subscribe to our newsletter</Paragraph>
        {/* this is the old newsletter subscription form for reference
        <form acceptCharset="UTF-8" action="https://formkeep.com/f/0f2fe2a1cd09" method="POST">
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="submissionmessage" value="footernewslettersubscription" />
          <Input
            id="subscribe"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            theme={process.env.REACT_APP_THEME}
          />
          <button type="submit" className={styles.submitButton} aria-label="Submit form" />
        </form> */}
        <form
          acceptCharset="UTF-8"
          action="https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5"
          method="POST"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          {/* <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="submissionmessage" value="footernewslettersubscription" /> */}
          {/* need to uncomment the below - couldn't push up because of eslint errors */}
          {/* <LabeledInput
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            value={initalState.value}
            onChangeFunction={updateValue}
            label="Email address"
            theme={process.env.REACT_APP_THEME}
            required
          />; */}

          {/*
            real people should not fill in the below input and expect good things...
            do not remove this or risk form bot signups
          */}
          {/* Need to uncomment the below too */}
          {/* <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_ce86e2fc6ca77a51919157a03_30964260b5"
            tabindex="-1" value=""/>
          </div> */}
          <button type="submit" className={styles.submitButton} name="subscribe" aria-label="Subscribe" />
        </form>
        {/* this is the mailchimp default form code for reference
        <form
        action="https://aimementoring.us12.list-manage.com/subscribe/post?u=ce86e2fc6ca77a51919157a03&amp;id=30964260b5"
        method="post" id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form" class="validate" target="_blank"
        novalidate>
          <div id="mc_embed_signup_scroll">
            <input type="email" value="" name="EMAIL"
            class="email" id="mce-EMAIL" placeholder="email address" required>
            {/* <!-- real people should not fill this in and expect good things -
              do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_ce86e2fc6ca77a51919157a03_30964260b5"
              tabindex="-1" value="">
            </div>
            <div class="clear">
              <input type="submit" value="Subscribe" name="subscribe"
              id="mc-embedded-subscribe" class="button">
            </div>
          </div>
        </form> */}
      </div>
    </div>
  </div>
);

export default FooterNewsletter;
