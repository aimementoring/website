import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'aime-blueprint/lib/components/textarea';
import Input from 'aime-blueprint/lib/components/input';
import styles from './jobQuestionAndVideoLink.module.scss';

const JobQuestionAndVideoLink = ({
  messageQuestion, isThereVideoLink, handleChange, values,
}) => (
  <>
    <div className={styles.textAreaContainer}>
      {messageQuestion && (
        <Textarea
          className="input js-message-question"
          name="message_question"
          onChangeFunction={handleChange}
          theme={process.env.REACT_APP_THEME}
          label={messageQuestion}
          value={values.message_question || ''}
        />
      )}
    </div>
    <div className={styles.textAreaContainer}>
      {isThereVideoLink && (
        <Input
          type="text"
          className="input"
          onChangeFunction={handleChange}
          theme={process.env.REACT_APP_THEME}
          label="Link us a video explanation(www.youtube.com/12356)"
          name="video_link"
          value={values.video_link || ''}
        />
      )}
    </div>
  </>
);

JobQuestionAndVideoLink.propTypes = {
  messageQuestion: PropTypes.string,
  isThereVideoLink: PropTypes.bool,
  handleChange: PropTypes.func,
  values: PropTypes.shape({
    video_link: PropTypes.string,
    message_question: PropTypes.string,
  }),
};

JobQuestionAndVideoLink.defaultProps = {
  messageQuestion: null,
  isThereVideoLink: false,
  handleChange: () => {},
  values: {},
};

export default JobQuestionAndVideoLink;
