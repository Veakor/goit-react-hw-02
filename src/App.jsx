
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Discription from './components/Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

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
    <div className="App">
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={calculateTotalFeedback()}
        positivePercentage={calculatePositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default App;