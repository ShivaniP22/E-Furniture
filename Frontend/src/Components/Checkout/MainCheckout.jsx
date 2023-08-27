import { Checkbox } from '@mui/material';
import { CheckBoxDiv, Emi } from '../Cart/CartCSS';
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { Flex } from '../CheckoutFooter/CheckoutFooterCSS';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import OrderSummery from '../OrderSummeryCard/OrderSummery';
import Price from '../PriceCard/Price';
import { BankOffer, ChekoutContainer, LeftDiv, PriceDiv, RightDiv, Secur,AlertMsg } from './CheckoutCSS';
import { ShippingDetails } from './ShippingDetails';
import { Button } from '../PaymentMethodCard/PaymentMethodCSS';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const MainCheckout = () => {

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
  const [messageUser, setMessageUser] = useState("");
  const [visible, setVisible] = useState(true);


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
  }, [cartItems]);

  const setMessageForUser = (e) => {
    setMessageUser(e);
  }




  const addToDb = () => {
    if(user == null || user == undefined || Object.keys(user).length == 0){
      console.log(user);
      setMessageUser("We would like to onboard you on our website. Could you please either login or register first for start your journey with us?");
      setVisible(true);
    } else {
      console.log(user);
      setVisible(false);

    }
    let orderId;
    const productArray = [];
    const userData = JSON.parse(localStorage.getItem("user"));
    const address = JSON.parse(localStorage.getItem("shippingInfo"));
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
      "user": userData,
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
    };

  return (
    <div>
      <AlertMsg visible = {{visible}}>{messageUser}</AlertMsg>
      <ChekoutContainer>
        <LeftDiv>
          <OrderSummery />
          <ShippingDetails />
        </LeftDiv>

        <RightDiv>
          <PriceDiv>
            <Price />
          <Button onClick={addToDb}> Place Order</Button>
          </PriceDiv>
        </RightDiv>
      </ChekoutContainer>


      <CheckoutFooter />
    </div>
  );
}

export { MainCheckout }