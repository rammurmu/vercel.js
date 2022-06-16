import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>
        <Container>
  <FeedbackInput />

  <Spacer y={8} />
</Container>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
