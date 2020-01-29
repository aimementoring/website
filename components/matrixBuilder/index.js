import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const BlogMatrix = dynamic(() => import('./blogMatrix'));
const GeneralMatrix = dynamic(() => import('./generalMatrix'));
const FormMatrix = dynamic(() => import('./formMatrix'));

const MatrixMap = {
  blog: BlogMatrix,
  form: FormMatrix,
  general: GeneralMatrix,
};

const MatrixBuilder = ({ matrixType, ...props }) => {
  const Component = matrixType in MatrixMap ? MatrixMap[matrixType] : GeneralMatrix;
  return <Component {...props} />;
};

MatrixBuilder.propTypes = {
  formData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  matrixType: PropTypes.string.isRequired,
};

export default MatrixBuilder;
