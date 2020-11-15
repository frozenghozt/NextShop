import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 1024px) {
    padding: 0 40px;
  }
  @media (min-width: 1600px) {
    padding: 0 100px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  height: 60px;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const RightSide = styled.div`
  flex: 3;
  display: none;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
`

export const Navbar = styled.nav`
  flex: 1;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    li {
      font-weight: 500;
      margin: 20px 10px;
      cursor: pointer;
      @media (min-width: 1400px) {
        margin: 20px;
      }
      a {
        font-size: 14px;
        text-decoration: none;
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
