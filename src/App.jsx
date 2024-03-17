import React, { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';


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

  return (
    <div className="App">
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}
export default App;