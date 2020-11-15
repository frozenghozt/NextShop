import React, { useState } from 'react'
import { Wrapper, ShowcaseHeader, ProductContainer } from './styles'

import { data } from '../../fakedata'

import StoreProduct from '../SubComponents/StoreProduct/StoreProduct'

const StoreShowcase = (): JSX.Element => {
  const [active, setActive] = useState<string>('Popular')
  return (
    <Wrapper>
      <ShowcaseHeader>
        <ul>
          <li
            style={{ color: active === 'Popular' ? '#00c8c8' : '#727272' }}
            onClick={() => setActive('Popular')}
          >
            POPULAR
          </li>
          <li
            style={{ color: active === 'New' ? '#00c8c8' : '#727272' }}
            onClick={() => setActive('New')}
          >
            NEW ARRIVALS
          </li>
          <li
            style={{ color: active === 'Best' ? '#00c8c8' : '#727272' }}
            onClick={() => setActive('Best')}
          >
            BEST SELLERS
          </li>
          <li
            style={{ color: active === 'Special' ? '#00c8c8' : '#727272' }}
            onClick={() => setActive('Special')}
          >
            SPECIAL OFFERS
          </li>
          <li
            style={{ color: active === 'Coming' ? '#00c8c8' : '#727272' }}
            onClick={() => setActive('Coming')}
          >
            COMING SOON
          </li>
        </ul>
      </ShowcaseHeader>
      <ProductContainer>
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
        <StoreProduct image={data.image} name={data.name} />
      </ProductContainer>
    </Wrapper>
  )
}

export default StoreShowcase
