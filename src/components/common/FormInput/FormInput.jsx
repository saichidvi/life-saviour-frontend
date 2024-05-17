import React from "react";
import "./FormInput.css";
import PropTypes from "prop-types";

export default function FormInput({ data }) {
  const {
    lableName,
    inputImageLink,
    placeHolder,
    inputType,
    onInputChange,
    name,
  } = data;
  const handleChange = (event) => {
    event.preventDefault();
    onInputChange({
      item: {
        key: { name },
        value: event.target.value,
      },
    });
  };
  return (
    <div className="input">
      <div className="input__lable fs__14px color__165d59 mb-2">{lableName}</div>
      <img
        className="input__image"
        src={inputImageLink}
        alt={`${lableName} svg`}></img>
      <input
        className="input__control"
        type={inputType}
        placeholder={placeHolder}
        onChange={handleChange}></input>
    </div>
  );
}

FormInput.propTypes = {
  data: PropTypes.shape({
    lableName: PropTypes.string.isRequired,
    inputImageLink: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }).isRequired,
};
