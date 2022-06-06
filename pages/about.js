import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About RunAsh</h1>
        <p className={styles.code}>👏 Welcome to RunAsh family!</p>
        <div className={styles.grid}>
         <a href="https://" className={styles.card}>
         <h2>Oneliner</h2>
         <p>RunAsh is a live streaming hybrid marketplace for retailing,where retailer face to face demonstrate, presentation their products with buyers </p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>Discipline and culture</h2>
         <p>Discipline and learning is the backbone of the development of startup journey & culture is our behavior</p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>What we do</h2>
         <p>We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers</p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>What we going to make</h2>
         <p>We are commite to building live streaming platform and new ways to use physical reality experience</p>
        </a>

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
