import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Nuetral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine
            text="Positive Feedback"
            value={`${positivePercentage}%`}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <h2>Give Feedback</h2>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
