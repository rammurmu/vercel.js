import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Contact Page</h1>
    <p className={styles.card}>👏Welcome to RunAsh</p>
    <div className={styles.grid}>
    <a href="https://" className={styles.card}>
        <h2>CONTACTING SUPPORT</h2>
        <p>ELSEWHERE ON THE INTERNET<br />Before contacting us , please check the frequently asked questions
Here are contact emails for different part of runash<br />
Admin to direct write:admin@runash.in<br />
Sales ecutive:sales@runash.in<br />
Support executive:Support@runash.in<br />
Headquarters
RunAsh Digital Innovation Technologies Private Limited{' '}
Bokaro Industrial Area BIADA Street Jharkhand India 827014{' '}
PHONE NO 06542281002{' '}
EMAIL ID admin@runash.in</p>
</a>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
