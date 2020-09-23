import React from "react";
import Notification from "./Notification";
import PropTypes from "prop-types";

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total ? (
        <ul style={{ listStyle: "none", fontSize: "20px" }}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback:{positivePercentage} %</li>
        </ul>
      ) : (
        <Notification message="no feedback" />
      )}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
