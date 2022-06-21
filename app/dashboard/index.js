import ClientComponent from "./ClientComponent.js";
import ServerComponent from "./ServerComponent.js";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function ServerComponent() {
  return (
    <>
      <ClientComponent>

      <div className={styles.container}>
      <main className={styles.main}>
        <h1>Welcome to back Ram!</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>

        <ServerComponent />
      </ClientComponent>
    </>
  );
}



  
