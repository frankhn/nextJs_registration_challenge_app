import type { NextPage } from 'next'
import Head from 'next/head'
import { CustomLayout } from '../components/common/layout'
import Login from '../components/auth/login'

const Index: NextPage = () => {
  return (
    <CustomLayout>

      <Head>
        <title>Basic Authentication app</title>
        <meta name="description" content="A basic authentication app with nextJs " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </CustomLayout>
  )
}

export default Index 
