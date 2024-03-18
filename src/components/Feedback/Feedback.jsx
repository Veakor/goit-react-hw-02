/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Feedback.module.css'; 



const Feedback = ({ feedback }) =>{
  if (!feedback) return null; 
 return(
    <div>
      <h2>Feedback statistics:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
}
  export default Feedback;
 