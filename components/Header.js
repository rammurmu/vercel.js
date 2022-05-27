import styles from '../styles/Header.module.css'
import type { NextPage } from "next"
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header:NextPage = () => (
  const { openSignIn } = useClerk();

   return (
  <header className={styles.header}>
   <div className={styles.headerItem}>
    <div className={styles.left}>
      <Link href="/">
        <a className={styles.homeButton}>RunAsh</a>
          <Image src="/logo.svg" width="32" height="32" alt="Logo" />
          <span className={styles.appName}>RunAsh</span>
        </a>
      </Link>
    </div>
    <SignedIn>
    <div className={styles.headerItem}>
    <div className={styles.right}>
     <UserButton userProfileURL="/user" afterSignOutAll="/" />
    </div>
    </SignedIn>
      <SignedOut>
        <div className={styles.headerItem}>
          <UserButton userProfileURL="/user" afterSignOutAll="/" />
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileURL="/user" afterSignOutAll="/" />
      </div>
      </SignedIn>
      </Signed out>
         <div className={styles.headerItem}>
           <a onClick={() => openSignIn()} className={styles.signInButton}>
             Sign in
           </a>
    </div>
   <Signed out>
  </header>
)

export default Header

      
