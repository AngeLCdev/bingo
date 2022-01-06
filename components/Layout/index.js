
import Head from 'next/head'
import Header from './Header'
import Main from './Main'



export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter"
                    rel="stylesheet"
                />
            </Head>

            <Header />
            <Main>{children}</Main>

        </>
    )
}