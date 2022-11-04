import React from 'react'
import { WithRouter } from "utils/Navigation";
import Login from './auth/Login';

const Index = () => {
  return (
    <Login/>
  )
}

export default WithRouter(Index);