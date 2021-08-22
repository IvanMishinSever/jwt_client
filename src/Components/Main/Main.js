import React from "react";
import './Main.css';
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import MainData from "./MainData/MainData";

const Main = () => {
    return (
      <div className="Main">
     
          
          <p>
            HELLO
          </p>
        <Login />
        <Registration />

        <MainData />
       
        
      </div>
    );
  }
  
  export default Main;