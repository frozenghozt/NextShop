import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 100px auto;
`

export const ShowcaseHeader = styled.div`
  width: 100%;
  padding: 60px 0;
  border-top: 1px solid #eeeeee;
  ul {
    display: flex;
    list-style: none;
    li {
      font-weight: 500;
      font-size: 14px;
      color: ${props => props.theme.colors.textSecondary};
      margin: 0 20px;
      cursor: pointer;
      s s s &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
`

export const Gallery = styled.div`
  width: 100%;
  height: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 5fr 2fr 5fr;
  grid-template-areas:
    'p1 p2 p3 p3'
    'p4 p4 p3 p3'
    'p4 p4 p5 p6';
  gap: 20px;
`

export const ProductOne = styled.picture`
  position: relative;
  grid-area: p1;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`
export const ProductTwo = styled.picture`
  position: relative;
  grid-area: p2;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`
export const ProductThree = styled.picture`
  position: relative;
  grid-area: p3;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`
export const ProductFour = styled.picture`
  position: relative;
  grid-area: p4;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`
export const ProductFive = styled.picture`
  position: relative;
  grid-area: p5;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`
export const ProductSix = styled.picture`
  position: relative;
  grid-area: p6;
  background-color: #f8f8f8;
  cursor: pointer;
  > div {
    :nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    > div {
      display: flex;
    }
  }
`

export const ShowcaseTag = styled.div`
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
