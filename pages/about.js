import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About RunAsh</h1>
        <p className={styles.card}>👏 Welcome to RunAsh family!</p>
        <div className={styles.grid}>
         <a href="https://" className={styles.card}>
         <h2>🎤Introduction</h2>
         <p>RunAsh is an live streaming hybrid marketplace for retailing,where retailer can meet to buyers and demonstrate, presentation their products and buyers can meet to sellers and shopping organic products </p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>Discipline and culture</h2>
         <p>Discipline and learning is the backbone of the development of our startup journey and runash culture is our behavior</p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>What we do</h2>
         <p>We created new model of marketplace were retailers face-to-face meet,showcase,demonstrate,and presentation their products with buyers</p>
        </a>

        <a href="https://" className={styles.card}>
         <h2>What we going to make</h2>
         <p>we are commite to building live streaming open source software and new ways to use physical reality experience</p>
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
