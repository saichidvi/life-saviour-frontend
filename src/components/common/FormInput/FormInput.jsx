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
    <div className="input mb-3">
      <div className="input__lable fs__14px color__165d59 mb-1 fw500">{lableName}</div>
      <img
        className="input__image"
        src={inputImageLink}
        alt={`${lableName} svg`}></img>
      <input
        className="input__control fw400"
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
