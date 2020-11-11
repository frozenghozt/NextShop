import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const shop = (): JSX.Element => {
  const { query } = useRouter()
  return (
    <>
      <Head>
        <title>Avenue Store - {query.categorie}</title>
      </Head>
      <div>The categorie is {query.categorie}</div>
    </>
  )
}

export default shop
