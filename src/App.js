import React, { Component } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import FeedbackCounter from './Components/Feedback';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  getTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  feedbackOptions = Object.keys(this.state);

  render() {
    const { good } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackCounter
            options={this.feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.getTotal() > 0 ? (
            <Statistics
              options={this.feedbackOptions}
              feedbackCounter={this.state}
              total={this.getTotal()}
              positiveFeedbackRate={Math.round((good * 100) / this.getTotal())}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
