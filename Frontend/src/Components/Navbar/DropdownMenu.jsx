import React from "react";
import "./Dropdown.css";
import {Navigate, useNavigate} from 'react-router-dom'

function DropdownMenu() {
  const Navigate = useNavigate()


  return (
    <>
      <div className="tabbarParent">
        <div
          className="mainDiv">
          <div className="category">
            <p  onClick={()=>Navigate('/Home') }>Home</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/Sofas') }>Sofas</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/Beds') }>Beds</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/Chairs') }>Chairs</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/StudyOffice') }>Study & Office</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/Decor') }>Decor</p>
          </div>
          <div className="category">
            <p  onClick={()=>Navigate('/Kidsroom') }>Kids-Room</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownMenu;