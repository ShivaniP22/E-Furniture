import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar, WholeNavbar} from './NavbarCSS';
import Images from '../../Images/logo.png';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link  } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import "../../style/slider.css"
import "../Login/popup.css"
import { MainLogin } from '../Login/Mainlogin';

const Navbar = () => {
  var user = JSON.parse(localStorage.getItem('userData'));
  const [popup,popupTrig] = React.useState(false);
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Super Sale | Up to 60% Off | Use Code <span> Netcom </span></LeftText>
          <RightText><span style={{fontSize:"20px",color:"black",fontStyle:"italic",backgroundColor:"white"}}>NAME: {localStorage.getItem("nm")}</span></RightText>
        </Sale>
      </Header>
    <WholeNavbar>
      <Nav>
        <TopNav>
          <div>
            <NavLogo to="/"><img src={Images} alt={"logo"}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
          <div className="iconDiv">
            <div className="iconOne">
              <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt={"help"} className="help" />
            </div>
            <div className="iconOne">
              <button className='log' onClick={()=>popupTrig(true)}><PermIdentityOutlinedIcon className="icon" /></button>
              <h6 style={{margin:"0%"}}></h6>
            </div>
            <div className="iconOne">
              <FavoriteBorderOutlinedIcon className="icon" />
            </div>
            <div className="iconOne">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon className="icon" />
              </Link>
            </div>
          </div>
        </TopNav>
        <div className='popup-div'>
          <MainLogin trigger = {popup} setTrigger={popupTrig}/>
        </div>
        <DropdownMenu />
      </Nav>
    </WholeNavbar>
    </>
  )
}

export default Navbar;