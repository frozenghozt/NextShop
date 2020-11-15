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
          <img src={MenLB} alt="menlookbook" />
          <div>
            <span style={{ fontWeight: 'bold' }}>MEN'S</span>
            <span>LOOKBOOK</span>
            <p>
              Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing
              elit lor, integer lorem consecteur signissim laciniqui. Elementum
              metus facilisis ut phasellu
            </p>
            <button>VIEW NOW</button>
          </div>
        </MenLookbook>
        <WomenLookbook>
          <img src={WomenLB} alt="womenlookbook" />
          <div>
            <span style={{ fontWeight: 'bold' }}>WOMEN'S</span>
            <span>LOOKBOOK</span>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames . Pellentesque laoreet quis enim et mattis.
              Quisque interdum felis tellus.
            </p>
            <button>VIEW NOW</button>
          </div>
        </WomenLookbook>
        <YourLookbook>
          <img src={YourLB} alt="yourlookbook" />
          <div>
            <span style={{ fontWeight: 'bold' }}>YOUR</span>
            <span>LOOKBOOK</span>
            <p>
              See an item you like and click the favorite button to add it to
              your lookbook where you can create your own perfect look. It’s
              like your own boutique!
            </p>
            <button>VIEW NOW</button>
          </div>
        </YourLookbook>
      </Wrapper>
    </Container>
  )
}

export default Categories
