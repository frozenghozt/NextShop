import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  bottom: 0;
  width: 100%;
  text-align: center;
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

export const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.greenbutton};
    cursor: pointer;
    margin: 0 6px;
  }
`
