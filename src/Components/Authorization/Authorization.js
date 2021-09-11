import React from 'react';
import './Authorization.css';
import Registration from "../Authorization/Registration/Registration";
import Login from "../Authorization/Login/Login";

import Activation from "../Authorization/Activation/Activation";
import {openRegistrationForm, openLoginForm, logout, getInitialState} from '../Authorization/authSlice';
import { getInitialStateData } from '../Main/userSlice';
import Example1 from '../Example_Promises';

const Authorization= (props) => {
    const {dispatch} = props;

    //RENDER COMPONENT
  const renderRegistration = () => {
    return (
    <Registration 
      dispatch={dispatch}
      userData={props.userData}
      />
    );
  };

//LOGIN COMPONENT
const renderLogin = () => {
  return (
  <Login 
    dispatch={dispatch}
    userData={props.userData}
    />
  );
};
//ACTIVATION COMPONENT
const renderActivation = () => {
  return (
  <Activation 
    dispatch={dispatch}
    userData={props.userData}
    />
  );
};
// HANDLER
const onSend = () => {

    dispatch(logout());
    dispatch(getInitialState());
    dispatch(getInitialStateData());
}

const render = () =>{
    if (props.userData.email) {
        return (
            <div className="Authorization">
            <h3>Пользователь {props.userData.email}</h3>
            <button onClick = {() => onSend()}>Выход</button>
            
            </div>
          );
         
    } else {
        return (
            <div className="Authorization">
            <button onClick = {() => dispatch(openLoginForm())}>Логин</button>
            <button onClick = {() => dispatch(openRegistrationForm())}>Регистрация</button>
            <h3>Пользователь не авторизован</h3>
            <Example1 dispatch={dispatch} />
            
         
            </div>
          );
    }
   
}


    if (props.userData.openRegistrationForm === true) {
        return renderRegistration();
    }
    if (props.userData.openLoginForm === true) {
      return renderLogin();
  }
    if (props.userData.openActivationForm === true) {
      return renderActivation();
    } 
    return render(); 
  }
  
  export default Authorization;