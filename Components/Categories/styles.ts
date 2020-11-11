import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  > div {
    margin: 0 15px;
    background-color: #f8f8f8;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`
export const MenLookbook = styled.div`
  position: relative;
  height: 530px;
  width: calc(100% / 3);
  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      text-align: right;
      margin-left: auto;
      span {
        font-size: 40px;
      }
      button {
        color: ${props => props.theme.colors.white};
        font-size: 15px;
        background-color: ${props => props.theme.colors.greenbutton};
        border: 0;
        padding: 13px 20px;
        max-width: 150px;
        margin-left: auto;
      }
    }
  }
`

export const WomenLookbook = styled.div`
  height: 530px;
  width: calc(100% / 3);
`

export const YourLookbook = styled.div`
  height: 530px;
  width: calc(100% / 3);
`
