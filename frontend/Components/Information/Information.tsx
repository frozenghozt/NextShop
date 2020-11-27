import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  Header,
  HeaderButton,
  Body,
  BodyTitle,
  BodyText
} from './styles'

const Information = (): JSX.Element => {
  const [active, setActive] = useState<string>('Description')

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderButton
            style={{
              color: active === 'Description' ? '#fff' : '#575153',
              backgroundColor: active === 'Description' ? '#333' : '#f8f8f8'
            }}
            onClick={() => setActive('Description')}
          >
            DESCRIPTION
          </HeaderButton>
          <HeaderButton
            style={{
              color: active === 'Video' ? '#fff' : '#575153',
              backgroundColor: active === 'Video' ? '#333' : '#f8f8f8'
            }}
            onClick={() => setActive('Video')}
          >
            VIDEO
          </HeaderButton>
          <HeaderButton
            style={{
              color: active === 'Size' ? '#fff' : '#575153',
              backgroundColor: active === 'Size' ? '#333' : '#f8f8f8'
            }}
            onClick={() => setActive('Size')}
          >
            SIZE & SPECS
          </HeaderButton>
          <HeaderButton
            style={{
              color: active === 'Delivery' ? '#fff' : '#575153',
              backgroundColor: active === 'Delivery' ? '#333' : '#f8f8f8'
            }}
            onClick={() => setActive('Delivery')}
          >
            DELIVERY & RETURNS
          </HeaderButton>
          <HeaderButton
            style={{
              color: active === 'Reviews' ? '#fff' : '#575153',
              backgroundColor: active === 'Reviews' ? '#333' : '#f8f8f8'
            }}
            onClick={() => setActive('Reviews')}
          >
            REVIEWS
          </HeaderButton>
        </Header>
        <Body>
          <BodyTitle>
            NUNC EGESTAS POSUERE ENIM, EU MAXIMUS ERAT POSUERE EGET
          </BodyTitle>
          <BodyText>
            Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla
            sapien magna, interdum quis pretium nec, pharetra at felis.
            Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam
            suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et
            dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam
            congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac
            malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus
            lectus. In eget lorem tellus. <br /> <br />
            Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper
            imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna
            et hendrerit sodales. Nunc molestie risus nec fringilla lacinia.
            Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget,
            placerat at metus. Proin dictum lobortis velit, id suscipit orci
            faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam
            placerat, id dignissim elit auctor. Vestibulum scelerisque sem et
            lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti.
            Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit.
            Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra.
            Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue
            auctor vulputate. Quisque a convallis diam commodo eget diam id,
            eleifend dictum libero. Etiam varius, nisi vel dignissim sodales,
            enim dui posuere mauris, in aliquet lorem eros eget neque.
          </BodyText>
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Information
