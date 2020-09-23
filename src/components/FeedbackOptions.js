import React from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option) => (
        <button
          style={{ margin: 5 }}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option.replace(option[0], option[0])}
        </button>
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
