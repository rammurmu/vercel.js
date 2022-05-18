import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/features">
        <a>Features</a>
      </Link>
      <Link href="/solution">
        <a>Solution</a>
      </Link>
      </Link>
      <Link href="/support">
        <a>Support</a>
      </Link>
      </Link>
      <Link href="/legal">
        <a>Legal</a>
      </Link>
      </Link>
      <Link href="/pricing">
        <a>Pricing</a>
      </Link>
      </Link>
      <Link href="/resources">
        <a>Resources</a>
      </Link>
    </nav>
  )
}
