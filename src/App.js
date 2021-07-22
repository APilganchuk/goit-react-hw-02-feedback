import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

import Section from "./components/Section";

class App extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
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

    const positiveFeedback = ((goodFeedback / totalFeedback) * 100).toFixed(2);
    return positiveFeedback;
  }
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={this.handleGood}
          neutral={this.handleNeutral}
          bad={this.handleBad}
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
