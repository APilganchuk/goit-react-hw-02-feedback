import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ good, neutral, bad }) => (
  <div className={styles.container}>
    <button onClick={good}>Good</button>
    <button onClick={neutral}>Neutral</button>
    <button onClick={bad}>Bad</button>
  </div>
);

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
