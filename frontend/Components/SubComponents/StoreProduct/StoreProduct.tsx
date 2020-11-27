import React from 'react'
import Link from 'next/link'
import { Container, ItemContent, Tag, Icons } from './styles'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined'

type Props = {
  image: string
  name: string
}

const StoreProduct = ({ image, name }: Props): JSX.Element => {
  return (
    <Container>
      <Link href="/product/[product]" as={`/product/${name}`}>
        <ItemContent>
          <img src={image} alt={name} />
          <Tag>
            <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
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
          </Tag>
        </ItemContent>
      </Link>
    </Container>
  )
}

export default StoreProduct
