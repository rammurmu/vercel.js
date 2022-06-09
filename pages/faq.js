import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function FAQ() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.grid}>
        <h2>How does it work<h2>
        <p>Learn more</p>
        </div>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
