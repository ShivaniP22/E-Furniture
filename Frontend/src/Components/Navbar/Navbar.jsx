import React, {  useEffect } from 'react';
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
  var user = JSON.parse(localStorage.getItem('user'));
  const [popup,popupTrig] = React.useState(false);
  const [loggedIn,setLoggedIn] = React.useState(false);
  console.log(user);
  let [name,setName] = React.useState("");
  
  useEffect(() => {
    // Update the document title using the browser API
    var user = JSON.parse(localStorage.getItem('user'));
    if(user != null){
      setName(user.name);
      setLoggedIn(true);
    }
  });

  
  
  
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Super Sale | Up to 60% Off | Use Code <span> Netcom </span></LeftText>
          
            <RightText>
            <span style={{fontSize:"20px",color:"white",fontStyle:"italic"}}>{name}</span>
            
            </RightText>
          
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
              <button className='log' onClick={()=>popupTrig(true)}><PermIdentityOutlinedIcon className="icon" /></button>
              <h6 style={{margin:"0%"}}></h6>
            </div>
            <div className="iconOne">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon className="icon" />
              </Link>
            </div>
          </div>
        </TopNav>
        <div className='popup-div'>
          <MainLogin trigger = {popup} setTrigger={popupTrig} isLoggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
        </div>
        <DropdownMenu />
      </Nav>
    </WholeNavbar>
    </>
  )
}

export default Navbar;