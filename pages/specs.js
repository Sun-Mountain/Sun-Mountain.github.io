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
          />
        </div>
        <div>
          <h1>Specs</h1>
          <b>Name:</b> Eleanor<br />
          <b>CPU:</b> Ryzen 5 5600X<br />
          <b>Motherboard:</b> ROG STRIX B550-F<br />
          <b>Video Card:</b> GeoForce RTX 3070<br />
          <b>Power Supply:</b> 	SeaSonic FOCUS Plus Platinum 650<br />
          <b>OS:</b> Windows 10
        </div>
      </section>
    </Layout>
  )
} 