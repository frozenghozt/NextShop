import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Page styles
import { Container } from '../../styles/pages/Shop'

import StoreShowcase from '../../../Components/StoreShowcase/StoreShowcase'

const shop = (): JSX.Element => {
  const { query } = useRouter()
  return (
    <>
      <Head>
        <title>Avenue Store - {query.categorie}</title>
      </Head>
      <Container>
        <StoreShowcase />
      </Container>
    </>
  )
}

export default shop
