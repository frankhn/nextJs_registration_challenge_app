import type { NextPage } from 'next'
import Head from 'next/head'
import Register from '../components/auth/register'
import { CustomLayout } from '../components/common/layout'

const Index: NextPage = () => {
    return (
        <CustomLayout>

            <Head>
                <title>Basic Authentication app</title>
                <meta name="description" content="A basic authentication app with nextJs " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
        </CustomLayout>
    )
}

export default Index 
