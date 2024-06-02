import React from "react";
import "./formButton.css";
import PropTypes from "prop-types";

export default function FormButton({ data }) {
  const { name , handleButtonClick } = data;
  return (
    <div>
      <button className="form_btn" onClick={handleButtonClick}>{name}</button>
    </div>
  );
}

FormButton.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleButtonClick : PropTypes.func.isRequired
  }).isRequired,
};
