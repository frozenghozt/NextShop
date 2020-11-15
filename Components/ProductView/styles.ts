import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`
export const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 40px;
  width: 100%;
  height: 600px;
`

export const Image = styled.picture`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  overflow: hidden;
  img {
    height: 100%;
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 45px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.greenbutton};
      svg {
        fill: #fff;
      }
    }
    &:nth-child(1) {
      left: 0;
      svg {
        margin-right: 3px;
      }
    }
    &:nth-child(2) {
      right: 0;
      svg {
        margin-left: 3px;
      }
    }
  }
`

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Title = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  color: #575153;
`

export const ReviewShare = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

export const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 22px;
  color: #9a9a9a;
  span {
    &:nth-child(2) {
      margin-left: 15px;
    }
  }
`

export const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px 0;
  div {
    display: flex;
    margin-bottom: 10px;
    font-size: 14px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    span {
      &:nth-child(2) {
        margin-left: 4px;
      }
    }
  }
`

export const Text = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  p {
    color: #8e8c8c;
    font-size: 14px;
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
    li {
      color: #8e8c8c;
      font-size: 14px;
    }
  }
`

export const ColorSizeQty = styled.div`
  flex: 2;
  display: flex;
  width: 100%;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      margin-bottom: 15px;
    }
    select {
      color: ${props => props.theme.colors.textSecondary};
      padding: 8px 8px;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #e7e7e7;
      &:focus {
        outline: none;
      }
    }
    :nth-child(2) {
      margin-left: 30px;
    }
    :nth-child(3) {
      margin-left: 30px;
    }
  }
`

export const Buttons = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  width: 100%;
  button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    padding: 8px 8px;
    cursor: pointer;
    color: #454647;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #737373;
    transition: all 0.3s ease-in-out;
    span {
      margin-left: 10px;
    }
    &:hover {
      color: #fff;
      border: 2px solid #333;
      background-color: #333;
    }
    &:focus {
      outline: none;
    }
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`
