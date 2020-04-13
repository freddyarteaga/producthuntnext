import React, { useState, useEffect } from 'react';

const useValidation = (initialState, validate, fn) => {

    const [values, saveValues] = useState(initialState);
    const [errors, saveErrors] = useState({});
    const [submitForm, saveSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
          const noErrors = Object.keys(errors).length === 0;

          if (noErrors) {
              fn(); // fn = function that runs on the component
          }
          saveSubmitForm(false);
        }
    }, []);

    // function that runs when the user writes something
    const handleChange = e => {
        saveValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // function that runs when the user make submit
    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validate(values);
        saveErrors(errorsValidation);
        saveSubmitForm(true);
    }

    return {
        values,
        errors,
        submitForm,
        handleSubmit,
        handleChange
    }
}
 
export default useValidation;