

import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0
    }
  };

  updateFeedback = feedbackType => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [feedbackType]: prevState.feedback[feedbackType] + 1
      }
    }));
  };

  render() {
    const { feedback } = this.state;

    return (
      <div>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
        <Options updateFeedback={this.updateFeedback} />
        <Feedback feedback={feedback} />
      </div>
    );
  }
}

export default App;