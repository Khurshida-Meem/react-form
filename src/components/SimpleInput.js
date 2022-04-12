import { useState,useRef,useEffect } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('');
  const [error, setError] = useState(false);
  const [reEnterValue, setReEnterValue] = useState(false);

  useEffect(() => {
    if (error) {
      console.log('valid input');
    }
  }, [error]);

  const inputChangeHandler = e => {
    setEnteredName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    setReEnterValue(true);

    if (enteredName.trim() === '') {
      setError(false)
      return;
    }

    setError(true);

    setEnteredName('');

  }

  const nameInputIsValid = !error && reEnterValue;

  const nameinputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameinputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
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
