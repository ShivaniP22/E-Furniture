import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";



const Payment = () => {
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  
  console.log(cartItems)
  const [price, setPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  let [orderId, setOrderId] = useState({});
  const [messageUser, setMessageUser] = useState({});


  useEffect(() => {
    let items = 0;
    let price = 0;
    let discount = 0;
    let quantity = 0;

    console.log()
    cartItems.map((el) => {
      price += el.price * el.quantity;
      discount += Math.round((el.price * el.discount) / 100);

    });

    console.log(price, discount);

    let totalPrice = price - discount;
    console.log(totalPrice);

    setTotalItem(items);
    setPrice(price);
    setDiscount(discount);
    setTotalPrice(totalPrice);
    setUser(JSON.parse(localStorage.getItem("user")));
    setAddress(JSON.parse(localStorage.getItem("shippingInfo")));
  }, [cartItems]);

  const setMessageForUser = (e) => {
    setMessageUser(e);
  }

  const addToDb = () => {
    let orderId;
    const productArray = [];
    cartItems.map((el) => {
      var product = {
        "product": el.product,
        "name": el.name,
        "price": el.price,
        "quantity": el.quantity,
        "image": el.image
      };
      productArray.push(product);


    });
    const body1 = {
      "orderItems": productArray,
      "user": user,
      "addressInfo": address,
      "totalPrice": totalPrice - discount,
      "itemsPrice": totalPrice


    }
    let DataVal = {};
    axios
      .post("http://localhost:9000/api/v1/order/new", body1)
      .then((response) => {
          DataVal = {
            name: response.data.order._id
          };
          console.log(DataVal);
          console.log(orderId);
          console.log(cartItems);
      
          navigate("/paymentdone",{ state:DataVal});
    }).catch((error) => console.log("error", error));
      setMessageForUser("User is not logged in");
    };



  return (
    <PaymentOPtionContainer>

      <Button onClick={addToDb}> Place Order</Button>
      <div className="note">Note: *As of now, we are only supporting cash on delivery. Please keep sufficient cash with you at the time of delivery.</div>
    </PaymentOPtionContainer>
  );
}

export {Payment}