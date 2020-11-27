import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin-bottom: 100px;
  margin: 0 auto;
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
    right: 30px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 300px;
    text-align: right;
    margin-left: auto;
    span {
      font-size: 40px;
      color: #575153;
    }
    p {
      margin: 10px 0 25px;
      color: ${props => props.theme.colors.textSecondary};
    }
    button {
      color: #737373;
      font-size: 15px;
      border: 0;
      padding: 13px 20px;
      font-weight: 600;
      max-width: 150px;
      margin-left: auto;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #737373;
      &:focus {
        outline: none;
      }
      &:hover {
        transition: background-color 300ms ease-in-out;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.greenbutton};
        border: 1px solid ${props => props.theme.colors.greenbutton};
      }
    }
  }
`

export const WomenLookbook = styled.div`
  position: relative;
  height: 530px;
  width: calc(100% / 3);
  div {
    position: absolute;
    top: 0;
    right: 30px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 300px;
    text-align: right;
    margin-left: auto;
    span {
      font-size: 40px;
      color: #575153;
    }
    p {
      margin: 10px 0 25px;
      color: ${props => props.theme.colors.textSecondary};
    }
    button {
      color: #737373;
      font-size: 15px;
      border: 0;
      padding: 13px 20px;
      font-weight: 600;
      max-width: 150px;
      margin-left: auto;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #737373;
      &:focus {
        outline: none;
      }
      &:hover {
        transition: background-color 300ms ease-in-out;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.greenbutton};
        border: 1px solid ${props => props.theme.colors.greenbutton};
      }
    }
  }
`

export const YourLookbook = styled.div`
  position: relative;
  height: 530px;
  width: calc(100% / 3);
  div {
    position: absolute;
    top: 0;
    right: 30px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 300px;
    text-align: right;
    margin-left: auto;
    span {
      font-size: 40px;
      color: #575153;
    }
    p {
      margin: 10px 0 25px;
      color: ${props => props.theme.colors.textSecondary};
    }
    button {
      color: #737373;
      font-size: 15px;
      border: 0;
      padding: 13px 20px;
      font-weight: 600;
      max-width: 150px;
      margin-left: auto;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #737373;
      transition: all 3s ease-in-out;
      &:focus {
        outline: none;
      }
      &:hover {
        transition: background-color 300ms ease-in-out;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.greenbutton};
        border: 1px solid ${props => props.theme.colors.greenbutton};
      }
    }
  }
`
