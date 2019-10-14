import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BlogMatrix from './BlogMatrix';
import GeneralMatrix from './GeneralMatrix';
import FormMatrix from './FormMatrix';

export default class MatrixBuilder extends PureComponent {
  static propTypes = {
    formData: PropTypes.array.isRequired,
    matrixType: PropTypes.string.isRequired,
  };

  render() {
    const { matrixType } = this.props;
    return (
      <React.Fragment>
        {matrixType === 'blog'
          ? <BlogMatrix {...this.props} />
          : (
            matrixType === 'form'
              ? <FormMatrix {...this.props} />
              : <GeneralMatrix {...this.props} />
          )
        }
      </React.Fragment>
    );
  }
}


// matrixType === 'general'
// ? <GeneralMatrix {...this.props} />
// : <FormBuildMatrix {...this.props} />
