import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

const Heading = styled.h1`
  color: red;
`

const Home = () => (
  <div className="container">
    <Heading>Init</Heading>
  </div>
)

export default Home
