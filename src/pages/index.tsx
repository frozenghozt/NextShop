import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import TopBar from '../../Components/TopBar/TopBar'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Showcase from '../../Components/Showcase/Showcase'
import Categories from '../../Components/Categories/Categories'

const Home = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Avenue Store</title>
      </Head>
      <TopBar />
      <Header />
      <Banner />
      <Showcase />
      <Categories />
    </Container>
  )
}

export default Home
