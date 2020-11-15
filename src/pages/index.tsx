import React from 'react'
import Head from 'next/head'

import Banner from '../../Components/Banner/Banner'
import Showcase from '../../Components/Showcase/Showcase'
import Categories from '../../Components/Categories/Categories'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Avenue Store</title>
      </Head>
      <Banner />
      <Showcase />
      <Categories />
    </>
  )
}

export default Home
