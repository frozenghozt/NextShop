import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import Banner from '../../Components/Banner/Banner'
import Showcase from '../../Components/Showcase/Showcase'
import Categories from '../../Components/Categories/Categories'

type Product = {
  categorie: string[]
  title: string
  review?: number
  price: number
  discountPrice?: number
  availability: number
  sku: string
  tags: string[]
  description: string
  colors: { string: string[] }
  size: string[]
}

type PropTypes = {
  products: {
    data: Array<Product>
    success: boolean
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchRes = await fetch('http://localhost:3000/api/showcase')
  const data = await fetchRes.json()

  return {
    props: {
      products: data
    }
  }
}

const Home = ({ products }: PropTypes): JSX.Element => {
  return (
    <>
      <Head>
        <title>Avenue Store</title>
      </Head>
      <Banner />
      <Showcase products={products.data} />
      <Categories />
    </>
  )
}

export default Home
