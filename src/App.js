import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import PropTypes from "prop-types";

import Section from "./components/Section";

class App extends Component {
  static defaultProps = {
    option: "",
  };
  static propTypes = {
    option: PropTypes.string,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (option) => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback() {
    const totalCount = Object.values(this.state).reduce(
      (acc, feedBack) => acc + feedBack
    );
    return totalCount;
  }
  countPositiveFeedbackPercentage() {
    const goodFeedback = this.state.good;
    const totalFeedback = this.countTotalFeedback();

    const positiveFeedback = ((goodFeedback / totalFeedback) * 100).toFixed();
    return positiveFeedback;
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
