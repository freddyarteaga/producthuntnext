import React from 'react'
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout'
import { Form, TextBox, InputSubmit } from '../components/ui/Form';

const CreateAccount = () => (
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

export default CreateAccount
