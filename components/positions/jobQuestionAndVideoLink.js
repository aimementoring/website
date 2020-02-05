import React from 'react';
import PropTypes from 'prop-types';
import LabeledTextarea from 'aime-blueprint/lib/components/labeledTextarea';

const JobQuestionAndVideoLink = ({ messageQuestion, isThereVideoLink }) => (
  <>
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-message-question-div">
      {messageQuestion && (
        <LabeledTextarea
          className="input js-message-question"
          name="message-question"
          onChangeFunction={(name, updateValue) => setValue(updateValue)}
          theme={process.env.REACT_APP_THEME}
          label={messageQuestion}
        />
      )}
    </div>

    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-video-link">
      {isThereVideoLink && (
        <input
          type="text"
          className="input"
          placeholder="Link us a video explanation(www.youtube.com/12356)"
          name="video-link"
        />
      )}
    </div>
  </>
);

JobQuestionAndVideoLink.propTypes = {
  messageQuestion: PropTypes.string,
  isThereVideoLink: PropTypes.bool,
};

JobQuestionAndVideoLink.defaultProps = {
  messageQuestion: null,
  isThereVideoLink: false,
};

export default JobQuestionAndVideoLink;
