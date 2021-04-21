import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Layout from '../components/layout'

import portfolioCSS from '../styles/portfolio.module.scss'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Portfolio({ allPostsData }) {
  return (
    <Layout portfolio>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section className={portfolioCSS.portfolio_container}>
        <h1>Portfolio</h1>
        <ul>
          {allPostsData.map(({ id, title }) => (
            <li id={id}>
              {title}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}