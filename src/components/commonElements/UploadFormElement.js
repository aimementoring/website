import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UtilityFuncs from '../utilityFuncs';
import FileUploader from '../fileUploader';

export default class UploadFormElement extends PureComponent {
  static propTypes = {
    formElement: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  componentDidMount() {
    UtilityFuncs.loadComponent('.upload-field', FileUploader);
  }

  render() {
    const { 
      formElement: { 
        name, 
        content: { block }, 
      }, 
      index, 
    } = this.props;
    return (
      <div className="sm-col sm-col-12 md-col-12 o7-r o7-b" key={`${name}-${index}`}>
        <div className="flex flex-column items-start job-documents">
          <label className="mb2">
            <div
              className="upload-field"
              // TODO: see how to get this API key. In the old website: {siteSettings.filestackApiKey}
              data-api-key="AnpTaG2AITvSuOfoenIpKz"
              data-button-text={block.label}
              data-input-name={block.inputName}
            />

          </label>
        </div>
      </div>
    );
  }
}
