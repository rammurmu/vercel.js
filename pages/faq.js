import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Frequently Asked Questions</h1>
        <>
         <p className={styles.description}>We have included some frequently asked questions are commonly started in runash.in</p>
        </>
        <>
         <p className={styles.text}>How does runash live streaming works?</p>
        </>
        <>
         <p className={styles.text}>How to access runash live streaming?</p>
        </>
        <>
         <p className={styles.text}>How to register runash.live streaming?</p>
        </>
        <>
         <p className={styles.text}>How to setup seller account id?</p>
        </>
        <>
         <p className={styles.text}>How does influencers community works?</p>
        </>
        <>
         <p className={styles.text}>How to shopping schedule?</p>
        </>
        <>
         <p className={styles.text}>How to schedule a live streaming works?</p>
        </>

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
