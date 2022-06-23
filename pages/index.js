import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />  
        <div className={styles.description}>{' '}<code className={styles.code}>👏 Welcome to RunAsh.Live</code></div>

      <header className={styles.header}>
       <div class name={styles.left}>
       <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          RunAsh.live{' '}
          <span className={styles.logo}>
            <Image src="vercel.svg" alt="logo" width={72} height={16} />
          </span>
        </a>
      </header>
      <div>



        <h1 className={styles.title}>
         Live retail streaming platform
        </h1>
        <p className={styles.description}>
          Where the retailers build own <br />made live streaming store</p>
       
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://runash.live/schedule">📺Go live</a></code></div>
           
    </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Schedule <a href="https://runash.live/buyer">Buy</a> & <a href="https://runash.live/buyer"> Sell</a>
        </h1>
        
       
        
        <p className={styles.description}>
          Get started by {' '}
          <code className={styles.code}>Live stream</code>
        </p>
        <div className={styles.card}><code className={styles.code}>Real life experience</code></div>
        <div className={styles.grid}>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🛒Real Selling &rarr;</h2>
            <p>Where retailers can meet to buyers & demonstrate their products </p>
          </a>

          <a href="https://runash.live/buyer" className={styles.card}>
            <h2>🛍️ Real Shopping &rarr;</h2>
            <p>Where buyers can meet to sellers & shopping organic products  </p>
          </a>

          <a
            href="https://runash.live/remote"
            className={styles.card}
          >
            <h2>🧑‍💻 Remote job &rarr;</h2>
            <p>Find the best startup jobs,curated by runash remote team</p>
          </a>

          <a
            href="https://runash.live/influencer"
            className={styles.card}
          >
            <h2>🧑‍🤝‍🧑 Influencer &rarr;</h2>
            <p>
              Live influencer community here you can support businesses 
            </p>
          </a>

          <a
            href="https://runash.live/about"
            className={styles.card}
          >
            <h2>🎓 About RunAsh &rarr;</h2>
            <p>
              A live retail streaming hybrid marketplace  for retailing
            </p>
          </a>

          <a
            href="https://runash.live/mobile"
            className={styles.card}
          >
            <h2>📱RunAsh mobile &rarr;</h2>
            <p>
              Available for IOS and Android 
            </p>
          </a>

          <a
            href="https://runash.live/video"
            className={styles.card}
          >
            <h2>🙋 Live video chat &rarr;</h2>
            <p>
              Follow and get started live real chatting </p>
          </a>

          <a
            href="https://runash.live/streaming"
            className={styles.card}
          >
            <h2>📽️ Live stream &rarr;</h2>
            <p>
              Schedule a live streaming free 
            </p>
          </a>

          <a
            href="https://runash.live/watched"
            className={styles.card}
          >
            <h2>📺 Live watch  &rarr;</h2>
            <p>
              Watched live on demand  streaming  free
            </p>
          </a>

          <a
            href="https://runash.live/experience"
            className={styles.card}
          >
            <h2>🥳 Own experience  &rarr;</h2>
            <p>
              Traditional own-made real experience   
            </p>
          </a>

          <a
            href="https://runash.live/diffserve"
            className={styles.card}
          >
            <h2>🌈 Diffserve &rarr;</h2>
            <p>
              The promise of high quality live streaming 
            </p>
          </a>

          <a
            href="https://runash.live/works"
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
        
    
       <a
         href="https://Google.form.com">
         <p className={styles.card}>Get your valuable feedback ✨ &rarr;</p>
       </a>

      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         Copyright © 2022 RunAsh. All rights reserved. {' '}
          <span className={styles.logo}>
            <Image src="vercel.svg" alt="logo" width={72} height={16} />
          </span>
        </a>
     </footer>
    </div>
  )
}
