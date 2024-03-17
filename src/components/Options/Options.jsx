import styles from './Options.module.css'; 



  const Options = ({ updateFeedback }) => {
    return (
      <div>
        <button type="button" onClick={() => updateFeedback('good')}>Good</button>
        <button type="button" onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button type="button" onClick={() => updateFeedback('bad')}>Bad</button>
      </div>
    );
  }
  
  export default Options;