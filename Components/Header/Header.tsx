import React from 'react'
import Link from 'next/link'
import { Container, Logo, Navbar, Search, RightSide } from './styles'

import LogoImg from '../../src/assets/LogoImage.png'

const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Logo" />
      </Logo>
      <RightSide>
        <Navbar>
          <ul>
            <li>
              <Link href="/shop/[categorie]" as="/shop/men">
                <a>MEN</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/[categorie]" as="/shop/women">
                <a>WOMEN</a>
              </Link>
            </li>
            <li>
              <Link href="/brand">
                <a>THE BRAND</a>
              </Link>
            </li>
            <li>
              <Link href="/stores">
                <a>LOCAL STORES</a>
              </Link>
            </li>
            <li>
              <Link href="/lookbook">
                <a>LOOKBOOK</a>
              </Link>
            </li>
          </ul>
        </Navbar>
        <Search>
          <input type="text" placeholder="Search..." />
        </Search>
      </RightSide>
    </Container>
  )
}

export default Header
