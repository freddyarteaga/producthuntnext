import React from 'react'
import Layout from '../components/layout/Layout'

const CreateAccount = () => (
  <div>
    <Layout>
        <>
            <h1>Create Account</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="you Name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="you Email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" placeholder="you Password" name="password" />
                </div>

                <input type="submit" value="Create Account" />
            </form>
        </>
    </Layout>
  </div>
)

export default CreateAccount
