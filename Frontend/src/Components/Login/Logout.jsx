import { Link, useNavigate,navigate } from "react-router-dom";
import "../../style/form.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Logout(props) {
    console.log(props);

    const dispatch = useDispatch();

  const navigate = useNavigate();
   


  const [isAuthenticate , setisAuthenticated] = useState(true);
  const userData = JSON.parse(localStorage.getItem("user"));
  let loadHome = false;
  const [formData, setFormData] = useState({
    name: userData.name,
    mobileNumber: userData.mobileNumber,
    email: userData.email,
  });
  console.log(formData);


  console.log(formData);

  const handleSubmit = (e) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    
    console.log("IN Logout")
    localStorage.removeItem("nm");
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shoppingInfo");
    setisAuthenticated=false;
    props.setLoggedIn=false;
    
  };

  const handleChange = (e) => {

      
      
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value.trim() });
  
  
};

  return (props.isRegistered) ? (
    <div className="full">
        <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={formData.name}
          type="text"
          onChange={handleChange}
          className="form"
          name="name"
          readOnly
        />
        <br />
        <br />
        <br />
        
        <label htmlFor="number">Mobile Number</label>
        <br />
        <input
          value={formData.mobileNumber}
          type="number"
          onChange={handleChange}
          name="mobileNumber"
          className="number"
          readOnly
        />
        <br />
        <br />
        
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="form"
          readOnly
        />
        <br />
        <br />
        
        <br />
        <br />

        <button className="reg" type="submit">
          LOGOUT
        </button>
      </form>
      <br />
      <br />
    </div>
  ) : (
    ""
  ) ;

}

export default Logout;
