import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`

export const Header = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  height: 50px;
`
export const HeaderButton = styled.button`
  height: 100%;
  font-family: Roboto;
  font-weight: 500;
  font-size: 15px;
  padding: 0 18px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: #333;
  }
`
export const Body = styled.div`
  width: 100%;
  padding: 25px 15px;
  font-size: 14px;
`

export const BodyTitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 15px;
`

export const BodyText = styled.p`
  color: ${props => props.theme.colors.textThird};
`
