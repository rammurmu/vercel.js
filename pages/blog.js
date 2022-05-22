import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Blog Page</h1>
        <p className={styles.description}>
        <h1 className="title">
        Read{' '}
        <Link href="/first-post">
          <a>this page!</a>
       </Link>
       </h1>

          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}


