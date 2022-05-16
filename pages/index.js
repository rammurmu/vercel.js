import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styles from 'styles/mobile-menu.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
    
     <ul className={styles.description}> 
        <Link href="/#index" scroll={false}>
          <a>Features</a>
        </Link>
      </ul>
        
    
        
        <div className={styles.description}>{' '}<code className={styles.code}>👏 Welcome to RunAsh.Live</code></div>   
        <h2 className={styles.description}>Where the retailers <br />Build own made<br />Live streaming store</h2>
       
    </Head>

       
        <main className={styles.main}>
        <h1 className={styles.title}>
          Live retail <a href="https://">streaming</a>
        </h1>
        
        <p className={styles.description}>
          Get started by {' '}
          <code className={styles.code}>Live stream</code>
        </p>
        <p className={styles.card}>Build the next-generation and the future of e-commerce 🚀</p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>🛒Real Selling &rarr;</h2>
            <p>Where retailers can meet to buyers & demonstrate their products </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>🛍️ Real Shopping &rarr;</h2>
            <p>Where buyers can meet to sellers & shopping organic products  </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>🧑‍💻 Remote job &rarr;</h2>
            <p>Find the best startup jobs,curated by runash remote team</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🧑‍🤝‍🧑 Influencer &rarr;</h2>
            <p>
              Live influencer community here you can support businesses 
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🎓 About RunAsh &rarr;</h2>
            <p>
              A live retail streaming hybrid marketplace  for retailing
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🧗Live support &rarr;</h2>
            <p>
              24 x 7 x 365 day live support on runash  executive
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🙋 Live video chat &rarr;</h2>
            <p>
              Follow and get started live real chatting </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>📽️ Live stream &rarr;</h2>
            <p>
              Schedule a live streaming free 
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>📺 Live watch  &rarr;</h2>
            <p>
              Watched live on demand  streaming  free
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🥳 Own experience  &rarr;</h2>
            <p>
              Traditional own-made real experience   
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>🌈 Diffserve &rarr;</h2>
            <p>
              The promise of high quality live streaming 
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>📝 How it work &rarr;</h2>
            <p>
              When you go live to schedule a live stream
            </p>
          </a>
        </div>
        <div>
        <p className={styles.description}>
          Backed by{' '}
          <code className={styles.code}>Open Source</code>
        </p>
        <p className={styles.card}>Get your valuable feedback  ✨</p>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
            © 2022 RunAsh {' '}
          <span className={styles.logo}>
            <Image src="vercel.svg" alt="" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
