
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Discription from './components/Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const calculateTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const calculatePositiveFeedbackPercentage = () => {
    const total = calculateTotalFeedback();
    const positive = feedback.good;
    return total === 0 ? 0 : Math.round((positive / total) * 100);
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onLeaveFeedback={onLeaveFeedback} />
      {calculateTotalFeedback() === 0 ? (
        <Discription message="No feedback yet" />
      ) : (
        <Feedback feedback={feedback} />
      )}
      <p>Total feedbacks: {calculateTotalFeedback()}</p>
      <p>Positive feedback percentage: {calculatePositiveFeedbackPercentage()}%</p>
    </div>
  );
}

export default App;