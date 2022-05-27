import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Live Blog</h1>
        <p className={styles.description}>
        The latest news about RunAsh from the RunAsh team
        

        <h1 className="title">
        Read{' '}
        <Link href="/first-post">
          <a>more &rarr;</a>
       </Link>
       </h1>

          <Link href="/index">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}


