import React from 'react'
import {
  Container,
  Wrapper,
  MenLookbook,
  WomenLookbook,
  YourLookbook
} from './styles'
import WomenLB from '../../src/assets/womenlb.png'
import MenLB from '../../src/assets/menlb.png'
import YourLB from '../../src/assets/yourlb.png'

const Categories = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <MenLookbook>
          <div>
            <img src={MenLB} alt="menlookbook" />
            <div>
              <span style={{ fontWeight: 'bold' }}>MEN'S</span>
              <span>LOOKBOOK</span>
              <p>
                Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing
                elit lor, integer lorem consecteur signissim laciniqui.
                Elementum metus facilisis ut phasellu
              </p>
              <button>VIEW NOW</button>
            </div>
          </div>
        </MenLookbook>
        <WomenLookbook>
          <img src={WomenLB} alt="womenlookbook" />
        </WomenLookbook>
        <YourLookbook>
          <img src={YourLB} alt="yourlookbook" />
        </YourLookbook>
      </Wrapper>
    </Container>
  )
}

export default Categories
