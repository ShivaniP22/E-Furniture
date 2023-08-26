import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../../style/form.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Login/action";
import axios from "axios";


export const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const[nvalid,setnvalid]=useState("");
  const[evalid,setevalid]=useState("");
  const[mvalid,setmvalid]=useState("");
  const[pvalid,setpvalid]=useState("");



    const [isAuthenticate , setisAuthenticated] = useState(false)
 

    const [formData, setFormData] = useState({
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
    });


    

    const { name, mobileNumber, email, password } = formData;

    const handleChange = (e) => {

      
      
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value});
      
      
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("IN LOGIN")
      const pattern = /^\d{10}$/;
    
      

      
      

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

     
        var raw = JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
          password: password,
        });
      
      

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:9000/api/v1/user/register", requestOptions)
        .then((response) => response.json())
        .then((data) =>{
                if (data) {
                  
                 
                  
                  if (data.success) {
                  if(pattern.test(mobileNumber)==true)
                  {
                    setnvalid( setnvalid(<span style={{color:"blue",fontSize:"13px"}}>Registration successful</span>))
                    props.setTrig(false);
                    setisAuthenticated = true;
                    console.log("IN DATA save")
                    

                  }else{
                      setmvalid("Enter Valid mobile Number")
                    }
                   
                  } else {
                   
                   console.log(data)
                    if(data.message.includes("Please Enter Your Name")||data.message.includes("name"))
                      setnvalid(<span style={{color:"red",fontSize:"13px"}}>Please Enter Your Name</span>)
                      else
                      setnvalid("")
                      if(data.message.includes("Please Enter Your Mobile Number"))
                      setmvalid("Please Enter Your Mobile Number")
                     else setmvalid("")
                      if(data.message.includes("Please Enter Your Email"))
                      setevalid("Please Enter Your Email")
                      else setevalid("")
                      if(data.message.includes("Please Enter Your Password"))
                      setpvalid("Please Enter Your Password")
                      else setpvalid("")


                       setnvalid(<span style={{color:"red",fontSize:"13px"}}>{data.message}</span>)
                  }
                
                }
        })
        .catch((error) => console.log("error", error));
      
    };





      return props.trig ? (
        <div className="full">
          <form onSubmit={handleSubmit}>
            {nvalid}
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input
              value={name}
              onChange={handleChange}
              type="text"
              className="form"
              name="name"
            />
            <br />
            <br />
            <span style={{color:"red",fontSize:"13px"}}>{mvalid}</span>
            <br />
            
            <label htmlFor="number"  >Mobile Number</label>
            <br />
            <input
              value={mobileNumber}
              onChange={handleChange}
              type="number"
              name="mobileNumber"
              className="number"
            />
            <button className="btn-num">VERIFY WITH OTP</button>
            <br />
            <span style={{color:"red",fontSize:"13px"}}>{evalid}</span>
            <br />
            
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="form"
            />
            <br />
            <span style={{color:"red",fontSize:"13px"}}>{pvalid}</span>
            <br />
            
            <label htmlFor="password">Password</label>
            <br />
            <input
              value={password}
              onChange={handleChange}
              name="password"
              type="password"
              className="form"
            />
            <br />
            <br />

            <button className="reg" type="submit">
              REGISTER
            </button>
          </form>
          <br />
          <br />
        </div>
      ) : (
        ""
      );
};
