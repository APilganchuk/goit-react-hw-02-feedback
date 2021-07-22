import PropTypes from "prop-types";
import Notification from "../Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    {good || neutral || bad ? (
      <ul>
        <li style={{ color: "green" }}>good: {good}</li>
        <li style={{ color: "orange" }}>neutral: {neutral}</li>
        <li style={{ color: "red" }}>bad: {bad}</li>
        <li>total: {total}</li>
        <li>
          positive feedback:
          {positivePercentage} %
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
