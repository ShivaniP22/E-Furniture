import React from 'react'
import cashondelivery from '../../Images/cod.jpg' 
import { Flex, FooterHeader, FooterWrapperC} from './CheckoutFooterCSS';

const CheckoutFooter = () => {
  return (
    <FooterWrapperC>
      <div>
        <FooterHeader> WE ACCEPT </FooterHeader>

         <Flex>

          <div>
            <img
              src="https://icon-library.com/images/cash-on-delivery-icon/cash-on-delivery-icon-14.jpg"
              alt=""
            />
          </div>


        </Flex> 
      </div>

      <div>
        <FooterHeader> BUY SAFE, PAY EASY </FooterHeader>

        <Flex>
            <img
              src="https://ii1.pepperfry.com/images/svg/calendar-1.svg"
              alt=""
            />
        </Flex>
      </div>

    </FooterWrapperC>
  );
}

export { CheckoutFooter }