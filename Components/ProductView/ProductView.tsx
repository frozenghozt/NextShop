import React from 'react'
import {
  Container,
  Wrapper,
  Image,
  Description,
  Title,
  ReviewShare,
  Price,
  Info,
  Text,
  ColorSizeQty,
  Buttons
} from './styles'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined'

import ProductImage from '../../src/assets/productview.jpg'

const ProductView = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Image>
          <span>
            <ArrowBackIosOutlinedIcon />
          </span>
          <span>
            <ArrowForwardIosOutlinedIcon />
          </span>
          <img src={ProductImage} alt="Product Image" />
        </Image>
        <Description>
          <Title>AVE CLASSIC SWEATSHIRT</Title>
          <ReviewShare></ReviewShare>
          <Price>
            <span>€107</span>
            <span>€89.99</span>
          </Price>
          <Info>
            <div>
              <span>AVAILABILITY:</span>
              <span>In stock</span>
            </div>
            <div>
              <span>SKU:</span>
              <span>#499557</span>
            </div>
            <div>
              <span>TAGS:</span>
              <span>Classic, Casual, V-neck, Loose</span>
            </div>
          </Info>
          <Text>
            <p>
              Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh
              suspendisse est congue metus nunc, id viverra elit loreti rhoncus
              quis consecteur es. Donec pulvinar tempor lorem a pretium justo
              interdum.
            </p>
            <ul>
              <li>Elastic cuffs</li>
              <li>Casual fit</li>
              <li>100% cotton</li>
              <li>Free shipping</li>
            </ul>
          </Text>
          <ColorSizeQty>
            <div>
              <span>COLOUR</span>
              <select defaultValue="Select Colour">
                <option value="Select Colour">Select Colour</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div>
              <span>SIZE</span>
              <select defaultValue="Select Size">
                <option value="Select Size">Select Size</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div>
              <span>QTY</span>
              <select defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </ColorSizeQty>
          <Buttons>
            <button>
              <ShoppingCartOutlinedIcon fontSize="small" />
              <span>ADD TO CART</span>
            </button>
            <button>
              <FavoriteBorderOutlinedIcon fontSize="small" />
              <span>LOOKBOOK</span>
            </button>
            <button>
              <SyncAltOutlinedIcon fontSize="small" />
              <span>COMPARE</span>
            </button>
          </Buttons>
        </Description>
      </Wrapper>
    </Container>
  )
}

export default ProductView
