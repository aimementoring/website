import React, { Component } from 'react';
import 'filestack-react';
import PropTypes from 'prop-types';

export default class UploadedFile extends Component {
  static propTypes = {
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
    }).isRequired,
    inputName: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const { file, inputName, index } = this.props;

    return (
      <React.Fragment>
        <input className="document-item--button-reset" type="file" />
        <span className="c-grey f-14 ml2" onClick={() => this.props.onDelete(index)}>
          {file.filename}
        </span>
        <input type="hidden" name={`${inputName}[]`} value={file.url} />
      </React.Fragment>
    );
  }
}
