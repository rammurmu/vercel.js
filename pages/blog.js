import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>First Post</h1>
        <p className={styles.description}>
        <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
       </Link>
       </h1>

          <Link href="/blog">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}


