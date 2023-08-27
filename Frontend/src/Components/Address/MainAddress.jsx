
import { Checkbox } from '@mui/material';
import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar';
import  OrderSummery  from '../OrderSummeryCard/OrderSummery';
import PaymentMethodCard from '../PaymentMethodCard/PaymentMethod';
import  Price  from '../PriceCard/Price';
import { CheckBoxDiv, Emi } from '../PriceCard/PriceCSS';
import { AdressContainer,  LeftDiv,  PriceDiv,  RightDiv } from './AddressCSS';
import {AddressInput} from './AddressInput'


const MainAddress = () => {


  return (
    <>
    <AdressContainer>
      <LeftDiv>
        <OrderSummery />
        <AddressInput />
      </LeftDiv>

      <RightDiv>
        <PriceDiv>
          <Price />
        </PriceDiv>

      </RightDiv>
    </AdressContainer>

    <CheckoutFooter/>
    </>
  );
}

export { MainAddress }