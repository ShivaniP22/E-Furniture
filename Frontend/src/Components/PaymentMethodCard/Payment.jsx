import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";



const Payment = () => {
  // let initialValue = {
  //   number: "",
  //   cvv: "",
  //   expiry: "",
  //   name: "",
  // };

  // const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
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
    // console.log(withoutOfferprice, totalPrice, totaldiscount);

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

    // console.log("AddressITEM="+addItems)
      
  // console.log(formData)


  return (
    <PaymentOPtionContainer>
      {/* <h4 className="chooseCard-heading">CHOOSE YOUR DEBIT CARD</h4>
      <FlexP>
        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii1.pepperfry.com/images/master-card-img.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/new-visa-logo.png"
            alt=""
          />
        </div>

      </FlexP> */}

      {/* <CardDetails>
        <form>
          <label className="formlabel">Card Number</label>
          <input
            type="number"
            name="number"
            required
            placeholder="Enter Card Number"
            className="formName"
            onChange={handleChange}
          />

          <FlexP>
            <div className="cvv">
              <label>Expiry</label> <br />
              <input
                type="text"
                name="expiry"
                required
                placeholder="MM/YY"
                className="inputexpiry"
                onChange={handleChange}
              />
            </div>

            <div className="cvv">
              <label>CVV</label> <br />
              <input
                type="password"
                required
                name="cvv"
                placeholder="Enter CVV "
                className="inputexpiry"
                onChange={handleChange}
              />
            </div>
          </FlexP>
          <br />

          <label className="formlabel">Name On Card</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name as on Card "
            className="formName"
            onChange={handleChange}
          />

          <div className="chekboxname">
            <Checkbox color="secondary" />
            Save this option securely for fastest payment
          </div>

          
        </form>
      </CardDetails> */}
      <Button onClick={addToDb}> Place Order</Button>
      {/* <div className="note">Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options.</div> */}
    </PaymentOPtionContainer>
  );
}

export {Payment}