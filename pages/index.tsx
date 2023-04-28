import Head from 'next/head'
import styles from '@/styles/Login.module.scss'
import { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import Spinner from '@/components/Spinner'

export default function Login() {

  const { loginHandler, loginLoading } = useContext(GlobalContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!e.isTrusted) return alert('isTrusted must be true')

    const username = e.target[0].value as string
    const password = e.target[1].value as string

    loginHandler({ username, password })
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainLogin}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Pan Tech</h1>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email' name='email' required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' name='password' required minLength={5} />
          </div>
          <button type='submit'>{loginLoading ? <Spinner /> : 'Sign in'}</button>
        </form>
      </main>
    </>
  )
}
