import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.description}>👏 Welcome to RunAsh <br />Live Watched<br />and Live on demand</h1>

        <div className={styles.description}>{' '}
        <code className={styles.code}>Go Live watch on RunAsh</code></div>

        <h1 className={styles.title}>Whatched Live<a href="https://">Streaming</a></h1>

          <h2 className={styles.description}>LIVE ON DEAMAND</h2>

          <p className={styles.description}>Whatching some previous live streaming,you can watch some live stream to receive notifications for new live streaming and updats.when the buyer updates the live streaming their organic products on daily basis, you'll see the changes in your personal dashboard.{' '}
          <code className={styles.code}>WATCH LIVE STREAMING</code>
          Click watch at the top of a video to watch it.</p>

          <p className={styles.card}>All Categories</p>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
