import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>
        <div className={styles.description}><code>👏 Welcome to runash.live</code>
        <h5 className={styles.description}>
        Give your store a<br /> real experience <br />on a complete digitization</h5>
        <p>Schedule sell & buy on real experience</p>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
