import React,{useState} from 'react'
import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Payment = () => {
  let initialValue = {
    number: "",
    cvv: "",
    expiry: "",
    name: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // console.log(formData)

     const handleSubmit = () => {
         navigate("/cardpayment");
        }

  return (
    <PaymentOPtionContainer>
      <h4 className="chooseCard-heading">CHOOSE YOUR DEBIT CARD</h4>
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

      </FlexP>
      <Button onClick={handleSubmit}> PROCEED TO PAY</Button>
      <div className="note">Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options.</div>
    </PaymentOPtionContainer>
  );
}

export {Payment}