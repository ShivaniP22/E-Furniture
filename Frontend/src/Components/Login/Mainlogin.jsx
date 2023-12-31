import React from "react";
import "../../style/form.css"
import { Register } from "./Register";
import Login from "./Login";
import login from "../../Images/login.jpeg";

export const MainLogin =(props)=>{
    const [val,setVal] = React.useState(true);
    const set=()=>{
        if(val===true){
            setVal(false)
        }
        else{
            setVal(true)
        }
    }
    return (props.trigger) ? (
        <div className="popup">
            <span className="left">
                <img src={login} alt="offer" className="offer" />
            </span>
            <span className="right">
                <div className="quit">
                <button onClick={()=>props.setTrigger(false)} className="close">X</button>
                </div>
                <Register trig={val} setTrig={props.setTrigger}/>
                <Login trig={val} setTrig={props.setTrigger} />
                <div>
                <button className="signup" onClick={()=>set()}>Existing User? Log In</button>
            </div>
            </span>
        </div>
    ) : "";
}