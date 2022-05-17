import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About RunAsh</h1>
        <p className={styles.card}>👏 Welcome to RunAsh family!</p>
        <p className={styles.grid}>🎤Introduction<br />
        RunAsh Discipline and Culture<br />
        Discipline and learning is the backbone of the development of our startup journey and runash culture is our behavior</p>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
