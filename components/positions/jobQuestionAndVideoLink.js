import React from 'react';
import PropTypes from 'prop-types';

const JobQuestionAndVideoLink = ({ messageQuestion, isThereVideoLink }) => (
  <>
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-message-question-div">
      {messageQuestion && (
        <textarea
          className="input js-message-question"
          placeholder={messageQuestion}
          name="message-question"
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
