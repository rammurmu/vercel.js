import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Buyer() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Buyer Page</h1>
          <h2>LIVE ON DEAMAND</h2>
          <p>Whatching some live streaming,you can watch some live stream to receive notifications for new live streaming and updats.when the buyer updates the live streaming their organic products on daily basis, you'll see the changes in your personal dashboard.</p>
          <h2>WATCH LIVE STREAMING</h2>
          <p>Click watch at the top of a video to watch it.</p>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
