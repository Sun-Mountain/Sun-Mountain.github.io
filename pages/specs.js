import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

import spec from '../styles/specs.module.scss'

export default function Specs() {
  return (
    <Layout specs>
      <Head>
        <title>Gaming PC Specs</title>
      </Head>
      <section className={spec.spec_container}>
        <div>
          <img
            src="/images/eleanor.png"
            alt="Picture of personal computer. The tower is see through and glowing purple."
          />
        </div>
        <div>
          <h1>Specs</h1>
          <p>
            <b>Name:</b> Eleanor<br />
            <Link href="https://www.youtube.com/watch?v=kBIWV9kwdH4"><a target="_blank">She's a legit snack.</a></Link>
          </p>
          <p>
            <b>CPU:</b> Ryzen 5 5600X
          </p>
          <p>
            <b>Motherboard:</b> ROG STRIX B550-F
          </p>
          <p>
            <b>Video Card:</b> GeForce RTX 3070
          </p>
          <p>
            <b>Power Supply:</b> 	SeaSonic FOCUS Plus Platinum 650
          </p>
          <p>
            <b>OS:</b> Windows 10
          </p>
        </div>
      </section>
    </Layout>
  )
} 