import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  // onLeaveFeedback = event => {
  //   const name = event.target.name;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     0
  //   );
  // };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  // };

  return (
    <section style={{ margin: '0 15px', fontFamily: 'inherit' }}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <div>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </Section>
    </section>
  );

  //   render() {
  //     const { good, neutral, bad } = this.state;
  //     const objKey = Object.keys(this.state);
  //     const total = this.countTotalFeedback();
  //     return (
  //       <section style={{ margin: '0 15px', fontFamily: 'inherit' }}>
  //         <Section title="Please leave feedback">
  //           <FeedbackOptions
  //             options={objKey}
  //             onLeaveFeedback={this.onLeaveFeedback}
  //           />
  //           <div>
  //             {total === 0 ? (
  //               <Notification message="There is no feedback" />
  //             ) : (
  //               <Statistics
  //                 good={good}
  //                 neutral={neutral}
  //                 bad={bad}
  //                 total={this.countTotalFeedback}
  //                 percentage={this.countPositiveFeedbackPercentage}
  //               />
  //             )}
  //           </div>
  //         </Section>
  //       </section>
  //     );
  //   }
  // }
};
export default App;
