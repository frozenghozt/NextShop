import React from 'react'
import {
  Container,
  Wrapper,
  LeftSide,
  RightSide,
  Currency,
  Register,
  Login,
  Cart
} from './styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const TopBar = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Currency>Currency: EUR</Currency>
        </LeftSide>
        <RightSide>
          <Register>Register</Register>
          <Login>Sign In</Login>
          <Cart>
            <ShoppingCartOutlinedIcon fontSize="small" />
            <span>empty</span>
          </Cart>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default TopBar
