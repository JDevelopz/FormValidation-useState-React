import { useState } from 'react';

const useForm = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(enteredValue);
    const hasError = !enteredValue && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const valueOnBlurHandler = (e) => {
        setIsTouched(true);
    };


    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    return {
        value: enteredValue,
        valueChangeHandler,
        valueOnBlurHandler, 
        isValid,
        hasError,
        reset,

    }
}

export default useForm; 