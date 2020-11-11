import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 1200px) {
    padding: 0 40px;
  }
  @media (min-width: 1600px) {
    padding: 0 100px;
  }
`
export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const RightSide = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`

export const Navbar = styled.nav`
  flex: 1;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    li {
      font-weight: bolder;
      margin: 20px 10px;
      cursor: pointer;
      @media (min-width: 1400px) {
        margin: 20px;
      }
      a {
        font-size: 14px;
        text-decoration: none;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  input {
    margin-left: 20px;
    padding: 7px 7px;
    color: ${props => props.theme.colors.text};
    background-color: #f8f8f8;
    border: 1px solid #e5e5e5;
    &:focus {
      outline: none;
    }
  }
`
