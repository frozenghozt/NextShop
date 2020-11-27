import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  width: calc(100% / 2);
  @media (min-width: 768px) {
    width: calc(100% / 3);
  }
  @media (min-width: 1440px) {
    width: calc(100% / 4);
    padding: 15px;
  }
`

export const ItemContent = styled.figure`
  position: relative;
  width: 100%;
  padding-bottom: 120%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.03);
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`

export const Tag = styled.div`
  position: absolute;
  display: none;
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
