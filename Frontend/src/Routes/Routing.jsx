
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
import MainProductList from '../Components/ProductList/MainProductList';
import { MainAddress } from "../Components/Address/MainAddress";
import Popup from "../Components/Login/Popup"
import Logout from "../Components/Login/Logout"
import Success from '../Components/SucessPage/Success';
import CardPayment from '../Components/CardPayment/CardPayment';
import Beds from '../Components/layout/Beds';
import Sofas from '../Components/layout/Sofas';
import Decor from '../Components/layout/Decor';
import Chairs from '../Components/layout/Chairs';
import StudyOffice from '../Components/layout/StudyOffice';
import KidsRoom from '../Components/layout/KidsRoom';
import Returnrefund from '../Components/layout/Return';
import About from'../Components/layout/About';
import Contact from '../Components/layout/Contact';
import Customers from '../Components/Hero/Customers';




const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/productlist" element={<MainProductList />} />
        <Route path="/product/:id" element={<MainProductDetail />} />
        <Route path="/address" element={<MainAddress />} />
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/login" element={<Popup />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/paymentdone" element={<Success />} />
        <Route path="/Beds" element={<Beds />} />
        <Route path="/Sofas" element={<Sofas />} />
        <Route path="/Decor" element={<Decor />} />
        <Route path="/Chairs" element={<Chairs />} />
        <Route path="/StudyOffice" element={<StudyOffice />} />
        <Route path="/KidsRoom" element={<KidsRoom />} />
        <Route path="/Returnrefund" element={<Returnrefund />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Customers" element={<Customers />} />






      </Routes>
    </div>
  );
}

export { Routing }