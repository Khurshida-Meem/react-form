import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [reEnterValue, setReEnterValue] = useState(false);

  const error = enteredName.trim() !== '';
  const nameInputIsValid = !error && reEnterValue;

  const inputChangeHandler = e => {
    setEnteredName(e.target.value);
  }

  const inputBlur = e => {
    setReEnterValue(true);
    
  }

  const handleSubmit = e => {
    e.preventDefault();

    setReEnterValue(true);

    if (!enteredName) {
      return;
    }

    setEnteredName('');
    setReEnterValue(false);

  }

  const nameinputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameinputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={inputBlur}
          type='text'
          id='name'
          onChange={inputChangeHandler}
          value={enteredName}

        />
        {nameInputIsValid && <p className="error-text">Please enter a valid data</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
