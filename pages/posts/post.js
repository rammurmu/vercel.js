import Head from 'next/head'
import Link from 'next/link';


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="index">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

