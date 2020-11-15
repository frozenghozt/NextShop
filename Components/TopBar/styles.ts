import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 45px;
  background-color: #333333;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1170px;
  font-size: 14px;
  margin: 0 auto;
`

export const LeftSide = styled.div`
  flex: 1;
  height: 100%;
  color: ${props => props.theme.colors.textThird};
`
export const Currency = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`

export const RightSide = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  color: ${props => props.theme.colors.textThird};
`

export const Register = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`

export const Login = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 21px 0 20px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.greenbutton};
  margin-left: 20px;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
`
