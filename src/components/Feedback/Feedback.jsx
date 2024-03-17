/* eslint-disable react/prop-types */
import styles from './Feedback.module.css'; 



const Feedback = ({ Feedback }) => (
    <div>
      <h2>Feedback statistics:</h2>
      <p>Good: {Feedback.good}</p>
      <p>Neutral: {Feedback.neutral}</p>
      <p>Bad: {Feedback.bad}</p>
    </div>
  );
  
  export default Feedback;