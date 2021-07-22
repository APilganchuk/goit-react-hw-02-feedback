import  styles  from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ good, neutral, bad }) => (
  <div className={styles.container}>
    <button onClick={good}>Good</button>
    <button onClick={neutral}>Neutral</button>
    <button onClick={bad}>Bad</button>
  </div>
);

export default FeedbackOptions;
