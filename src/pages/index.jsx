import Head from 'next/head'
import { Shopcollection } from '@/components/Shopcollection'
import { Products1 } from '@/components/Products1'
import { Usps } from '@/components/Usps'
import { Products2 } from '@/components/Products2'
import { Brands } from '@/components/Brands'
import { Products3 } from '@/components/Products3'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Actieshop
        </title>
        <meta
          name="description"
          content="Actieshop"
        />
      </Head>
      <Shopcollection />
      <Products1 />
      <Usps />
      <Products2 />
      <Brands />
      <Products3 />
    </>
  )
}
