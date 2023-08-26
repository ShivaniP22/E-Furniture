import React from 'react';
import {FooterBox, FooterFirstHalf, UsefulLinks, Partners, NeedHelp, DownloadApp, FooterSecondHalf, PopularCategories, PopularBrands, Cities, FooterThirdHalf, FooterLeft, FooterRight, FooterFourthHalf} from './FooterCSS';
import Apple from '../../Images/FooterImages/apple.png';
import GooglePlay from '../../Images/FooterImages/googleplay.png';
import Visa from '../../Images/FooterImages/footer-visacard-logo.png';
import MasterCard from '../../Images/FooterImages/footer-mastercard-logo.png'
import MaestroCard from '../../Images/FooterImages/footer-maestrocard-logo.png'
import AmericanExpress from '../../Images/FooterImages/footer-amexcard-logo.png'
import RuPay from '../../Images/FooterImages/footer-rupaycard-logo.png'
import DinnersCard from '../../Images/FooterImages/footer-dinnerscard-logo.png'
import Wallet from '../../Images/FooterImages/footer-wallet-logo.png'
import InternetBanking from '../../Images/FooterImages/footer-internet-banking-logo.png'
import Facebook from '../../Images/FooterImages/footer-facebook-logo.png'
import Twitter from '../../Images/FooterImages/footer-twitter-logo.png'
import Youtube from '../../Images/FooterImages/footer-youtube-logo.png'
import Instagram from '../../Images/FooterImages/footer-instagram-logo.webp'
import Linkedin from '../../Images/FooterImages/footer-linkedin-logo.png'
import Pinterest from '../../Images/FooterImages/footer-pinterest-logo.png'
import cashondelivery from '../../Images/cod.jpg' 
// import { Face, Pin } from '@mui/icons-material';

const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterFirstHalf>
          <UsefulLinks>
            <ul>
              <li className="footer--headings">Useful Links</li>
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Customer Reviews</li>
            </ul>
          </UsefulLinks>
          <NeedHelp>
            <ul>
              <li className="footer--headings">Need Help</li>
              <li>Contact Us</li>
              <li>Returns & Refund</li>
              <li>FAQs</li>
            </ul>
          </NeedHelp>
        </FooterFirstHalf>
        <hr />
        <FooterThirdHalf>
          <FooterLeft>
            <h1 className="titles">We accept</h1>
            <div>
              {/* <img src={Visa} alt={"VisaLogo"} />
              <img src={MasterCard} alt={"MasterCardLogo"} />
              <img src={MaestroCard} alt={"MaestroCardLogo"} />
              <img src={AmericanExpress} alt={"AmericanExpressLogo"} />
              <img src={RuPay} alt={"RupayLogo"} />
              <img src={DinnersCard} alt={"DinnersCardLogo"} />
              <img src={Wallet} alt={"WalletLogo"} /> */}
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