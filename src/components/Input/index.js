import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    const {
      labelContent,
      styles,
      inputType,
      inputName,
      inputValue,
      example,
      handleInputChange
    } = this.props;
    return (
      <label className="label" htmlFor={inputName}>
        {labelContent}
        <input
          className={styles}
          type={inputType}
          name={inputName}
          id={inputName}
          value={inputValue}
          placeholder={example}
          onChange={handleInputChange}
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelContent: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;