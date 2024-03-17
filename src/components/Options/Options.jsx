import styles from './Options.module.css'; 




const Options = ({ onLeaveFeedback }) => (
    <div>
      <button type="button" onClick={() => onLeaveFeedback('good')}>Good</button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
  
  export default Options;