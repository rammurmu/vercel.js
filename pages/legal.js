import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Legal() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Legal Page</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
