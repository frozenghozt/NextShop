import React from 'react'
import {
  Container,
  Wrapper,
  MenLookbook,
  WomenLookbook,
  YourLookbook
} from './styles'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import WomenLB from '../../src/assets/womenlb.png'
import MenLB from '../../src/assets/menlb.png'
import YourLB from '../../src/assets/yourlb.png'

const QUERY = gql`
  {
    homeBoxes {
      title
      description
      image {
        url
      }
    }
  }
`

const Categories = (): JSX.Element => {
  const { loading, data } = useQuery(QUERY)
  return (
    !loading && (
      <Container>
        <Wrapper>
          <MenLookbook>
            <img src={MenLB} alt="menlookbook" />
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {data.homeBoxes[0].title}
              </span>
              <span>LOOKBOOK</span>
              <p>{data.homeBoxes[0].description}</p>
              <button>VIEW NOW</button>
            </div>
          </MenLookbook>
          <WomenLookbook>
            <img src={WomenLB} alt="womenlookbook" />
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {data.homeBoxes[1].title}
              </span>
              <span>LOOKBOOK</span>
              <p>{data.homeBoxes[1].description}</p>
              <button>VIEW NOW</button>
            </div>
          </WomenLookbook>
          <YourLookbook>
            <img src={YourLB} alt="yourlookbook" />
            <div>
              <span style={{ fontWeight: 'bold' }}>
                {data.homeBoxes[2].title}
              </span>
              <span>LOOKBOOK</span>
              <p>{data.homeBoxes[2].description}</p>
              <button>VIEW NOW</button>
            </div>
          </YourLookbook>
        </Wrapper>
      </Container>
    )
  )
}

export default Categories
