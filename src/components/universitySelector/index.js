import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadUniversities } from '../../services/positions';

export default class UniversitySelector extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    containerClassNames: PropTypes.string,
    onChangeFunction: PropTypes.func,
  };

  static defaultProps = {
    onChangeFunction: () => { },
  };


  state = {
    universities: [],
  }

  componentDidMount() {
    loadUniversities()
      .then((universities) => {
        this.setState({ universities });
      });
  }

  render() {
    const { universities } = this.state;
    const { placeholder, classNames, containerClassNames, onChangeFunction } = this.props;
    
    return (
      <div className={containerClassNames}>
        <select 
          placeholder={placeholder} 
          name="uni-campus-attending" 
          className={classNames} 
          onChange={onChangeFunction} 
          defaultValue=""
          required>
          <option value="" disabled>
            {placeholder}
          </option>
          {universities.length && 
          universities
            .filter(university => university.text && university.value)
            .map((university, index) => (
              <option 
                key={`${university.value}-${index}`} 
                disabled="" 
                value={university.value}>
                {university.text}
              </option>
            ))}
        </select>
      </div>
    );
  }
}
