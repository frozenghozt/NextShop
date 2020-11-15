import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin: -10px -10px;
  @media (min-width: 1440px) {
    width: calc(100% + 30px);
    margin: -15px -15px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ShowcaseHeader = styled.div`
  width: 100%;
  padding-bottom: 60px;
  ul {
    display: flex;
    list-style: none;
    li {
      font-weight: 500;
      font-size: 14px;
      color: ${props => props.theme.colors.textSecondary};
      margin-right: 25px;
      cursor: pointer;
      @media (min-width: 768px) {
        margin-right: 40px;
      }
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`
