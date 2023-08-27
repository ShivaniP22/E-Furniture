import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from './SuccessCSS';
import { SuccessWrapper } from './SuccessCSS';
import {runFireworks}  from "../../Utils/confettiLibrary"
import { useSelector, useDispatch } from 'react-redux';
import React,{useEffect,useState} from 'react'
import { removeItemsFromCart } from "../../Redux/Cart/action";
import { useLocation } from "react-router-dom";

function Success() {

  const location = useLocation();
  const data = location.state;
  console.log(data);
    const dispatch = useDispatch();
    const cartItemsLocal  = JSON.parse(localStorage.getItem("cartItems"));
    const deleteCartItems = (id) => {
      dispatch(removeItemsFromCart(id));
    };
    React.useEffect(() => {
        runFireworks();
        cartItemsLocal.map((el) => {
          deleteCartItems(el.product);
        })
        localStorage.removeItem("cartItems");
        
    },[]);

    
    
  return (
    <SuccessWrapper>
      <div>
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2 className='thank'>Thank you for your order! </h2>
        <h2 className='email-msg'>Reference Id {data.name}</h2>

        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">If you have any questions, please email to </p>
        <p className="email">efurniture@gmail.com </p>
        
        <Link to="/">
          <Button>Continue Shopping </Button>
        </Link>
      </div>
    </SuccessWrapper>
  );
}

export default Success


