import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 95px;
  bottom: -95px;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  > p {
    margin: 1px 0;
    font-size: 14px;
    color: ${props => props.theme.colors.textSecondary};
    :nth-child(2) {
      font-size: 13px;
      color: ${props => props.theme.colors.textThird};
    }
    :nth-child(3) {
      font-size: 13px;
      color: ${props => props.theme.colors.textThird};
    }
  }
`
