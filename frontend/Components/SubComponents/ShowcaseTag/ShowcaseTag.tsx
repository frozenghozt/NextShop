import React from 'react'
import { Container, Icons } from './styles'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined'

type Props = {
  isHover: boolean
}

const ShowcaseTag = ({ isHover }: Props): JSX.Element => {
  return (
    isHover && (
      <Container>
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
      </Container>
    )
  )
}

export default ShowcaseTag
