import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import { Button, CartCountHeading, CartHeader, CartLeft, CartPageWrapper, CartRight, CheckBoxDiv, CoupenDiv, Emi,  PriceContainer} from './CartCSS';
import {Flex} from '../../Utils/Common.js'
import  CartCards  from './CartCards';
import Price  from '../PriceCard/Price';
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";

const CartPage= () => {
     const { cartItems } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem,setTotalItem] = useState(0);


  return (
    <>
      <CartCountHeading>
        <h2>IN YOUR CART({cartItems.length})</h2>
      </CartCountHeading>
      <CartPageWrapper>
        <CartLeft>
          <CartHeader>
            <Flex>
              <LocationOnIcon /> Enter Your Pincode For Delivery & Assembly
              Information
            </Flex>
          </CartHeader>

          <div>
            <CartCards />
          </div>
        </CartLeft>

        <CartRight>
          <CoupenDiv>
            <ConfirmationNumberIcon /> <span> Apply Coupen</span>
          </CoupenDiv>
    

          <PriceContainer>
            <Price />

          </PriceContainer>

          <br />

          <Link to={`/address`}>
            <Button>Checkout</Button>
          </Link>
        </CartRight>
      </CartPageWrapper>
    </>
  );
}



export default CartPage