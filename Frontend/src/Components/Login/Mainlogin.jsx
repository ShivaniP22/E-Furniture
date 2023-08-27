import React from "react";
import "../../style/form.css"
import { Register } from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import login from "../../Images/login.jpeg";

export const MainLogin =(props)=>{
    console.log(props);
    const [val,setVal] = React.useState(true);
    const set=()=>{
        if(val===true){
            setVal(false)
        }
        else{
            setVal(true)
        }
    }
    let showLogin=localStorage.getItem("user")===null;
    let showLogout= localStorage.getItem("user")!=null;
    let showRegister=localStorage.getItem("user")===null;;
    
    return (props.trigger ) ?  (!props.isLoggedIn ) ? (
        <div className="popup">
            <span className="left">
                <img src={login} alt="offer" className="offer" />
            </span>
            <span className="right">
                <div className="quit">
                <button onClick={()=>props.setTrigger(false)} className="close">X</button>
                </div>
                <Register trig={val} setTrig={props.setTrigger} isRegistered={props.isLoggedIn}/>
                <Login trig={val} setTrig={props.setTrigger} isRegistered={props.isLoggedIn} />
                <div>
                <button className="signup" onClick={()=>set()}>Existing User? Log In</button>
            </div>
            {/* <div>
                <center>
                <span>OR Continue with</span>
                <span><img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="" className="icon"/></span>
                <span><img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="" className="icon"/></span>    
                </center>
            </div>     */}
            </span>
        </div>
    ) : (<div className="popup">
            <span className="left">
                <img src={login} alt="offer" className="offer" />
            </span>
            <span className="right">
                <div className="quit">
                    <button onClick={()=>props.setTrigger(false)} className="close">X</button>
                </div>
                <Logout trig={val} setTrig={props.setTrigger} isRegistered={props.isLoggedIn}/>
            </span>
        </div>) : ""
}