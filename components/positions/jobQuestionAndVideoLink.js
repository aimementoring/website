import React from 'react';
import PropTypes from 'prop-types';
import LabeledTextarea from 'aime-blueprint/lib/components/labeledTextarea';
import LabeledInput from 'aime-blueprint/lib/components/labeledInput';

const JobQuestionAndVideoLink = ({
  messageQuestion, isThereVideoLink, handleChange, values,
}) => (
  <>
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-message-question-div">
      {messageQuestion && (
        <LabeledTextarea
          className="input js-message-question"
          name="message-question"
          onChangeFunction={handleChange}
          theme={process.env.REACT_APP_THEME}
          label={messageQuestion}
          value={values['message-question'] || ''}
        />
      )}
    </div>
    <div className="sm-col sm-col-12 md-col-12 o7-r o7-b js-video-link">
      {isThereVideoLink && (
        <LabeledInput
          type="text"
          className="input"
          onChangeFunction={handleChange}
          theme={process.env.REACT_APP_THEME}
          label="Link us a video explanation(www.youtube.com/12356)"
          name="video-link"
          value={values['video-link'] || ''}
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
    'video-link': PropTypes.string,
    'message-question': PropTypes.string,
  }),
};

JobQuestionAndVideoLink.defaultProps = {
  messageQuestion: null,
  isThereVideoLink: false,
  handleChange: () => {},
  values: {},
};

export default JobQuestionAndVideoLink;
