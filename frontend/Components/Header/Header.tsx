import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Wrapper, Logo, Navbar, Search, RightSide } from './styles'

import LogoImg from '../../src/assets/LogoImage.png'

const Header = (): JSX.Element => {
  const { asPath } = useRouter()
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link href="/">
            <a>
              <img src={LogoImg} alt="Logo" />
            </a>
          </Link>
        </Logo>
        <RightSide>
          <Navbar>
            <ul>
              <li>
                <Link href="/shop/[categorie]" as="/shop/men">
                  <a
                    style={{
                      color: asPath === '/shop/men' ? '#00c8c8' : '#222'
                    }}
                  >
                    MEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shop/[categorie]" as="/shop/women">
                  <a
                    style={{
                      color: asPath === '/shop/women' ? '#00c8c8' : '#222'
                    }}
                  >
                    WOMEN
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/brand">
                  <a
                    style={{ color: asPath === '/brand' ? '#00c8c8' : '#222' }}
                  >
                    THE BRAND
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/stores">
                  <a
                    style={{ color: asPath === '/stores' ? '#00c8c8' : '#222' }}
                  >
                    LOCAL STORES
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lookbook">
                  <a
                    style={{
                      color: asPath === '/lookbook' ? '#00c8c8' : '#222'
                    }}
                  >
                    LOOKBOOK
                  </a>
                </Link>
              </li>
            </ul>
          </Navbar>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

export default Header
