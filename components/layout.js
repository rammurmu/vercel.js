import Head from 'next/head's
import styles from '/layout.module.css
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <title>Layout Example</title>
      <Navbar />
      <main className={styles.main}>{children}</main>
      </Head>
      <Footer />
    </>
  )
}
