import React, { useReducer, useState } from 'react'
import {
  Container,
  ShowcaseHeader,
  Gallery,
  ProductOne,
  ProductTwo,
  ProductThree,
  ProductFour,
  ProductFive,
  ProductSix
} from './styles'
import product1 from '../../src/assets/product1.jpg'
import product2 from '../../src/assets/product2.jpg'
import product3 from '../../src/assets/product3.jpg'
import product4 from '../../src/assets/product4.jpg'
import product5 from '../../src/assets/product5.jpg'
import product6 from '../../src/assets/product6.jpg'
import ShowcaseTag from '../SubComponents/ShowcaseTag/ShowcaseTag'

const initialState = {
  product1: false,
  product2: false,
  product3: false,
  product4: false,
  product5: false,
  product6: false
}

const reducer = (state: typeof initialState, action) => {
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

const Showcase = (): JSX.Element => {
  const [active, setActive] = useState<string>('Popular')
  const [isHover, dispatch] = useReducer(reducer, initialState)

  const chooseActive = (category: string): void => {
    setActive(category)
  }

  return (
    <Container>
      <ShowcaseHeader>
        <ul>
          <li
            style={{ color: active === 'Popular' ? '#00c8c8' : '#727272' }}
            onClick={() => chooseActive('Popular')}
          >
            POPULAR
          </li>
          <li
            style={{ color: active === 'New' ? '#00c8c8' : '#727272' }}
            onClick={() => chooseActive('New')}
          >
            NEW ARRIVALS
          </li>
          <li
            style={{ color: active === 'Best' ? '#00c8c8' : '#727272' }}
            onClick={() => chooseActive('Best')}
          >
            BEST SELLERS
          </li>
          <li
            style={{ color: active === 'Special' ? '#00c8c8' : '#727272' }}
            onClick={() => chooseActive('Special')}
          >
            SPECIAL OFFERS
          </li>
          <li
            style={{ color: active === 'Coming' ? '#00c8c8' : '#727272' }}
            onClick={() => chooseActive('Coming')}
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
          <img src={product1} alt={product1} />
          <ShowcaseTag isHover={isHover.product1} />
        </ProductOne>
        <ProductTwo
          onMouseEnter={() => dispatch({ type: 'product2' })}
          onMouseLeave={() => dispatch({ type: 'product2' })}
        >
          <img src={product2} alt={product2} />
          <ShowcaseTag isHover={isHover.product2} />
        </ProductTwo>
        <ProductThree
          onMouseEnter={() => dispatch({ type: 'product3' })}
          onMouseLeave={() => dispatch({ type: 'product3' })}
        >
          <img src={product3} alt={product3} />
          <ShowcaseTag isHover={isHover.product3} />
        </ProductThree>
        <ProductFour
          onMouseEnter={() => dispatch({ type: 'product4' })}
          onMouseLeave={() => dispatch({ type: 'product4' })}
        >
          <img src={product4} alt={product4} />
          <ShowcaseTag isHover={isHover.product4} />
        </ProductFour>
        <ProductFive
          onMouseEnter={() => dispatch({ type: 'product5' })}
          onMouseLeave={() => dispatch({ type: 'product5' })}
        >
          <img src={product5} alt={product5} />
          <ShowcaseTag isHover={isHover.product5} />
        </ProductFive>
        <ProductSix
          onMouseEnter={() => dispatch({ type: 'product6' })}
          onMouseLeave={() => dispatch({ type: 'product6' })}
        >
          <img src={product6} alt={product6} />
          <ShowcaseTag isHover={isHover.product6} />
        </ProductSix>
      </Gallery>
    </Container>
  )
}

export default Showcase
