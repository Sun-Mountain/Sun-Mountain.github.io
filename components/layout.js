import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import nav from '../styles/nav.module.scss'
import styles from './layout.module.scss'

const name = 'Nika'
export const siteTitle = 'Nika Zonnenberg Portfolio'

export default function Layout({ children, home, specs }) {
  return (<div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio for Nika Zonnenberg."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div>
          <h1>Nika Zonnenberg</h1>
          <h2>
            <Link href="https://fearless.tech/">
              <a target="_blank">
                Fearless
              </a>
            </Link>
            &nbsp;Software Engineer
          </h2>
        </div>
        <div className={`${nav.nav_container}`}>
          <Link href="/">
            <a className={cn({
              [nav.selected]: home
            })}>About</a>
          </Link>
          <Link href="/specs">
            <a className={cn({
              [nav.selected]: specs
            })}>Specs</a>
          </Link>
        </div>
      </header>
      <main>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
    </div>)
} 