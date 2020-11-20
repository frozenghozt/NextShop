import React, { useReducer, useState } from 'react'
import {
  Container,
  Wrapper,
  ShowcaseHeader,
  Gallery,
  ProductOne,
  ProductTwo,
  ProductThree,
  ProductFour,
  ProductFive,
  ProductSix
} from './styles'
import ShowcaseTag from '../SubComponents/ShowcaseTag/ShowcaseTag'

const initialState = {
  product1: false,
  product2: false,
  product3: false,
  product4: false,
  product5: false,
  product6: false
}

const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case 'product1':
      return { ...state, product1: !state.product1 }
    case 'product2':
      return { ...state, product2: !state.product2 }
    case 'product3':
      return { ...state, product3: !state.product3 }
    case 'product4':
      return { ...state, product4: !state.product4 }
    case 'product5':
      return { ...state, product5: !state.product5 }
    case 'product6':
      return { ...state, product6: !state.product6 }
    default:
      return state
  }
}

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
  products: Array<Product>
}

const Showcase = ({ products }: PropTypes): JSX.Element => {
  const [active, setActive] = useState<string>('Popular')
  const [isHover, dispatch] = useReducer(reducer, initialState)
  const colorKeys = Object.keys(products[0].colors)
  console.log(products)

  return (
    <Container>
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
        <Gallery>
          <ProductOne
            onMouseEnter={() => dispatch({ type: 'product1' })}
            onMouseLeave={() => dispatch({ type: 'product1' })}
          >
            <div>
              <img src={products[0].colors[colorKeys[0]][0]} alt="product1" />
            </div>
            <ShowcaseTag isHover={isHover.product1} />
          </ProductOne>
          <ProductTwo
            onMouseEnter={() => dispatch({ type: 'product2' })}
            onMouseLeave={() => dispatch({ type: 'product2' })}
          >
            <div>
              <img src={products[1].colors[colorKeys[0]][0]} alt="product2" />
            </div>
            <ShowcaseTag isHover={isHover.product2} />
          </ProductTwo>
          <ProductThree
            onMouseEnter={() => dispatch({ type: 'product3' })}
            onMouseLeave={() => dispatch({ type: 'product3' })}
          >
            <div>
              <img src={products[2].colors[colorKeys[0]][0]} alt="product3" />
            </div>
            <ShowcaseTag isHover={isHover.product3} />
          </ProductThree>
          <ProductFour
            onMouseEnter={() => dispatch({ type: 'product4' })}
            onMouseLeave={() => dispatch({ type: 'product4' })}
          >
            <div>
              <img src={products[3].colors[colorKeys[0]][0]} alt="product4" />
            </div>
            <ShowcaseTag isHover={isHover.product4} />
          </ProductFour>
          <ProductFive
            onMouseEnter={() => dispatch({ type: 'product5' })}
            onMouseLeave={() => dispatch({ type: 'product5' })}
          >
            <div>
              <img src={products[4].colors[colorKeys[0]][0]} alt="product5" />
            </div>
            <ShowcaseTag isHover={isHover.product5} />
          </ProductFive>
          <ProductSix
            onMouseEnter={() => dispatch({ type: 'product6' })}
            onMouseLeave={() => dispatch({ type: 'product6' })}
          >
            <div>
              <img src={products[5].colors[colorKeys[0]][0]} alt="product6" />
            </div>
            <ShowcaseTag isHover={isHover.product6} />
          </ProductSix>
        </Gallery>
      </Wrapper>
    </Container>
  )
}

export default Showcase
