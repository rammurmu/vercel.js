import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Frequently Asked Questions</h1>
        <>
         <p className={styles.description}>We have included some frequently asked questions are commonly started in runash.in</p>
        </>
        <>
         <p className={styles.text}>How live streaming works?</p>
        </>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
