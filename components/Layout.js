import Head from 'next/head'
import styles from "../styles/main.module.css";
import Link from 'next/link';

const name = 'Takanori'
 
const Layout = ({children, home}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="next.js tutorial for internship" />
        <meta name="og:title" content="sample blog"/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head> 
      <header class={styles.header}>
        {home ? (
          <>
            <img class={styles.img} src="/me.jpg" alt="me" width="30%" height="30%" />
            <h1>{name}</h1>
          </>
        ): (
          <>
            <Link href="/">
              <a>
                <img class={styles.img} src="/me.jpg" alt="me" width="30%" height="30%"/>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </>
      )}
    </div>
  )
};

export default Layout;
