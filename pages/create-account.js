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

    const { name, email, password } = values;

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
                  <Form
                    onSubmit={handleSubmit}
                    noValidate
                  >
                      <TextBox>
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" placeholder="you Name" name="name" value={name} onChange={handleChange} />
                      </TextBox>
                      <TextBox>
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" placeholder="you Email" name="email" value={email} onChange={handleChange} />
                      </TextBox>
                      <TextBox>
                          <label htmlFor="password">password</label>
                          <input type="password" id="password" placeholder="you Password" name="password" value={password} onChange={handleChange} />
                      </TextBox>
      
                      <InputSubmit type="submit" value="Create Account" />
                  </Form>
              </>
          </Layout>
        </div>
      )
}

export default CreateAccount
