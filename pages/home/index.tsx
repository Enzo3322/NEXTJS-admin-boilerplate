import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainHome}>
                <h1>Home</h1>
            </main>
        </>
    )
}
