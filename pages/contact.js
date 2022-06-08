import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Contact Page</h1>
    <p className={styles.card}>👏Welcome to RunAsh.live</p>
    <div className={styles.grid}>
    <div className={styles.description}>
        <h2>CONTACTING SUPPORT</h2>
        <p>ELSEWHERE ON THE INTERNET <br />Before contacting us , please check the frequently asked questions Here are contact emails for different part of runash</p>
        <>
        <ul>
        <ol>Admin to direct write:admin@runash.in</ol>
        <ol>Sales ecutive:sales@runash.in</ol>
        <ol>Support executive:Support@runash.in</ol>
        </ul>
        </>
        <>
        <p>Headquarters<br />RunAsh Digital Innovation Technologies Private Limited<br />
        Bokaro Industrial Area BIADA Street Jharkhand India 827014<br />
        PHONE NO 06542281002<br />
        EMAIL ID admin@runash.in</p>
       </>
      </div>
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
