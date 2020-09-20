import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = { good: 0, neutral: 0, bad: 0 };

  // handleIncrGood = (e) => {
  //   console.log(this);
  //   console.log("good");
  //   this.setState({
  //     good: this.state.good + 1,
  //   });
  // };

  // handleInctNeutral = (e) => {
  //   console.log("neutral");
  //   this.setState({
  //     neutral: this.state.neutral + 1,
  //   });
  // };

  // handleInctBad = (e) => {
  //   console.log("bad");
  //   this.setState({
  //     bad: this.state.bad + 1,
  //   });
  // };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percent = (good * 100) / total;
    return Math.round(percent);
  };
  onIncrement = (e) => {
    const key = e.target.name;
    this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
