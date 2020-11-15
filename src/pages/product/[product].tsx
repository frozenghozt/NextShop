import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '../../styles/pages/Product'

import ProductView from '../../../Components/ProductView/ProductView'
import Information from '../../../Components/Information/Information'

const shop = (): JSX.Element => {
  const { query } = useRouter()
  return (
    <>
      <Head>
        <title>Avenue - {query.product}</title>
      </Head>
      <Container>
        <ProductView />
        <Information />
      </Container>
    </>
  )
}

export default shop
