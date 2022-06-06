import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Company() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Company Page</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
