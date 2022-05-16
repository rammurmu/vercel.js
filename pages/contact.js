import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Contact Page</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
