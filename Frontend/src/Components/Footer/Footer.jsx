import React from 'react';
import {FooterBox, FooterFirstHalf, UsefulLinks, NeedHelp, FooterThirdHalf, FooterLeft, FooterRight} from './FooterCSS';
import Facebook from '../../Images/FooterImages/footer-facebook-logo.png'
import Twitter from '../../Images/FooterImages/footer-twitter-logo.png'
import Instagram from '../../Images/FooterImages/footer-instagram-logo.webp'
import Linkedin from '../../Images/FooterImages/footer-linkedin-logo.png'
import cashondelivery from '../../Images/cod.jpg' 
import {Navigate, useNavigate} from 'react-router-dom'

// import { Face, Pin } from '@mui/icons-material';

const Footer = () => {
  const Navigate = useNavigate()

  return (
    <>
      <FooterBox>
        <FooterFirstHalf>
          <UsefulLinks>
            <ul>
              <li className="footer--headings">Useful Links</li>
              <li onClick={()=>Navigate('/About') }>About Us</li>
              <li>Our Blog</li>
              <li onClick={()=>Navigate('/Customers') }>Customer Reviews</li>
            </ul>
          </UsefulLinks>
          <NeedHelp>
            <ul>
              <li className="footer--headings">Need Help</li>
              <li onClick={()=>Navigate('/Contact') }>Contact Us</li>
              <li onClick={()=>Navigate('/Returnrefund') }>Returns & Refund</li>
              <li>FAQs</li>
            </ul>
          </NeedHelp>
        </FooterFirstHalf>
        <hr />
        <FooterThirdHalf>
          <FooterLeft>
            <h1 className="titles">We accept</h1>
            <div>
              <img src={cashondelivery} alt={"Cash on Delivery"} />
            </div>
          </FooterLeft>
          <FooterRight>
          <h1 className="titles">Like what you see? You'll like us even more here</h1>
            <div>
              <img src={Facebook} alt={"FacebookLogo"} />
              <img src={Twitter} alt={"TwitterLogo"} />
              <img src={Instagram} alt={"InstagramLogo"} />
              <img src={Linkedin} alt={"LinkedinLogo"} />
            </div>
          </FooterRight>
        </FooterThirdHalf>
        <hr />
      </FooterBox>
    </>
  )
}

export default Footer