import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './locationSearchInput.module.scss';

const Suggestion = ({ suggestion, getProps }) => {
  const className = classNames(styles.suggestionItem, { [styles.active]: suggestion.active });
  return (
    <div {...getProps(suggestion, { className })}>
      <span className={styles.suggestionIcon} />
      <span>{suggestion.description}</span>
    </div>
  );
};

const SuggestionProp = PropTypes.shape({
  active: PropTypes.bool,
  description: PropTypes.string,
});

Suggestion.propTypes = {
  getProps: PropTypes.func,
  suggestion: SuggestionProp,
};

Suggestion.defaultProps = {
  getProps: () => {},
  suggestion: {},
};

const SearchInput = ({
  getInputProps,
  suggestions,
  getSuggestionItemProps,
  inputPlaceholder,
  classNameProp,
  handleShowSuggestions,
  showSuggestion,
}) => (
  <div>
    <input
      {...getInputProps({
        placeholder: inputPlaceholder,
        className: classNameProp,
        name: 'address',
        onFocus: handleShowSuggestions,
        onBlur: handleShowSuggestions,
      })}
    />
    {showSuggestion && (
      <div className={styles.autocompleteDropdownContainer}>
        {suggestions.map(suggestion => <Suggestion suggestion={suggestion} getProps={getSuggestionItemProps} />)}
      </div>
    )}
  </div>
);

SearchInput.propTypes = {
  getInputProps: PropTypes.func,
  suggestions: PropTypes.arrayOf(SuggestionProp),
  getSuggestionItemProps: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  classNameProp: PropTypes.string,
  handleShowSuggestions: PropTypes.func,
  showSuggestion: PropTypes.bool,
};

SearchInput.defaultProps = {
  getInputProps: () => {},
  suggestions: [],
  getSuggestionItemProps: () => {},
  inputPlaceholder: 'Search Places ...',
  classNameProp: '',
  handleShowSuggestions: () => {},
  showSuggestion: false,
};


export default SearchInput;
