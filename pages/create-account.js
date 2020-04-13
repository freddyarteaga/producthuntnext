import React from 'react'
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout'
import { Form, TextBox, InputSubmit } from '../components/ui/Form';

// validations
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const CreateAccount = () => {

    const { values, errors, submitForm, handleSubmit, handleChange } = useValidation
    (INITIAL_STATE, validateCreateAccount, createAccount);

    function createAccount() {
        console.log('creating Account...');
    }

    return (
        <div>
          <Layout>
              <>
                  <h1
                      css={css`
                          text-align: center;
                          margin-top: 5rem;
                      `}
                  >Create Account</h1>
                  <Form>
                      <TextBox>
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" placeholder="you Name" name="name" />
                      </TextBox>
                      <TextBox>
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" placeholder="you Email" name="email" />
                      </TextBox>
                      <TextBox>
                          <label htmlFor="password">password</label>
                          <input type="password" id="password" placeholder="you Password" name="password" />
                      </TextBox>
      
                      <InputSubmit type="submit" value="Create Account" />
                  </Form>
              </>
          </Layout>
        </div>
      )
}

export default CreateAccount
