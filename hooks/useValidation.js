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

    return (  );
}
 
export default useValidation;