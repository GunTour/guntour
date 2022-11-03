import Layout from 'components/Layout';
import React from 'react'
import { WithRouter } from "utils/Navigation";

const HomePage = () => {
  return (
    <Layout>
      <div>HomePage</div>
    </Layout>
  )
}

export default WithRouter(HomePage);