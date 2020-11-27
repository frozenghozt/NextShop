import React from 'react'
import { Container } from './styles'

import BannerAve from '../../src/assets/BannerAve.jpg'

const Banner = (): JSX.Element => {
  return (
    <Container>
      <img src={BannerAve} alt="Letters" />
    </Container>
  )
}

export default Banner
