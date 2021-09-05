import React from "react";
import './Main.css';
//import Registration from "../Authorization/Registration/Registration";
//import Login from "../Authorization/Login/Login";
import MainData from "./MainData/MainData";
//import Activation from "../Authorization/Activation/Activation";
import Authorization from "../Authorization/Authorization";
import {openRegistrationForm, openLoginForm} from '../Authorization/authSlice';

const Main = (props) => {
  const {dispatch} = props;

const renderMainViewBeforeRegistration = () => {
  return (
  <div className="Main">
    <Authorization
    dispatch={dispatch}
    userData={props.userData}
    />
  </div>

  );
};
const renderMainViewAfterRegistration = () => {
  return (
  <div className="Main">
    <Authorization
    dispatch={dispatch}
    userData={props.userData}
    />
    <MainData 
    dispatch={dispatch}
    userData={props.userData}
    getData={props.getData}
    />
 </div>

  );
};

//RENDER


  if (props.userData.openMainData === true) {
      return renderMainViewAfterRegistration();
  }
  /*
  if (props.userData.openLoginForm === true) {
    return renderLogin();
}
  if (props.userData.openActivationForm === true) {
    return renderActivation();
  }
 */ 
  
      return renderMainViewBeforeRegistration();

  
 
 
 
  
}
  
  export default Main;