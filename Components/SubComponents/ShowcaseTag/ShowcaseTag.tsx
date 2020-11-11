import React from 'react'
import { Container } from './styles'

type Props = {
  isHover: boolean
}

const ShowcaseTag = ({ isHover }: Props): JSX.Element => {
  return (
    isHover && (
      <Container>
        <p>WOMENS BURNT ORANGE CASUAL TEE €29.95</p>
        <p>Classic casual t-shirt for women on the move.</p>
        <p>100% cotton.</p>
      </Container>
    )
  )
}

export default ShowcaseTag
