import React, { useState } from 'react'
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
  ProductSix,
  ShowcaseTag,
  Icons
} from './styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined'

const QUERY = gql`
  {
    products {
      id
      title
      image {
        url
      }
    }
  }
`

const Showcase = (): JSX.Element => {
  const [active, setActive] = useState<string>('Popular')
  const { data } = useQuery(QUERY)
  console.log(data)
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
          <ProductOne>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product1"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductOne>
          <ProductTwo>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product2"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductTwo>
          <ProductThree>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product3"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductThree>
          <ProductFour>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product4"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductFour>
          <ProductFive>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product5"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductFive>
          <ProductSix>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${data?.products[0].image[0].url}`}
                alt="product6"
              />
            </div>
            <ShowcaseTag>
              <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
              <p>Classic casual t-shirt for women on the move.</p>
              <Icons>
                <span>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <SyncAltOutlinedIcon fontSize="small" />
                </span>
              </Icons>
            </ShowcaseTag>
          </ProductSix>
        </Gallery>
      </Wrapper>
    </Container>
  )
}

export default Showcase
