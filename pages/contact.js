import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Contact</h1>
    <code className={styles.code}>👏Welcome to RunAsh.live</code>
    <div className={styles.grid}>
    <div className={styles.description}>
        <p>Before contacting us , please check the frequently asked questions Here are contact emails for different part of runash</p>

        <>
        <ul>
        <ol>Admin to direct write:admin@runash.in</ol>
        <ol>Sales excutive:sales@runash.in</ol>
        <ol>Support executive:Support@runash.in</ol>
        </ul>
        </>

        <>
        <p>Headquarters<br />
        RunAsh Digital Innovation Technologies Private Limited<br />
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
