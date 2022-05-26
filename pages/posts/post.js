import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

